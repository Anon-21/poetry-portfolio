// app/blog/[slug]/loading.js
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "@/app/loading-skeleton.css"

export default function BlogLoading() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      {/* Blog title skeleton */}
      <div className="mb-10">
        <Skeleton 
          height={60} 
          width="85%" 
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog !rounded-lg"
        />
      </div>

      {/* Blog metadata */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
        <Skeleton 
          circle 
          height={40} 
          width={40}
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog"
        />
        <div className="flex-1">
          <Skeleton 
            height={16} 
            width={150}
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded"
          />
          <Skeleton 
            height={12} 
            width={100}
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded mt-1"
          />
        </div>
      </div>

      {/* Blog content */}
      <div className="space-y-4 font-serif">
        <Skeleton 
          count={3} 
          height={24} 
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog !rounded mb-2"
        />
        
        <div className="mt-8 mb-4">
          <Skeleton 
            height={32} 
            width="70%" 
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded-lg"
          />
        </div>
        
        <Skeleton 
          count={4} 
          height={24} 
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog !rounded"
        />
        
        <div className="my-8 pl-4 border-l-4 border-gray-200">
          <Skeleton 
            count={2} 
            height={24} 
            width="90%" 
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded"
          />
        </div>
        
        <Skeleton 
          count={3} 
          height={24} 
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog !rounded"
        />
        
        <div className="my-8">
          <Skeleton 
            height={300} 
            width="100%" 
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded-xl"
          />
          <Skeleton 
            height={12} 
            width="40%" 
            baseColor="#fef7e8"
            highlightColor="#fff4e0"
            className="skeleton-blog !rounded mt-2 mx-auto"
          />
        </div>
        
        <Skeleton 
          count={2} 
          height={24} 
          baseColor="#fef7e8"
          highlightColor="#fff4e0"
          className="skeleton-blog !rounded"
        />
      </div>
    </main>
  )
}