import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const products = await prisma.products.findMany();
    return {
      success: true,
      data: products,
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
