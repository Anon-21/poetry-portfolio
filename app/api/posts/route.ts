import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {

  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  })

  return NextResponse.json(posts)
}

export async function POST(req: Request) {

  const body = await req.json()

  const post = await prisma.post.create({
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      type: body.type
    }
  })

  return NextResponse.json(post)
}