import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <Skeleton
  height={40}
  width="50%"
  baseColor="var(--bg-cream)"
  highlightColor="#fdf6ec"
  className="mb-6" 
/>

      <Skeleton count={12} className="mb-2" />
    </main>
  )
}