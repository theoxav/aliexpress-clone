import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    if (!id || typeof id !== 'string') {
      throw new Error('Invalid request: Missing or invalid search parameter.');
    }

    const items = await prisma.products.findMany({
      take: 5,
      where: {
        title: {
          contains: id,
          mode: 'insensitive',
        },
      },
    });

    return {
      success: true,
      data: items,
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
