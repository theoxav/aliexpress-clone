import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (
      !body ||
      !body.userId ||
      !body.name ||
      !body.address ||
      !body.zipCode ||
      !body.city ||
      !body.country
    ) {
      throw new Error('Invalid request: Missing required fields.');
    }

    const order = await prisma.addresses.create({
      data: {
        userId: body.userId,
        name: body.name,
        address: body.address,
        zipcode: body.zipCode,
        city: body.city,
        country: body.country,
      },
    });

    return {
      success: true,
      data: order,
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
