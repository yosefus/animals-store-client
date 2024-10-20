import { HeroParallax } from '@/components/heroParallax'
import { Button } from '@/components/ui/button'
import { fetchCategories } from '@/data/axios-fetching'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export default function Home() {
   const { data } = useQuery('categories', () => fetchCategories())

   return (
      <>
         <HeroParallax
            products={data ?
               data
                  .concat(data.map((category) => ({ ...category, _id: `category-${category._id}` })))
                  .concat(data.map((category) => ({ ...category, _id: `category2-${category._id}` })))
               : []
            }
            title='תיפלצים'
            text='חנות משגעת למכירה חוקית של בעלי חיים דמיוניים' >
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
