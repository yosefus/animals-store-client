import { Button } from "@/components/ui/button";
import { Ghost, Home, RotateCcw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
   const navigate = useNavigate();

   const handleBackClick = () => navigate(-1);

   return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
         <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
            {/* Animated Ghost */}
            <div className="animate-bounce">
               <Ghost className="h-32 w-32 mx-auto text-primary" />
            </div>

            {/* Fun 404 Text */}
            <div className="space-y-4">
               <h1 className="text-8xl font-extrabold text-primary animate-pulse">
                  4😮4
               </h1>
               <h2 className="text-4xl font-bold text-foreground">
                  אופס! העמוד לא נמצא
               </h2>
               <p className="text-xl text-muted-foreground">
                  נראה שהעמוד הזה יצא לחופשה בחלל הדיגיטלי!
               </p>
            </div>

            {/* Fun Facts - Rotating Display */}
            <div className="bg-card rounded-lg p-6 shadow-lg">
               <h3 className="text-lg font-semibold mb-2">הידעת? 🤔</h3>
               <p className="text-muted-foreground mb-2">
                  המונח "404" מקורו באחד משרתי האינטרנט הראשונים ב-CERN, שם חדר 404 אכסן את מסד הנתונים המרכזי של הקבצים. כשקובץ לא נמצא, הוא פשוט לא היה בחדר 404!
               </p>
                  <p className="animate-pulse text-red-500 font-semibold">
                     לא בדקתי את נכונות הקשקוש הזה
               </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 flex-row-reverse">
               <Link to="/" >
                  <Button
                     className="gap-2 flex-row-reverse"
                     size="lg"
                  >
                     <Home className="h-4 w-4 mr-2" />
                     לדף הבית
                  </Button>
               </Link>
               <Button
                  onClick={handleBackClick}
                  variant="outline"
                  className="gap-2 flex-row-reverse"
                  size="lg"
               >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  חזרה
               </Button>
            </div>
         </div>
      </div>
   );
};

export default NotFound;