import { prisma } from '~/server/db/client';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Vérification des paramètres requis
    if (!body || !event.context.params?.id) {
      throw new Error('Invalid request: Missing required parameters.');
    }

    const id = Number(event.context.params.id);
    if (isNaN(id)) {
      throw new Error('Invalid ID: ID must be a number.');
    }

    const updatedAddress = await prisma.addresses.update({
      where: { id },
      data: {
        name: body.name,
        address: body.address,
        zipcode: body.zipCode,
        city: body.city,
        country: body.country,
      },
    });

    return updatedAddress;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred.';
    throw createError({ statusCode: 400, message: errorMessage });
  }
});
