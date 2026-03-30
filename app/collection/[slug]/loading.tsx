import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./loading-skeleton.css" // Create this file

export default function Loading() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      {/* Header with shimmer effect */}
      <div className="space-y-4 mb-8">
        <Skeleton 
          height={40} 
          width="60%" 
          baseColor="var(--bg-cream)"
          highlightColor="#fdf6ec" 
          className="skeleton-shimmer"
        />
        <Skeleton 
          height={20} 
          width="40%" 
          baseColor="var(--bg-cream)"
          highlightColor="#fdf6ec"
          className="skeleton-shimmer"
        />
      </div>

      {/* Cards layout with better visual structure */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white/5 rounded-lg p-4 skeleton-card">
            <div className="flex items-center space-x-4">
              <Skeleton 
                circle 
                height={48} 
                width={48}
                baseColor="var(--bg-cream)"
                highlightColor="#fdf6ec"
                className="skeleton-shimmer"
              />
              <div className="flex-1">
                <Skeleton 
                  height={20} 
                  width="80%"
                  baseColor="var(--bg-cream)"
                  highlightColor="#fdf6ec"
                  className="skeleton-shimmer"
                />
                <Skeleton 
                  height={16} 
                  width="60%"
                  baseColor="var(--bg-cream)"
                  highlightColor="#fdf6ec"
                  className="skeleton-shimmer mt-2"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer with gradient pulse */}
      <div className="mt-8">
        <Skeleton 
          height={48} 
          width="100%"
          baseColor="var(--bg-cream)"
          highlightColor="#fdf6ec"
          className="skeleton-pulse"
        />
      </div>
    </main>
  )
}