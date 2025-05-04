import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const {
      userId,
      stripeId,
      name,
      address,
      zipcode,
      city,
      country,
      products,
    } = body;

    const order = await prisma.orders.create({
      data: {
        userId,
        stripeId,
        name,
        address,
        zipcode,
        city,
        country,
      },
    });

    // Crée les items de commande en parallèle (plus rapide et fiable)
    await Promise.all(
      products.map((prod: { id: string | number }) =>
        prisma.orderItem.create({
          data: {
            orderId: order.id,
            productId: Number(prod.id),
          },
        })
      )
    );

    return order;
  } catch (error) {
    console.error('Order creation failed:', error);
    return createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }
});
