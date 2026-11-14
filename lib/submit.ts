import { getPathname } from "@/i18n/navigation";
import type { AppPathname } from "@/i18n/pathnames";
import { contactMail, interestMail, readContact, readInterest, validateContact, validateInterest, type LocaleCode } from "@/lib/forms";
import { deliverEmail } from "@/lib/mail";
import { clientIp, rateLimit, sameOrigin } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

type Payload = { data: Record<string, string>; html: boolean };

function json(body: unknown, status = 200, headers?: HeadersInit) {
  return NextResponse.json(body, {
    status,
    headers: { "cache-control": "no-store", ...Object.fromEntries(new Headers(headers)) },
  });
}

async function readPayload(request: Request): Promise<Payload | NextResponse> {
  const length = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(length) && length > 40_000) {
    return json({ ok: false, error: "invalid" }, 413);
  }

  const type = request.headers.get("content-type") || "";

  if (type.includes("application/json")) {
    let value: unknown;
    try {
      value = await request.json();
    } catch {
      return json({ ok: false, error: "invalid" }, 400);
    }
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return json({ ok: false, error: "invalid" }, 400);
    }
    const data: Record<string, string> = {};
    for (const [key, entry] of Object.entries(value)) {
      if (typeof entry === "string") data[key] = entry;
    }
    return { data, html: false };
  }

  if (type.includes("application/x-www-form-urlencoded") || type.includes("multipart/form-data")) {
    let form: FormData;
    try {
      form = await request.formData();
    } catch {
      return json({ ok: false, error: "invalid" }, 400);
    }
    const data: Record<string, string> = {};
    for (const [key, entry] of form.entries()) {
      if (typeof entry === "string") data[key] = entry;
    }
    return { data, html: true };
  }

  return json({ ok: false, error: "invalid" }, 415);
}

function redirectTo(request: Request, locale: LocaleCode, href: AppPathname, query: string) {
  const path = getPathname({ locale, href });
  const url = new URL(request.url);
  url.pathname = path;
  url.search = query;
  return NextResponse.redirect(url, 303);
}

function respond(request: Request, html: boolean, locale: LocaleCode, href: AppPathname, query: string, body: unknown, status: number) {
  if (html) return redirectTo(request, locale, href, query);
  const headers = status === 429 ? { "retry-after": "600" } : undefined;
  return json(body, status, headers);
}

export async function handleContact(request: Request) {
  if (!sameOrigin(request)) return json({ ok: false, error: "invalid" }, 403);

  const payload = await readPayload(request);
  if (payload instanceof NextResponse) return payload;

  const input = readContact(payload.data);
  const limit = rateLimit(`contact:${clientIp(request)}`);
  if (!limit.ok) {
    return respond(request, payload.html, input.locale, "/contact", "?error=rate&form=message", { ok: false, error: "rate" }, 429);
  }

  if (input.honeypot) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/contact",
      `?sent=${input.intent}&delivery=accepted`,
      { ok: true, delivery: "accepted" },
      200,
    );
  }

  const fields = validateContact(input);
  if (Object.keys(fields).length > 0) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/contact",
      `?error=invalid&form=${input.intent}`,
      { ok: false, error: "invalid", fields },
      400,
    );
  }

  const mail = await deliverEmail(contactMail(input));
  if ("failed" in mail && mail.failed) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/contact",
      `?error=delivery&form=${input.intent}`,
      { ok: false, error: "delivery" },
      502,
    );
  }

  const delivery = mail.delivered ? "email" : "accepted";
  return respond(
    request,
    payload.html,
    input.locale,
    "/contact",
    `?sent=${input.intent}&delivery=${delivery}`,
    { ok: true, delivery },
    200,
  );
}

export async function handleInterest(request: Request) {
  if (!sameOrigin(request)) return json({ ok: false, error: "invalid" }, 403);

  const payload = await readPayload(request);
  if (payload instanceof NextResponse) return payload;

  const input = readInterest(payload.data);
  const limit = rateLimit(`interest:${clientIp(request)}`);
  if (!limit.ok) {
    return respond(request, payload.html, input.locale, "/products", "?error=rate&form=interest", { ok: false, error: "rate" }, 429);
  }

  if (input.honeypot) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/products",
      "?sent=interest&delivery=accepted",
      { ok: true, delivery: "accepted" },
      200,
    );
  }

  const fields = validateInterest(input);
  if (Object.keys(fields).length > 0) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/products",
      "?error=invalid&form=interest",
      { ok: false, error: "invalid", fields },
      400,
    );
  }

  const mail = await deliverEmail(interestMail(input));
  if ("failed" in mail && mail.failed) {
    return respond(
      request,
      payload.html,
      input.locale,
      "/products",
      "?error=delivery&form=interest",
      { ok: false, error: "delivery" },
      502,
    );
  }

  const delivery = mail.delivered ? "email" : "accepted";
  return respond(
    request,
    payload.html,
    input.locale,
    "/products",
    `?sent=interest&delivery=${delivery}`,
    { ok: true, delivery },
    200,
  );
}
