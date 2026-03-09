import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Contact API is alive.",
    hasApiKey: Boolean(process.env.RESEND_API_KEY),
  });
}

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Server is missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("Incoming contact form body:", body);

    const { name, email, company, details, locale } = body;

    if (!name?.trim() || !email?.trim() || !details?.trim()) {
      return NextResponse.json(
        {
          error:
            locale === "nl"
              ? "Vul naam, e-mail en projectdetails in."
              : "Please fill in name, email, and project details.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error:
            locale === "nl"
              ? "Vul een geldig e-mailadres in."
              : "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const subject =
      locale === "nl"
        ? `Nieuwe website-aanvraag van ${name}`
        : `New website enquiry from ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2 style="margin-bottom: 16px;">${escapeHtml(subject)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company / Brand:</strong> ${escapeHtml(company || "-")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(details).replace(/\n/g, "<br>")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from: "Northern Studio <contact@northernstudio.be>",
      to: ["info@northernstudio.be"],
      replyTo: email,
      subject,
      html,
    });

    console.log("Resend result:", result);

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        {
          error:
            locale === "nl"
              ? "Het bericht kon niet worden verzonden. Controleer je Resend domein en afzender."
              : "The message could not be sent. Check your Resend domain and sender.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        locale === "nl"
          ? "Bericht succesvol verzonden."
          : "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact route crash:", error);
    return NextResponse.json(
      { error: "Server error while sending email." },
      { status: 500 }
    );
  }
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}