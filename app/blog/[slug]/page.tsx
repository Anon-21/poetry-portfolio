// app/blog/[slug]/page.tsx
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await prisma.post.findFirst({
    where: { slug, type: "BLOG" }
  })

  if (!post) notFound()

  return (
    <main className="max-w-2xl mx-auto p-10">
      {/* Added text-center here */}
      <h1 className="text-5xl font-bold mb-10 text-[var(--accent-orange)] text-center">
        {post.title}
      </h1>
      
      <pre className="whitespace-pre-wrap text-lg font-serif">
        <ReactMarkdown>{post.content}</ReactMarkdown>  
      </pre>
    </main>
  )
}