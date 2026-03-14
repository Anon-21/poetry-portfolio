import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex gap-8 justify-center py-6 text-lg">

      <Link className="nav-home" href="/">Home</Link>

      <Link className="nav-poems" href="/poems">Poems</Link>

      <Link className="nav-blog" href="/blog">Blog</Link>

      <Link className="nav-collection" href="/collection">Collection</Link>
    </nav>
  )
}