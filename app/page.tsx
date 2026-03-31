"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [playPoemGif, setPlayPoemGif] = useState(false)
  const [playBlogGif, setPlayBlogGif] = useState(false)
  const [playPenGif, setPlayPenGif] = useState(false)
  
  const penSectionRef = useRef<HTMLDivElement>(null)
  const poemSectionRef = useRef<HTMLDivElement>(null)
  const blogSectionRef = useRef<HTMLDivElement>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Intersection Observer - play GIF while section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play GIF when section comes into view, stop when leaves
          if (entry.target === penSectionRef.current) {
            setPlayPenGif(entry.isIntersecting)
          }
          if (entry.target === poemSectionRef.current) {
            setPlayPoemGif(entry.isIntersecting)
          }
          if (entry.target === blogSectionRef.current) {
            setPlayBlogGif(entry.isIntersecting)
          }
        })
      },
      { threshold: 0.7 } //threshold
    )

    if (penSectionRef.current) observer.observe(penSectionRef.current)
    if (poemSectionRef.current) observer.observe(poemSectionRef.current)
    if (blogSectionRef.current) observer.observe(blogSectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <main>

      {/* HERO - Pen GIF */}
      <div ref={penSectionRef}>
        <section className="relative bg-[var(--bg-dark)] text-[var(--text-light)] py-24 md:py-30 text-center">
          <br/><br/>
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

          {/* Pen GIF - plays while section is in view */}
          <div className="mx-auto mt-10 w-40 md:w-[300px]">
            {playPenGif ? (
              <img
                src="/images/pen.gif"
                width={300}
                height={300}
                alt="pen"
                className="w-full h-auto"
              />
            ) : (
              <img
                src="/images/pen-static.png"
                width={300}
                height={300}
                alt="pen"
                className="w-full h-auto"
              />
            )}
          </div>
        </section>
      </div>

      {/* POEMS - Smile GIF */}
      <div ref={poemSectionRef}>
        <section id="poems" className="bg-[var(--bg-cream)] text-[var(--text-dark)] py-20 md:py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-12 text-center md:text-left">
            
            {/* Smile GIF - plays while section is in view */}
            <div className="w-28 md:w-40 h-auto object-contain mb-4 md:mb-0">
              {playPoemGif ? (
                <img
                  src="/images/smile.gif"
                  width={160}
                  height={160}
                  alt="smile"
                  className="w-full h-auto"
                />
              ) : (
                <img
                  src="/images/smile-static.png"
                  width={160}
                  height={160}
                  alt="smile"
                  className="w-full h-auto"
                />
              )}
            </div>

            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl mb-4">Poems</h2>
              <p className="mb-8">
                Small fragments of thoughts and observations.
              </p>
              <a
                href="/poems"
                className="inline-block px-6 py-3 rounded-full bg-[var(--accent-orange)] text-center"
              >
                Read poems
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* BLOG - Sun GIF */}
      <div ref={blogSectionRef}>
        <section className="bg-[var(--bg-dark)] text-[var(--text-light)] py-20 md:py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 px-6 md:px-12 text-center md:text-right">
            
            {/* Sun GIF - plays while section is in view */}
            <div className="w-28 md:w-40 h-auto object-contain mb-4 md:mb-0">
              {playBlogGif ? (
                <img
                  src="/images/sun.gif"
                  width={160}
                  height={160}
                  alt="sun"
                  className="w-full h-auto"
                />
              ) : (
                <img
                  src="/images/sun-static.png"
                  width={160}
                  height={160}
                  alt="sun"
                  className="w-full h-auto"
                />
              )}
            </div>

            <div className="max-w-md">
              <h2 className="text-3xl md:text-4xl mb-4">Blog</h2>
              <p className="mb-8">
                Longer reflections and musings.
              </p>
              <a
                href="/blog"
                className="inline-block px-6 py-3 rounded-full bg-[var(--accent-blue)] text-black text-center"
              >
                Read blog
              </a>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}