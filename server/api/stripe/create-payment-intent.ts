import { defineEventHandler } from 'h3';
import { useServerStripe } from '#stripe/server';

export default defineEventHandler(async (event) => {
  const stripe = await useServerStripe(event);
  const body = await readBody(event);
  const amount = Number(body.amount);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    let message = 'An unexpected error occurred';

    if (error instanceof Error) {
      message = error.message;
    }

    return { error: message };
  }
});
