import { HeroParallax } from '@/components/heroParallax'
import { Button } from '@/components/ui/button'
import categories from '@/data/categories'
import { Link } from 'react-router-dom'

export default function Home() {

   const products = categories.map((category) => ({
      title: category.name,
      link: `/categories/${category.slug}`,
      thumbnail: category.img,
      description: category.description
   }))

   const productsWithId = products.concat(products).map((product, index) => ({ ...product, id: index }))

   return (
      <>
         <HeroParallax products={productsWithId} title='תיפלצים' text='חנות משגעת למכירה חוקית של בעלי חיים דמיוניים' >
            <div className='flex gap-2 wrap my-6 relative z-10'>
               <Link to='/products' className='block'>
                  <Button variant='default' size='lg' className='w-40'>צפייה בכל המוצרים</Button>
               </Link>
               <Link to='/categories' className='block'>
                  <Button variant='outline' size='lg' className='w-40'>צפייה בכל הקטגוריות</Button>
               </Link>
            </div>
         </HeroParallax>
      </>
   )
}
