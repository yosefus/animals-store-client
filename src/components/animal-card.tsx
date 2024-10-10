import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Animal } from "@/data/animals";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function AnimalCard(animal: Animal) {
   return (
      <Link className="group" to={`/products/${animal.id}`} key={animal.id}>
         <Card className="overflow-hidden" >
            <CardHeader className="p-0">
               <img
                  src={animal.img}
                  alt={animal.name}
                  className="w-full h-72 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110  rounded-t-lg"
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
                     <StarFilledIcon className="w-5 h-5 text-yellow-400 ml-1" />
                     <span>{animal.rating.toFixed(1)}</span>
                  </div>
               </div>
            </CardContent>
         </Card>
      </Link>
   )
}
