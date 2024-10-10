import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import categories from '@/data/categories';
import { Link } from 'react-router-dom';

export default function Categories() {
   return (
      <div className="container mx-auto px-4 py-8" dir="rtl">
         <h1 className="text-3xl font-bold mb-6 text-center">קטגוריות </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
               <Link to={`/categories/${category.slug}`} key={category.slug}>
                  <Card className="flex flex-col overflow-hidden group">
                     <CardHeader className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                           <img
                              src={category.img}
                              alt={category.name}
                              className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-110"
                           />
                        </div>
                     </CardHeader>
                     <CardContent className="flex-grow p-4">
                        <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
      </div>
   );
}