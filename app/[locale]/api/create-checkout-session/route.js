import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { productName, amount, locale = "nl", origin, customer = {}, buildSummary = "" } = body || {};

    if (!amount || Number(amount) <= 0) {
      return Response.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address || !customer?.postal || !customer?.city || !customer?.country) {
      return Response.json({ error: "Missing customer details" }, { status: 400 });
    }

    const siteOrigin =
      typeof origin === "string" && /^https?:\/\//.test(origin)
        ? origin.replace(/\/$/, "")
        : "https://northernstudio.be";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card", "bancontact"],
      customer_email: customer.email,
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: productName || "Northern Studio Custom PC Build",
              description: buildSummary ? String(buildSummary).slice(0, 500) : undefined,
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        customer_name: String(customer.name).slice(0, 500),
        customer_phone: String(customer.phone).slice(0, 500),
        customer_address: String(customer.address).slice(0, 500),
        customer_postal: String(customer.postal).slice(0, 500),
        customer_city: String(customer.city).slice(0, 500),
        customer_country: String(customer.country).slice(0, 500),
        quote_number: customer.quoteNumber ? String(customer.quoteNumber).slice(0, 500) : "",
      },
      success_url: `${siteOrigin}/${locale}/pc-builder?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteOrigin}/${locale}/pc-builder?payment=cancel`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
