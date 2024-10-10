import { HeroParallax } from '@/components/heroParallax'
import categories from '@/data/categories'

export default function Home() {

   const products = categories.map((category) => ({
      title: category.name,
      link: `/categories/${category.slug}`,
      thumbnail: category.img,
      description: category.description
   }))

   const productsWithId = products.concat(products).concat(products).concat(products).map((product, index) => ({...product, id: index}))

   return (
      <>
         <HeroParallax products={productsWithId} title='תיפלצים' text='חנות משגעת למכירה חוקית של בעלי חיים דמיוניים' />
      </>
   )
}
