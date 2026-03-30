import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-cream)] text-[var(--text-dark)] py-16">

      <div className="max-w-4xl mx-auto text-center space-y-6">

        <p className="max-w-xl mx-auto leading-relaxed">
        "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race"
        </p>

      <h3 className="text-2xl font-semibold">
      follow me @pointyquill on instagram  
        </h3>

        <div className="flex justify-center gap-6 text-sm">

          <a href="mailto:sonal.mohrir@gmail.com" className="underline">
            Email
          </a>

          <a href="https://www.instagram.com/pointyquill/" className="underline">
            Instagram
          </a>
          <a href="https://github.com/Anon-21" className="underline">
            GitHub
          </a>

        </div>

<div className="flex justify-center">
  <Image
    src="/images/rollercoaster.gif"
    width={100}
    height={100}
    alt="rollercoaster"
  />
</div>

        <p className="text-sm opacity-70 pt-6">
          {new Date().getFullYear()} Sonal Mohrir
          <br/>
          gifs used: theDood font By Adi Ben-Hur
        </p>

      </div>

</footer>
  )
}