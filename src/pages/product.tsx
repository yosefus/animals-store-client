import { ErrorAlert } from "@/components/error-alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchOneAnimal } from "@/data/axios-fetching";
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Product() {
   const { id } = useParams();
   const { data: product, isLoading, error } = useQuery('animal', () => fetchOneAnimal(id as string));

   if (error) return <ErrorAlert error={error} />;

   return (
      <div className="container mx-auto px-4 py-8" dir="rtl">
         {
            isLoading ?
               <ProductCardSkeleton /> :
               (product) &&
               <Card className="overflow-hidden min-h-96 border-none">
                  <CardContent className="p-0">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative overflow-hidden group">
                           <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Badge className="text-lg p-2">
                                 אולי זה יהיה החבר החדש שלך?
                              </Badge>
                           </div>
                        </div>
                        <div className="flex flex-col justify-between p-6">
                           <div>
                              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                                 {product.name}
                              </CardTitle>
                              <CardDescription className="text-lg mb-4">
                                 {product.description}
                              </CardDescription>
                              <div className="flex items-center mb-4">
                                 {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                       key={i}
                                       className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                 ))}
                                 <span className="mr-2">({product.numReviews} ביקורות)</span>
                              </div>
                           </div>
                           <div>
                              <p className="text-2xl font-bold mb-4">₪{product.price.toLocaleString()}</p>
                              <p className="mb-4">במלאי: {product.countInStock}</p>
                              <Dialog >
                                 <DialogTrigger dir="rtl" asChild>
                                    <Button className="w-full">
                                       <ShoppingCartIcon className="ml-2 h-4 w-4" /> קנה עכשיו
                                    </Button>
                                 </DialogTrigger>
                                 <DialogContent dir="rtl">
                                    <DialogHeader>
                                       <DialogTitle className="text-right mt-6">השלם את הרכישה שלך</DialogTitle>
                                       <DialogDescription className="text-right">
                                          אתה עומד להביא הביתה חבר חדש! אנא אשר את הפרטים למטה.
                                       </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                       <div className="grid grid-cols-4 items-center gap-4">
                                          <Label htmlFor="name" className="text-right">
                                             שם
                                          </Label>
                                          <Input id="name" value={product.name} className="col-span-3 cursor-default" readOnly />
                                       </div>
                                       <div className="grid grid-cols-4 items-center gap-4">
                                          <Label htmlFor="price" className="text-right">
                                             מחיר
                                          </Label>
                                          <Input id="price" value={`₪${product.price.toLocaleString()}`} className="col-span-3 cursor-default" readOnly />
                                       </div>
                                       <div className="grid grid-cols-4 items-center gap-4">
                                          <Label htmlFor="quantity" className="text-right">
                                             כמות
                                          </Label>
                                          <Input
                                             id="quantity"
                                             type="number"
                                             min="1"
                                             max={product.countInStock}
                                             defaultValue="1"
                                             className="col-span-3"
                                          />
                                       </div>
                                    </div>
                                    <DialogFooter>
                                       <DialogTrigger asChild>
                                          <Button type="button">אשר רכישה</Button>
                                       </DialogTrigger>
                                    </DialogFooter>
                                 </DialogContent>
                              </Dialog>
                           </div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
         }
      </div>
   );
}

function ProductCardSkeleton() {
   return (
      <Card className="overflow-hidden min-h-96 border-none">
         <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative overflow-hidden group">
                  <Skeleton className="w-full h-full aspect-video object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Badge className="text-lg p-2">טוען...</Badge>
                  </div>
               </div>
               <div className="flex flex-col justify-between p-6">
                  <div>
                     <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                        <Skeleton className="h-8 w-3/4" />
                     </CardTitle>
                     <CardDescription className="text-lg mb-4">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-5/6 mt-2" />
                     </CardDescription>
                     <div className="flex items-center mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                           <Skeleton key={i} className="w-5 h-5 mr-1" />
                        ))}
                        <Skeleton className="h-5 w-12" />
                     </div>
                  </div>
                  <div>
                     <Skeleton className="text-2xl font-bold mb-4 h-8 w-1/4" />
                     <Skeleton className="mb-4 h-6 w-1/3" />
                     <Skeleton className="w-full h-12" />
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}