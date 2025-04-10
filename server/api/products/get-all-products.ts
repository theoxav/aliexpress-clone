import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const products = await prisma.products.findMany();

    return products;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 500, message: errorMessage });
  }
});
