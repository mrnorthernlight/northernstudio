import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);
const INTERNAL = "x-northern-internal";

export function proxy(request: NextRequest) {
  // The rewrite that adds the hidden Dutch prefix is followed inside the proxy.
  // `/nl` then redirects back to the unprefixed URL, which loops. Mark the
  // rewritten request so the second pass renders the page instead.
  if (request.headers.get(INTERNAL) === "1") {
    return NextResponse.next();
  }

  const response = handleI18nRouting(request);
  const rewrite = response.headers.get("x-middleware-rewrite");

  if (rewrite) {
    const rewritten = new URL(rewrite, request.url);
    const internalDutch = rewritten.pathname === "/nl" || rewritten.pathname.startsWith("/nl/");
    if (internalDutch) {
      const headers = new Headers(request.headers);
      headers.set(INTERNAL, "1");
      headers.set("x-next-intl-locale", routing.defaultLocale);
      const destination = request.nextUrl.clone();
      destination.pathname = rewritten.pathname;
      destination.search = rewritten.search;
      const next = NextResponse.rewrite(destination, { request: { headers } });
      const link = response.headers.get("link");
      if (link) next.headers.set("link", link);
      return next;
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|og|_next|_vercel|.*\\..*).*)"],
};
