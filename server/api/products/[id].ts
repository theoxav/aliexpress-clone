import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    if (!id || typeof id !== 'string') {
      throw new Error('Invalid request: Missing or invalid search parameter.');
    }

    const product = await prisma.products.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
      throw new Error('Product not found.');
    }

    return product;
  } catch (error) {
    console.error('Error fetching product:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 400, message: errorMessage });
  }
});
