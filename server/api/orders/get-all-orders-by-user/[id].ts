import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    if (!id || typeof id !== 'string') {
      throw new Error('Invalid request: Missing or invalid user ID.');
    }

    const orders = await prisma.orders.findMany({
      where: {
        userId: id,
      },
      orderBy: { id: 'desc' },
      include: {
        orderItem: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!orders || orders.length === 0) {
      throw new Error('No orders found for the given user ID.');
    }

    return orders;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 400, message: errorMessage });
  }
});
