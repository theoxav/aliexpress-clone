import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id;

    if (!id || typeof id !== 'string') {
      throw new Error('Invalid request: Missing or invalid user ID.');
    }

    const address = await prisma.addresses.findFirst({
      where: {
        userId: id,
      },
    });

    if (!address) {
      throw new Error('Address not found for the given user ID.');
    }

    return address;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 400, message: errorMessage });
  }
});
