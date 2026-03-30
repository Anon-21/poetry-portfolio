import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Loading() {
  return (
    <main className="max-w-2xl mx-auto p-10 space-y-8">
      {/* Animated gradient background */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        
        <div className="relative space-y-4">
          <Skeleton 
            height={40} 
            width="60%"
            baseColor="#f3f4f6"
            highlightColor="#e5e7eb"
            className="!rounded-lg"
          />
          <Skeleton 
            height={20}
            width="40%"
            baseColor="#f3f4f6"
            highlightColor="#e5e7eb"
            className="!rounded"
          />
        </div>
      </div>

      {/* Card skeleton with hover effect */}
      <div className="grid gap-4">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="group relative overflow-hidden rounded-xl bg-white/5 p-4 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <div className="flex items-center space-x-4">
              <Skeleton 
                circle 
                height={48}
                width={48}
                baseColor="#f3f4f6"
                highlightColor="#e5e7eb"
              />
              <div className="flex-1 space-y-2">
                <Skeleton 
                  height={20}
                  width="80%"
                  baseColor="#f3f4f6"
                  highlightColor="#e5e7eb"
                />
                <Skeleton 
                  height={16}
                  width="60%"
                  baseColor="#f3f4f6"
                  highlightColor="#e5e7eb"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </main>
  )
}