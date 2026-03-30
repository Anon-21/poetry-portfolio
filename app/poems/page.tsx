import prisma from "@/lib/prisma"
import Link from "next/link"
import Image from "next/image"

export const revalidate = 60

export default async function PoemsPage() {
  const poems = await prisma.post.findMany({
    where: { type: "POEM" },
    orderBy: { createdAt: "desc" }
  })

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-5xl mb-16 text-center">
        <Image
          src="/images/top.gif"
          width={1043}
          height={147}
          alt="top"
          className="mx-auto mb-4"
        />
        Poems
        <Image
          src="/images/bottom.gif"
          width={1015}
          height={134}
          alt="bottom"
          className="mx-auto mt-4"
        />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {poems.map((poem: any) => (
          <Link
            key={poem.id}
            href={`/poems/${poem.slug}`}
            className="group relative bg-[var(--bg-cream)] hover:bg-[var(--accent-blue)]/30 transition-all duration-300 p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Hover arrow - slides in from left */}
            <img
              src="https://cdn.prod.website-files.com/5a7edf0d432d43000114d381/5f41ce275758783c6a0985fb_arrow.png"
              className="absolute left-4 top-1/2 w-7 -translate-y-1/2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-2"
              alt=""
            />

            <h2 className="pl-6 text-2xl text-[var(--text-dark)] font-semibold transition group-hover:text-[var(--text-light)]">
              {poem.title}
            </h2>

            {poem.createdAt && (
              <p className="pl-6 mt-2 text-sm text-gray-400 font-mono">
                {new Date(poem.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
            )}
          </Link>
        ))}
      </div>

      {poems.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No poems yet.</p>
        </div>
      )}
    </main>
  )
}