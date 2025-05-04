import { prisma } from "~/server/db/client";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  if (typeof id !== "string") {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid or missing ID parameter",
    });
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

  return items;
});
