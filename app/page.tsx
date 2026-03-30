import Image from "next/image"
export default function Home() {
  return (

    <main>

      {/* HERO */}
      <section className="relative bg-[var(--bg-dark)] text-[var(--text-light)] py-30 text-center">

        <h1 className="text-6xl font-bold mb-6">
          My <span className="text-[var(--accent-orange)]">Poetry</span> &
          <span className="text-[var(--accent-blue)]"> Essays</span>
        </h1>

        <p className="text-lg opacity-80">
          A collection of my poems and essays.
        </p>
<div className="absolute left-0 top-0 w-64 h-64 bg-[var(--accent-purple)]/20 rounded-full blur-3xl"></div>
<div className="absolute right-0 bottom-0 w-64 h-64 bg-[var(--accent-pink)]/20 rounded-full blur-3xl"></div>
<Image
  src="/images/pen.gif"
  width={250}
  height={250}
  alt="pen"
  className="mx-auto mt-10"
/>

        {/* Scroll arrow */}
        <a href="#poems" className="scroll-arrow">
          ↓
        </a>

      </section>


      {/* POEMS */}
      <section id="poems" className="bg-[var(--bg-cream)] text-[var(--text-dark)] py-24">

        <div className="max-w-6xl mx-auto flex items-center gap-16 pl-12">

<Image
  src="/images/smile.gif"
  width={160}
  height={160}
  alt="smile"
  className="w-40 h-40 object-contain"
/>

          <div className="max-w-md">
            <h2 className="text-4xl mb-4">Poems</h2>

            <p className="mb-8">
              Small fragments of thoughts and observations.
            </p>

            <a
              href="/poems"
              className="inline-block px-6 py-3 rounded-full bg-[var(--accent-orange)]"
            >
              Read poems
            </a>
          </div>

        </div>

      </section>


      {/* BLOG */}
      <section className="bg-[var(--bg-dark)] text-[var(--text-light)] py-24">

        <div className="max-w-6xl mx-auto flex items-center justify-end gap-16 pr-12">

          <div className="text-right max-w-md">
            <h2 className="text-4xl mb-4">Blog</h2>

            <p className="mb-8">
              Longer reflections and musings.
            </p>

            <a
              href="/blog"
              className="inline-block px-6 py-3 rounded-full bg-[var(--accent-blue)] text-black"
            >
              Read blog
            </a>
          </div>
<Image
  src="/images/sun.gif"
  width={160}
  height={160}
  alt="sun"
  className="w-40 h-40 object-contain"
/>

        </div>

      </section>

    </main>
  )
}