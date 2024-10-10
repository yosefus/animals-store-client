import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';

const teamMembers = [
   { name: 'יעל כהן', role: 'מייסדת ומנכ"לית', avatar: '/img/members/1.jpg' },
   { name: 'דוד לוי', role: 'מנהל טיפול בבעלי חיים', avatar: '/img/members/2.jpg' },
   { name: 'מיכל גולן', role: 'וטרינרית ראשית', avatar: '/img/members/3.jpg' },
   { name: 'אלון ברק', role: 'מנהל שיווק', avatar: '/img/members/4.jpg' },
];

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2
      }
   }
};

const itemVariants = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1
   }
};

export default function About() {
   return (

      <div className="bg-gradient-to-b  min-h-screen">
         <div className="container mx-auto p-8 relative z-5">
            <motion.div
               initial="hidden"
               animate="visible"
               variants={containerVariants}
            >
               <motion.h1 className="text-5xl font-bold mb-12 text-center " variants={itemVariants}>
                  אודות התיפלצים שלנו
               </motion.h1>

               <motion.section className="mb-12" variants={itemVariants}>
                  <Card className="border-none ">
                     <CardHeader>
                        <h2 className="text-3xl font-semibold mb-6">המשימה שלנו</h2>
                     </CardHeader>
                     <CardContent>
                        <p className="text-xl leading-relaxed opacity-70">
                           ב"תיפלצים" אנחנו מאמינים שלכל חיה מגיע בית אוהב. המשימה שלנו היא לחבר בין בעלי חיים ייחודיים לבין משפחות מסורות, תוך הבטחת רווחתם של כל החיות שבטיפולנו.
                        </p>
                     </CardContent>
                  </Card>
               </motion.section>

               <motion.section className="mb-12" variants={itemVariants}>
                  <Card className="border-none ">
                     <CardHeader>
                        <h2 className="text-3xl font-semibold mb-6">הסיפור שלנו</h2>
                     </CardHeader>
                     <CardContent>
                        <p className="text-xl leading-relaxed opacity-70">
                           "תיפלצים" נולד מתוך אהבה עזה לבעלי חיים ורצון לספק בית לחיות הכי מיוחדות. מאז 2010, אנחנו עובדים ללא לאות כדי להבטיח שכל חיה תמצא את הבית המושלם עבורה.
                        </p>
                     </CardContent>
                  </Card>
               </motion.section>

               <motion.section variants={itemVariants}>
                  <h2 className="text-3xl font-semibold mb-8 text-center">הצוות שלנו</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                           <Card className=" shadow-lg hover:shadow-xl transition-shadow duration-300">
                              <CardHeader className="flex items-center justify-center pb-0">
                                 <Avatar className="w-32 h-32 border-4 border-primary">
                                    <AvatarImage src={member.avatar} className="object-cover object-top" alt={member.name} />
                                    <AvatarFallback className="text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                 </Avatar>
                              </CardHeader>
                              <CardContent className="text-center pt-4">
                                 <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                                 <p className="text-gray-600">{member.role}</p>
                              </CardContent>
                           </Card>
                        </motion.div>
                     ))}
                  </div>
               </motion.section>
            </motion.div>
         </div>
      </div>
   );
}