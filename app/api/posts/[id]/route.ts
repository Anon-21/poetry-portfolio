import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {

  const { id } = await context.params

  await prisma.post.delete({
    where: { id }
  })

  return NextResponse.json({ success: true })
}