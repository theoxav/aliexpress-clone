import {prisma} from "~/server/db/client";

export default defineEventHandler(async (event) => {
  const res = await prisma.addresses.findFirst({
    where: { userId: event.context.params.id }
  })
  return res
})