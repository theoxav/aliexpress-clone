import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (
      !body ||
      !body.userId ||
      !body.stripeId ||
      !body.name ||
      !body.address ||
      !body.zipCode ||
      !body.city ||
      !body.country ||
      !Array.isArray(body.products) ||
      body.products.length === 0
    ) {
      throw new Error('Invalid request: Missing required fields or products.');
    }

    const order = await prisma.orders.create({
      data: {
        userId: body.userId,
        stripeId: body.stripeId,
        name: body.name,
        address: body.address,
        zipcode: body.zipCode,
        city: body.city,
        country: body.country,
      },
    });

    for (const prod of body.products) {
      if (!prod.id) {
        throw new Error('Invalid product: Missing product ID.');
      }

      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: Number(prod.id),
        },
      });
    }

    return order;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 400, message: errorMessage });
  }
});
