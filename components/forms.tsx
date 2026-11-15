"use client";

import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/locales";

type FieldErrors = Record<string, string>;
type Status = "idle" | "pending" | "email" | "accepted" | "rate" | "delivery";

export function ContactForm({ kind, locale }: { kind: "message" | "business"; locale: Locale }) {
  const t = useTranslations("forms");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const prefix = kind;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("pending");
    setErrors({});
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(data),
    });
    const body = (await response.json().catch(() => null)) as { delivery?: string; error?: string; fields?: FieldErrors } | null;
    if (response.status === 429 || body?.error === "rate") {
      setStatus("rate");
      summaryRef.current?.focus();
      return;
    }
    if (body?.error === "delivery") {
      setStatus("delivery");
      summaryRef.current?.focus();
      return;
    }
    if (!response.ok) {
      setStatus("idle");
      setErrors(body?.fields ?? { form: "invalid" });
      summaryRef.current?.focus();
      return;
    }
    form.reset();
    setStatus(body?.delivery === "email" ? "email" : "accepted");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (status === "email" || status === "accepted") {
    return (
      <div className="mt-8 border border-stroke bg-paper p-6" role="status">
        <h3 ref={successRef} tabIndex={-1} className="font-serif text-3xl font-normal outline-none">
          {t("successTitle")}
        </h3>
        <p className="mt-3">{status === "email" ? t("successEmail") : t("successAccepted")}</p>
      </div>
    );
  }

  return (
    <form className="relative mt-8 space-y-6" action="/api/contact" method="post" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="intent" value={kind} />
      <input type="hidden" name="locale" value={locale} />
      <Honeypot label={t("honeypot")} id={`${prefix}-website`} />
      <StatusNote status={status} summaryRef={summaryRef} errors={errors} />
      <Field id={`${prefix}-name`} name="name" label={t("name")} requiredText={t("required")} autoComplete="name" error={errors.name} />
      <Field id={`${prefix}-email`} name="email" type="email" label={t("email")} requiredText={t("required")} autoComplete="email" error={errors.email} />
      <Field
        id={`${prefix}-organisation`}
        name="organisation"
        label={t("organisation")}
        requiredText={kind === "business" ? t("required") : undefined}
        optionalText={kind === "message" ? t("optional") : undefined}
        autoComplete="organization"
        error={errors.organisation}
      />
      {kind === "business" ? (
        <div>
          <label className="field-label" htmlFor={`${prefix}-topic`}>
            {t("topic")} <span className="req">({t("optional")})</span>
          </label>
          <select id={`${prefix}-topic`} name="topic" className="field" defaultValue="" aria-invalid={errors.topic ? true : undefined} aria-describedby={errors.topic ? `${prefix}-topic-error` : undefined}>
            <option value="">{t("topicPlaceholder")}</option>
            <option value="ai">{t("topics.ai")}</option>
            <option value="software">{t("topics.software")}</option>
            <option value="automation">{t("topics.automation")}</option>
            <option value="products">{t("topics.products")}</option>
            <option value="other">{t("topics.other")}</option>
          </select>
          <FieldError id={`${prefix}-topic-error`} code={errors.topic} />
        </div>
      ) : null}
      <Field id={`${prefix}-message`} name="message" label={t("message")} requiredText={t("required")} multiline error={errors.message} />
      <p className="text-sm text-muted">
        {t("privacy")}{" "}
        <Link href="/privacy" className="text-link">
          {t("privacyLink")}
        </Link>
      </p>
      <button className="button" type="submit" disabled={status === "pending"}>
        {status === "pending" ? t("sending") : kind === "business" ? t("businessSubmit") : t("messageSubmit")}
      </button>
    </form>
  );
}

export function InterestForm({ locale }: { locale: Locale }) {
  const t = useTranslations("forms");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("pending");
    setErrors({});
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/interest", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(data),
    });
    const body = (await response.json().catch(() => null)) as { delivery?: string; error?: string; fields?: FieldErrors } | null;
    if (response.status === 429 || body?.error === "rate") {
      setStatus("rate");
      summaryRef.current?.focus();
      return;
    }
    if (body?.error === "delivery") {
      setStatus("delivery");
      summaryRef.current?.focus();
      return;
    }
    if (!response.ok) {
      setStatus("idle");
      setErrors(body?.fields ?? { form: "invalid" });
      summaryRef.current?.focus();
      return;
    }
    form.reset();
    setStatus(body?.delivery === "email" ? "email" : "accepted");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (status === "email" || status === "accepted") {
    return (
      <div className="mt-8 border border-stroke bg-paper p-6" role="status">
        <h3 ref={successRef} tabIndex={-1} className="font-serif text-3xl font-normal outline-none">
          {t("successTitle")}
        </h3>
        <p className="mt-3">{status === "email" ? t("successEmail") : t("successAccepted")}</p>
      </div>
    );
  }

  return (
    <form className="relative mt-8 space-y-6" action="/api/interest" method="post" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="locale" value={locale} />
      <Honeypot label={t("honeypot")} id="interest-website" />
      <StatusNote status={status} summaryRef={summaryRef} errors={errors} />
      <div>
        <label className="field-label" htmlFor="interest-slot">
          {t("slot")} <span className="req">({t("required")})</span>
        </label>
        <select id="interest-slot" name="slot" className="field" defaultValue="general" aria-invalid={errors.slot ? true : undefined} aria-describedby={errors.slot ? "interest-slot-error" : undefined}>
          <option value="general">{t("slots.general")}</option>
          <option value="slot-01">{t("slots.slot-01")}</option>
          <option value="slot-02">{t("slots.slot-02")}</option>
          <option value="slot-03">{t("slots.slot-03")}</option>
        </select>
        <FieldError id="interest-slot-error" code={errors.slot} />
      </div>
      <Field id="interest-name" name="name" label={t("name")} optionalText={t("optional")} autoComplete="name" error={errors.name} />
      <Field id="interest-email" name="email" type="email" label={t("email")} requiredText={t("required")} autoComplete="email" error={errors.email} />
      <Field id="interest-note" name="note" label={t("note")} optionalText={t("optional")} multiline error={errors.note} />
      <p className="text-sm text-muted">{t("interestPrivacy")}</p>
      <button className="button" type="submit" disabled={status === "pending"}>
        {status === "pending" ? t("sending") : t("interestSubmit")}
      </button>
    </form>
  );
}

function StatusNote({
  status,
  summaryRef,
  errors,
}: {
  status: Status;
  summaryRef: React.RefObject<HTMLDivElement | null>;
  errors: FieldErrors;
}) {
  const t = useTranslations("forms");
  const errorCodes = Object.entries(errors);
  if (status !== "rate" && status !== "delivery" && errorCodes.length === 0) return null;
  const message = status === "rate" ? t("rate") : status === "delivery" ? t("delivery") : t("errorSummary");
  return (
    <div ref={summaryRef} tabIndex={-1} role="alert" className="border border-error bg-paper p-4 outline-none">
      <p>{message}</p>
      {errorCodes.length > 0 ? (
        <ul className="mt-2 list-disc pl-5">
          {errorCodes.map(([field, code]) => (
            <li key={field}>
              {labelFor(field, t)}: {messageFor(code, t)}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  requiredText,
  optionalText,
  autoComplete,
  error,
  multiline = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  requiredText?: string;
  optionalText?: string;
  autoComplete?: string;
  error?: string;
  multiline?: boolean;
}) {
  const errorId = `${id}-error`;
  const hint = requiredText ? `(${requiredText})` : optionalText ? `(${optionalText})` : null;
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label} {hint ? <span className="req">{hint}</span> : null}
      </label>
      {multiline ? (
        <textarea id={id} name={name} className="field" rows={6} aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined} />
      ) : (
        <input id={id} name={name} type={type} className="field" autoComplete={autoComplete} aria-invalid={error ? true : undefined} aria-describedby={error ? errorId : undefined} />
      )}
      <FieldError id={errorId} code={error} />
    </div>
  );
}

function FieldError({ id, code }: { id: string; code?: string }) {
  const t = useTranslations("forms");
  if (!code) return null;
  const known = ["required", "email", "short", "long", "invalid"] as const;
  const key = known.find((item) => item === code) ?? "invalid";
  return (
    <p id={id} className="field-error">
      {t(`errors.${key}`)}
    </p>
  );
}

function labelFor(field: string, t: ReturnType<typeof useTranslations>) {
  const labels: Record<string, string> = {
    name: t("name"),
    email: t("email"),
    organisation: t("organisation"),
    message: t("message"),
    topic: t("topic"),
    slot: t("slot"),
    note: t("note"),
    form: t("message"),
  };
  return labels[field] ?? field;
}

function messageFor(code: string, t: ReturnType<typeof useTranslations>) {
  const known = ["required", "email", "short", "long", "invalid"] as const;
  const key = known.find((item) => item === code) ?? "invalid";
  return t(`errors.${key}`);
}

function Honeypot({ id, label }: { id: string; label: string }) {
  return (
    <div className="hp" aria-hidden="true">
      <label htmlFor={id}>{label}</label>
      <input id={id} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormBanner({ error, sent, delivery }: { error?: string; sent?: string; delivery?: string }) {
  const t = useTranslations("forms");
  if (!error && !sent) return null;
  if (sent) {
    return (
      <div role="status" className="mt-8 border border-stroke bg-paper p-5">
        <h2 className="font-serif text-3xl font-normal">{t("successTitle")}</h2>
        <p className="mt-2">{delivery === "email" ? t("successEmail") : t("successAccepted")}</p>
      </div>
    );
  }
  const message = error === "rate" ? t("rate") : error === "delivery" ? t("delivery") : t("invalidBanner");
  return (
    <div role="alert" className="mt-8 border border-error bg-paper p-5">
      <p>{message}</p>
    </div>
  );
}
