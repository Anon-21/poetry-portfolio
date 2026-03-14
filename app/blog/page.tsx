import prisma from "@/lib/prisma"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function BlogPage() {

  const posts = await prisma.post.findMany({
    where: { type: "BLOG" },
    orderBy: { createdAt: "desc" }
  })

  return (
    <main className="max-w-2xl mx-auto p-10">

      <h1 className="text-5xl mb-12 text-center">
<img src="https://i.ibb.co/PGx7qppV/top.gif" alt="top"/>
       Blog<br/><br/>
        <img src="https://i.ibb.co/b5nyfvGz/bottom.gif" alt="bottom"/>
      </h1>

    {posts.map((post: any) => (
  <div
    key={post.id}
    className="group relative bg-[var(--bg-cream)] hover:bg-[var(--accent-pink)]/30 transition-all duration-200 p-6 rounded-xl mb-6 hover:-translate-y-1"
  >

    {/* hover icon */}
    <img
      src="https://cdn.prod.website-files.com/5a7edf0d432d43000114d381/5f41ce275758783c6a0985fb_arrow.png"
      className="absolute left-4 top-1/2 w-7 -translate-y-1/2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-2"
      alt=""
    />

    <Link href={`/blog/${post.slug}`}>
      <h2 className="pl-6 text-2xl text-[var(--text-dark)] font-semibold transition group-hover:text-[var(--text-light)]">
        {post.title}
      </h2>
    </Link>

  </div>
))}
    </main>
  )
}