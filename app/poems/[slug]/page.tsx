// app/poem/[slug]/page.tsx
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default async function PoemPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const poem = await prisma.post.findFirst({
    where: {
      slug: slug,
      type: "POEM"
    }
  })

  if (!poem) {
    notFound()
  }

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-5xl font-bold mb-10 text-[var(--accent-pink)]">
        {poem.title}
      </h1>
      
      <div className="poem-wrapper">
        <pre className="whitespace-pre-wrap font-serif">
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="poem-line">{children}</p>
              ),
            }}
          >
            {poem.content}
          </ReactMarkdown>
        </pre>
      </div>
    </main>
  )
}