import { isEmail, oneLine } from "@/lib/forms";

export async function deliverEmail(input: { subject: string; text: string; replyTo: string }) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from || !isEmail(to)) {
    console.info("[forms] email adapter not configured; submission accepted without delivery");
    return { delivered: false as const };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.replyTo,
        subject: oneLine(input.subject),
        text: input.text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("[forms] email delivery failed", response.status);
      return { delivered: false as const, failed: true as const };
    }

    return { delivered: true as const };
  } catch (error) {
    console.error("[forms] email delivery threw", error instanceof Error ? error.name : "error");
    return { delivered: false as const, failed: true as const };
  }
}
