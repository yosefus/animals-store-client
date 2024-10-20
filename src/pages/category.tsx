import AnimalCard from "@/components/animal-card";
import AnimalCardSkeleton from "@/components/animal-card-skeleton";
import { ErrorAlert } from "@/components/error-alert";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { fetchCategory } from "@/data/axios-fetching";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Category() {
   const { slug } = useParams();
   const { isLoading, error, data } = useQuery('categories', () => fetchCategory(slug as string));
   const category = data?.category;
   const animals = data?.animals || [];

   if (error) return <ErrorAlert error={error} />;

   return (
      <div className="container mx-auto px-4 py-8">
         <Card className="mb-8 border-none min-h-96 overflow-hidden">
            <CardContent className="p-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                     src={category?.img}
                     alt={category?.name}
                     className="w-full max-h-[70vh] h-full object-cover rounded-r-lg"
                  />
                  <div className="flex flex-col justify-center p-6">
                     <CardTitle className="text-3xl md:text-5xl font-bold mb-4">
                        {category?.name}
                     </CardTitle>
                     <CardDescription className="text-lg">
                        {category?.description}
                     </CardDescription>
                  </div>
               </div>
            </CardContent>
         </Card>

         <h2 className="text-2xl font-semibold mb-4">תיפלצים מקטגוריה זו </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
               isLoading ?
                  Array.from({ length: 4 }).map((_, index) => (<AnimalCardSkeleton key={index} />)) :
                  animals?.map?.((animal) => <AnimalCard key={animal.id} {...animal} />)
            }
         </div>
      </div>
   );
}