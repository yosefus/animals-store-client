const CategoryCardSkeleton = () => {
   return (
     <div className="animate-pulse flex flex-col overflow-hidden">
       {/* Image Skeleton */}
       <div className="relative aspect-video bg-gray-300 rounded-md"></div>
 
       {/* Content Skeleton */}
       <div className="flex-grow p-4 space-y-4">
         {/* Title Skeleton */}
         <div className="h-6 bg-gray-300 rounded-md"></div>
 
         {/* Description Skeleton */}
         <div className="space-y-2">
           <div className="h-4 bg-gray-300 rounded-md"></div>
           <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
         </div>
       </div>
     </div>
   );
 };
 
 export default CategoryCardSkeleton;
 