interface Animal {
  category: string
  img: string
  name: string
  description: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
  id: number
}

export const animals: Animal[] = [
  // Dogs
  {
    category: 'dog',
    img: '/img/dog/1.jpg',
    name: "כלב מעפן בעל חזות מזרחית",
    description: 'כלב מציק ומכוער, שונא אדם, שונא חרגולים, שונא כלי מיתר',
    price: 99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    id: 1,
  },
  {
    category: 'dog',
    img: '/img/dog/2.jpg',
    name: "כלבלב חמוד עם עיניים גדולות",
    description: 'כלב קטן וחמוד, אוהב ליקוקים, מפחד מהצל של עצמו',
    price: 120,
    countInStock: 8,
    rating: 4.8,
    numReviews: 15,
    id: 2,
  },
  {
    category: 'dog',
    img: '/img/dog/3.jpg',
    name: "רועה גרמני אימתני",
    description: 'כלב גדול וחזק, מגן מעולה, אוהב לרדוף אחרי מכוניות',
    price: 150,
    countInStock: 5,
    rating: 4.7,
    numReviews: 20,
    id: 3,
  },
  {
    category: 'dog',
    img: '/img/dog/4.jpg',
    name: "פודל מתולתל ומפונק",
    description: 'כלב אצילי עם תסרוקת מוזרה, אוהב טיפוח ומסאז׳ים',
    price: 200,
    countInStock: 3,
    rating: 4.2,
    numReviews: 8,
    id: 4,
  },

  // Lions
  {
    category: 'lion',
    img: '/img/lion/1.jpg',
    name: "אריה מלכותי עם רעמה מרשימה",
    description: 'מלך החיות, אוהב לשאוג ולהתרווח בשמש, לא ממש עובד קשה',
    price: 5000,
    countInStock: 2,
    rating: 4.9,
    numReviews: 30,
    id: 5,
  },
  {
    category: 'lion',
    img: '/img/lion/2.jpg',
    name: "לביאה זריזה וקטלנית",
    description: 'הציידת האמיתית של הלהקה, מהירה וחכמה, אם מסורה',
    price: 4500,
    countInStock: 3,
    rating: 4.8,
    numReviews: 25,
    id: 6,
  },
  {
    category: 'lion',
    img: '/img/lion/3.jpg',
    name: "גור אריות שובב",
    description: 'חמוד ומשחקי, אוהב להתגנב ולהפתיע, עדיין לא יודע לשאוג כמו שצריך',
    price: 3000,
    countInStock: 4,
    rating: 4.7,
    numReviews: 18,
    id: 7,
  },
  {
    category: 'lion',
    img: '/img/lion/4.jpg',
    name: "אריה זקן וחכם",
    description: 'בעל ניסיון רב, מעדיף לנוח ולתת עצות, כבר לא רץ מהר כמו פעם',
    price: 3500,
    countInStock: 1,
    rating: 4.5,
    numReviews: 10,
    id: 8,
  },

  // Tigers
  {
    category: 'tiger',
    img: '/img/tiger/1.jpg',
    name: "נמר בנגלי מפוספס",
    description: 'יפהפה וקטלני, מומחה בהסוואה, אוהב לשחות',
    price: 6000,
    countInStock: 2,
    rating: 4.9,
    numReviews: 28,
    id: 9,
  },
  {
    category: 'tiger',
    img: '/img/tiger/2.jpg',
    name: "נמר סיבירי לבן",
    description: 'נדיר ומרשים, מותאם לאקלים קר, לא אוהב את הקיץ הישראלי',
    price: 7000,
    countInStock: 1,
    rating: 5.0,
    numReviews: 15,
    id: 10,
  },
  {
    category: 'tiger',
    img: '/img/tiger/3.jpg',
    name: "נמר צעיר ואנרגטי",
    description: 'סקרן ופעלתן, אוהב לטפס על עצים ולשחק עם כל דבר שזז',
    price: 4500,
    countInStock: 3,
    rating: 4.7,
    numReviews: 20,
    id: 11,
  },
  {
    category: 'tiger',
    img: '/img/tiger/4.jpg',
    name: "נמרה אם גאה",
    description: 'מגינה מסורה על גוריה, מלמדת אותם לצוד, לא כדאי להתעסק איתה',
    price: 5500,
    countInStock: 2,
    rating: 4.8,
    numReviews: 22,
    id: 12,
  },

  // Cats
  {
    category: 'cat',
    img: '/img/cat/1.jpg',
    name: "חתול רחוב ערמומי",
    description: 'מומחה בגניבת אוכל, יודע לפתוח פחי אשפה, מתחנף כשצריך',
    price: 50,
    countInStock: 15,
    rating: 4.2,
    numReviews: 30,
    id: 13,
  },
  {
    category: 'cat',
    img: '/img/cat/2.jpg',
    name: "חתול פרסי מפונק",
    description: 'בעל פרווה ארוכה ורכה, דורש טיפוח יומי, מעדיף אוכל גורמה',
    price: 300,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
    id: 14,
  },

  {
    category: 'cat',
    img: '/img/cat/3.jpg',
    name: "חתול ספינקס קירח",
    description: 'נראה כמו חייזר, זקוק לשמירה מהשמש, אוהב חום ומגע',
    price: 400,
    countInStock: 3,
    rating: 4.3,
    numReviews: 8,
    id: 15,
  },
  {
    category: 'cat',
    img: '/img/cat/4.jpg',
    name: "חתלתול ג'ינג'י שובב",
    description: 'אנרגטי ומשחקי, אוהב לטפס על וילונות ולהפיל דברים מהשולחן',
    price: 80,
    countInStock: 7,
    rating: 4.7,
    numReviews: 25,
    id: 16,
  },
];

export default animals;