// app/poem/[slug]/loading.js
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "@/app/loading-skeleton.css"

export default function PoemLoading() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      {/* Poem title with pink accent */}
      <div className="mb-10 text-center">
        <Skeleton 
          height={60} 
          width="75%" 
          baseColor="#fff0f5"
          highlightColor="#fff5fa"
          className="skeleton-poem !rounded-lg mx-auto"
        />
      </div>

      {/* Decorative separator */}
      <div className="flex justify-center gap-2 mb-12">
        <Skeleton height={2} width={30} baseColor="#ffd9e8" highlightColor="#ffe6f0" className="skeleton-base" />
        <Skeleton height={2} width={15} baseColor="#ffd9e8" highlightColor="#ffe6f0" className="skeleton-base" />
        <Skeleton height={2} width={30} baseColor="#ffd9e8" highlightColor="#ffe6f0" className="skeleton-base" />
      </div>

      {/* Poem content */}
      <div className="font-serif space-y-3 text-center">
        {/* First stanza */}
        <div className="space-y-2">
          <Skeleton 
            height={28} 
            width="65%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="80%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="55%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
        </div>
        
        {/* Stanza break */}
        <div className="pt-4 pb-2">
          <Skeleton 
            height={28} 
            width="70%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="60%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line mt-2"
          />
        </div>
        
        {/* Second stanza */}
        <div className="space-y-2 pt-2">
          <Skeleton 
            height={28} 
            width="75%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="50%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="85%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="45%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
        </div>
        
        {/* Third stanza */}
        <div className="space-y-2 pt-4">
          <Skeleton 
            height={28} 
            width="55%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="70%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
          <Skeleton 
            height={28} 
            width="60%" 
            baseColor="#fff0f5"
            highlightColor="#fff5fa"
            className="skeleton-poem !rounded mx-auto skeleton-poem-line"
          />
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-4">
          <div className="flex justify-center gap-2">
            <Skeleton 
              height={12} 
              width={100} 
              baseColor="#ffe6f0"
              highlightColor="#fff0f5"
              className="skeleton-poem !rounded-full"
            />
            <span className="text-gray-300">•</span>
            <Skeleton 
              height={12} 
              width={100} 
              baseColor="#ffe6f0"
              highlightColor="#fff0f5"
              className="skeleton-poem !rounded-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}