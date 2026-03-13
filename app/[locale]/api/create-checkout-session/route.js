import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.amount || !body?.customer?.email || !body?.customer?.name) {
      return Response.json({ error: 'Missing required payment data.' }, { status: 400 });
    }

    const locale = body.locale === 'en' ? 'en' : 'nl';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'bancontact'],
      customer_email: body.customer.email,
      billing_address_collection: 'required',
      metadata: {
        quote_number: body.quote?.qNum || '',
        customer_name: body.customer.name || '',
        customer_phone: body.customer.phone || '',
        customer_street: body.customer.street || '',
        customer_postal: body.customer.postal || '',
        customer_city: body.customer.city || '',
        customer_country: body.customer.country || '',
        note: body.quote?.note || '',
        assembly_fee: String(body.quote?.assemblyFee || 0),
      },
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: body.productName || 'Northern Studio Custom PC Build',
            },
            unit_amount: Math.round(Number(body.amount) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `https://northernstudio.be/${locale}/pc-builder?payment=success`,
      cancel_url: `https://northernstudio.be/${locale}/pc-builder?payment=cancelled`,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return Response.json({ error: 'Could not create checkout session.' }, { status: 500 });
  }
}
