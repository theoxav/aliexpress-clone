import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    if (!id || typeof id !== 'string') {
      throw new Error('Invalid request: Missing or invalid search parameter.');
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

    return {
      success: true,
      data: orders,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      success: false,
      message: errorMessage,
    };
  }
});
