import {prisma} from "~/server/db/client";

export default defineEventHandler(async (event) => {
  let items = await prisma.products.findMany({
    take: 5,
    where: {
      title: {
        contains: event.context.params.id,
        mode: 'insensitive'
      },
    },
  });

  return items;
});