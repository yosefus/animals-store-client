import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import animals from "@/data/animals"; // Assuming you've added this import
import categories from "@/data/categories";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Link, useParams } from "react-router-dom";

export default function Category() {
   const { slug } = useParams();
   const category = categories.find((category) => category.slug === slug);
   const favoriteAnimals = animals
      .filter(animal => animal.category === slug)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3); // Get top 3 rated animals

   if (!category) return <div>Category not found</div>;

   return (
      <div className="container mx-auto px-4 py-8">
         <Card className="mb-8 border-none min-h-96 overflow-hidden">
            <CardContent className="p-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                     src={category.img}
                     alt={category.name}
                     className="w-full h-full object-cover rounded-r-lg"
                  />
                  <div className="flex flex-col justify-center p-6">
                     <CardTitle className="text-3xl md:text-5xl font-bold mb-4">
                        {category.name}
                     </CardTitle>
                     <CardDescription className="text-lg">
                        {category.description}
                     </CardDescription>
                  </div>
               </div>
            </CardContent>
         </Card>

         <h2 className="text-2xl font-semibold mb-4">מועדפים </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {favoriteAnimals.map((animal) => (
               <Link className="group" to={`/products/${animal.id}`} key={animal.id}>
                  <Card className="overflow-hidden" >
                     <CardHeader className="p-0">
                        <img
                           src={animal.img}
                           alt={animal.name}
                           className="w-full h-72 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110  rounded-t-lg"
                        />
                     </CardHeader>
                     <CardContent className="p-4">
                        <CardTitle className="text-xl mb-2">{animal.name}</CardTitle>
                        <CardDescription className="mb-2 h-10">
                           {animal.description.length > 100
                              ? `${animal.description.substring(0, 100)}...`
                              : animal.description}
                        </CardDescription>
                        <div className="flex justify-between items-center">
                           <Badge variant="secondary">₪{animal.price}</Badge>
                           <div className="flex items-center">
                              <StarFilledIcon  className="w-5 h-5 text-yellow-400 ml-1" />
                              <span>{animal.rating.toFixed(1)}</span>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
      </div>
   );
}