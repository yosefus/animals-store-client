export interface Category {
   slug: string
   name: string
   img: string
   description: string
}

const categories : Category[] = [
   {
     slug: 'dog',
     name: "כלבים",
     img: '/img/dog/1.jpg',
     description: "כלבים חמודים בכל הגדלים, הצבעים והצורות. רובם נושכים ולא חברותיים במיוחד, חלקם נגועים בדבר ושלבקת חוגרת."
   },
   {
     slug: 'lion',
     name: "אריות",
     img: '/img/lion/1.jpg',
     description: "המלכים של הג'ונגל, אבל אל תטעו, הם לא ממהרים לסלוח ולחבק. האריות גאים, חזקים ולא מהססים לצוד."
   },
   {
     slug: 'tiger',
     name: "נמרים",
     img: '/img/tiger/1.jpg',
     description: "הנמרים ידועים במראה המפוספס המרשים שלהם. הם מהירים, קטלניים ומיומנים בציד בשעות הלילה."
   },
   {
     slug: 'cat',
     name: "חתולים",
     img: '/img/cat/1.jpg',
     description: "חתולים הם היורשים האמיתיים של הספות והכריות. הם חמודים, אבל חדי טפרים, ולא תמיד מחכים לבעלים שלהם בשובם הביתה."
   }
 ];
 
 export default categories;
 
