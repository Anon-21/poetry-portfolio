import Image from "next/image"

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-[var(--bg-dark)] text-[var(--text-light)] py-24 md:py-30 text-center overflow-hidden">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          My <span className="text-[var(--accent-orange)]">Poetry</span> &{" "}
          <span className="text-[var(--accent-blue)]">Essays</span>
        </h1>

        <p className="text-base md:text-lg opacity-80 max-w-xl mx-auto">
          A collection of my poems and essays.
        </p>

        {/* background blobs */}
        <div className="absolute left-0 top-0 w-48 md:w-64 h-48 md:h-64 bg-[var(--accent-purple)]/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-48 md:w-64 h-48 md:h-64 bg-[var(--accent-pink)]/20 rounded-full blur-3xl"></div>

        <Image
          src="/images/pen.gif"
          width={300}
          height={300}
          alt="pen"
          className="mx-auto mt-10 w-40 md:w-[300px]"
        />
      </section>


      {/* POEMS */}
      <section id="poems" className="bg-[var(--bg-cream)] text-[var(--text-dark)] py-20 md:py-24">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-12 text-center md:text-left">

          <Image
            src="/images/smile.gif"
            width={160}
            height={160}
            alt="smile"
            className="w-28 md:w-40 h-auto object-contain mb-4 md:mb-0"
          />

          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl mb-4">Poems</h2>

            <p className="mb-8">
              Small fragments of thoughts and observations.
            </p>

            <a
              href="/poems"
              className="inline-block px-6 py-3 rounded-full bg-[var(--accent-orange)] w-full md:w-auto text-center"
            >
              Read poems
            </a>
          </div>

        </div>

      </section>


      {/* BLOG */}
      <section className="bg-[var(--bg-dark)] text-[var(--text-light)] py-20 md:py-24">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 px-6 md:px-12 text-center md:text-right">

          <Image
            src="/images/sun.gif"
            width={160}
            height={160}
            alt="sun"
            className="w-28 md:w-40 h-auto object-contain mb-4 md:mb-0"
          />

          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl mb-4">Blog</h2>

            <p className="mb-8">
              Longer reflections and musings.
            </p>

            <a
              href="/blog"
              className="inline-block px-6 py-3 rounded-full bg-[var(--accent-blue)] text-black w-full md:w-auto text-center"
            >
              Read blog
            </a>
          </div>

        </div>

      </section>

    </main>
  )
}