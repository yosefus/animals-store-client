import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function AnimalCardSkeleton() {
   return (
      <Card className="overflow-hidden animate-pulse">
         <CardHeader className="p-0">
            <div className="w-full h-72 md:h-48 bg-gray-300 rounded-t-lg" />
         </CardHeader>
         <CardContent className="p-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-full mb-1" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="flex justify-between items-center">
               <div className="h-6 bg-gray-300 rounded w-16" />
               <div className="flex items-center">
                  <div className="w-5 h-5 bg-gray-300 rounded-full mr-1" />
                  <div className="h-4 bg-gray-200 rounded w-8" />
               </div>
            </div>
         </CardContent>
      </Card>
   );
}