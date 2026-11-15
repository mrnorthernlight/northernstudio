import { expect, test, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const shotDir = process.env.SCREENSHOT_DIR || "/opt/cursor/artifacts/screenshots";

const nlPages = [
  ["/", "nl-home"],
  ["/ai-systemen", "nl-ai"],
  ["/software", "nl-software"],
  ["/automatisering", "nl-automation"],
  ["/producten", "nl-products"],
  ["/onderzoek", "nl-research"],
  ["/over", "nl-about"],
  ["/contact", "nl-contact"],
] as const;

const enPages = [
  ["/en", "en-home"],
  ["/en/contact", "en-contact"],
] as const;

async function settle(page: Page) {
  await page.evaluate(() => document.fonts.ready);
}

test("sitemap urls respond in both languages", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
  expect(urls.length).toBeGreaterThanOrEqual(24);
  for (const pathname of urls) {
    const response = await request.get(pathname);
    expect(response.status(), pathname).toBe(200);
  }
});

test("home metadata, language and security headers", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toContainText("Bouwen aan");
  await expect(page.locator("html")).toHaveAttribute("lang", "nl-BE");
  const html = await page.content();
  expect(html).toContain('rel="canonical"');
  expect(html).toContain("https://northernstudio.be");
  expect(html).toContain('hreflang="nl-BE"');
  expect(html).toContain('hreflang="en"');
  expect(html).toContain("application/ld+json");
  expect(html).not.toContain("479 10 42 89");
  expect(html.toLowerCase()).not.toContain("pc builder");
  expect(html.toLowerCase()).not.toContain("gaming");
  const headers = response?.headers() ?? {};
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
});

test("english home and language switch", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Taal" }).getByRole("link", { name: "EN" }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("h1")).toContainText("what's next");
  await page.goto("/en/ai-systems");
  await expect(page.getByRole("navigation", { name: "Language" }).getByRole("link", { name: "NL" })).toHaveAttribute("href", "/ai-systemen");
});

test("skip link is the first tab stop", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Ga naar de inhoud" })).toBeFocused();
});

test("reduced motion disables the page animation", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/");
  const name = await page.locator(".page-enter").evaluate((element) => getComputedStyle(element).animationName);
  expect(name).toBe("none");
  await context.close();
});

test("unknown routes render the custom 404", async ({ page }) => {
  const response = await page.goto("/deze-pagina-bestaat-niet");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("bestaat niet");
  const english = await page.goto("/en/missing-page");
  expect(english?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("does not exist");
});

test("robots and open graph image", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("https://northernstudio.be/sitemap.xml");
  const image = await request.get("/og?title=Northern%20Studio&eyebrow=Home");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
});

test("products stay unnamed placeholders", async ({ page }) => {
  await page.goto("/producten");
  await expect(page.getByText("In ontwikkeling").first()).toBeVisible();
  await expect(page.getByText("Binnenkort", { exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Plaats 01" })).toBeVisible();
  await expect(page.getByText(/geen aangekondigde producten/i)).toBeVisible();
});

test("dutch contact form validates and accepts a message", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Verstuur het bericht" }).click();
  await expect(page.getByRole("alert").first()).toBeVisible();
  await expect(page.getByText("Dit veld is verplicht.").first()).toBeVisible();

  await page.locator("#message-name").fill("Eva Martens");
  await page.locator("#message-email").fill("geen-adres");
  await page.locator("#message-message").fill("Dit is een schriftelijke vraag over intelligente software.");
  await page.getByRole("button", { name: "Verstuur het bericht" }).click();
  await expect(page.locator("#message-email-error")).toHaveText("Vul een geldig e-mailadres in.");

  await page.locator("#message-email").fill("eva@example.com");
  await page.getByRole("button", { name: "Verstuur het bericht" }).click();
  await expect(page.getByRole("status")).toContainText("niet doorgestuurd");
});

test("english contact form validates in english", async ({ page }) => {
  await page.goto("/en/contact");
  await page.getByRole("button", { name: "Send the message" }).click();
  await expect(page.getByText("This field is required.").first()).toBeVisible();
});

test("business enquiry requires an organisation", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: {
      intent: "business",
      name: "Mona",
      email: "mona@example.com",
      organisation: "",
      message: "Dit is een zakelijke vraag over een mogelijk platform.",
      locale: "nl",
    },
    headers: { origin: "http://127.0.0.1:3000", "x-forwarded-for": "198.51.100.10" },
  });
  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.fields.organisation).toBe("required");
});

test("interest form validates the email", async ({ request }) => {
  const response = await request.post("/api/interest", {
    data: { slot: "slot-01", email: "nee", locale: "en" },
    headers: { origin: "http://127.0.0.1:3000", "x-forwarded-for": "198.51.100.11" },
  });
  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.fields.email).toBe("email");
});

test("honeypot is accepted and not treated as a validation error", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: {
      intent: "message",
      name: "",
      email: "",
      message: "",
      company_website: "https://spam.example",
      locale: "nl",
    },
    headers: { origin: "http://127.0.0.1:3000", "x-forwarded-for": "198.51.100.12" },
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toEqual({ ok: true, delivery: "accepted" });
});

test("html form posts redirect instead of returning json", async ({ request }) => {
  const response = await request.post("/api/contact", {
    form: {
      intent: "message",
      name: "Mona",
      email: "mona@example.com",
      message: "te kort",
      locale: "nl",
      company_website: "",
    },
    headers: { origin: "http://127.0.0.1:3000", "x-forwarded-for": "198.51.100.13" },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(303);
  expect(response.headers().location).toContain("error=invalid");
});

test("rate limit blocks the ninth submission", async ({ request }) => {
  const headers = { origin: "http://127.0.0.1:3000", "x-forwarded-for": "198.51.100.40" };
  for (let index = 0; index < 8; index += 1) {
    const response = await request.post("/api/interest", {
      data: { slot: "general", email: "person@example.com", locale: "nl" },
      headers,
    });
    expect(response.status(), `request ${index}`).toBe(200);
  }
  const blocked = await request.post("/api/interest", {
    data: { slot: "general", email: "person@example.com", locale: "nl" },
    headers,
  });
  expect(blocked.status()).toBe(429);
});

test("screenshots of the main pages", async ({ page }) => {
  fs.mkdirSync(shotDir, { recursive: true });
  const shots: { url: string; name: string }[] = [];
  for (const [url, name] of [...nlPages, ...enPages]) {
    shots.push({ url, name: `${name}-desktop` }, { url, name: `${name}-mobile` });
  }

  for (const shot of shots) {
    const mobile = shot.name.endsWith("mobile");
    await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 });
    await page.goto(shot.url);
    await settle(page);
    await page.screenshot({
      path: path.join(shotDir, `${shot.name}.png`),
      fullPage: true,
      animations: "disabled",
    });
  }
});
