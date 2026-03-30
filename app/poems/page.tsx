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
    <main className="max-w-2xl mx-auto p-10">

      <h1 className="text-5xl mb-12 text-center">
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

{poems.map((poem: any) => (
  <div
    key={poem.id}
    className="group relative bg-[var(--bg-cream)] hover:bg-[var(--accent-blue)]/30 transition-all duration-200 p-6 rounded-xl mb-6 hover:-translate-y-1"
  >

    {/* hover icon */}
    <img
      src="https://cdn.prod.website-files.com/5a7edf0d432d43000114d381/5f41ce275758783c6a0985fb_arrow.png"
      className="absolute left-4 top-1/2 w-7 -translate-y-1/2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-2"
      alt=""
    />

    <Link href={`/poems/${poem.slug}`}>
      <h2 className="pl-6 text-2xl text-[var(--text-dark)] font-semibold transition group-hover:text-[var(--text-light)]">
        {poem.title}
      </h2>
    </Link>

  </div>
))}
    </main>
  )
}