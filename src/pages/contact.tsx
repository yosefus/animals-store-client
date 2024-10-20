import { ErrorAlert } from '@/components/error-alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
   subject: z.string().min(1, { message: 'נושא הוא שדה חובה' }),
   message: z.string().min(10, { message: 'ההודעה חייבת להכיל לפחות 10 תווים' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUsPage() {
   const { register, handleSubmit, formState: { errors }, } = useForm<ContactFormValues>({
      resolver: zodResolver(contactSchema),
   });

   const [submitted, setSubmitted] = useState(false);

   const onSubmit = (data: ContactFormValues) => {
      console.log(data);
      setSubmitted(true);
   };

   return (
      <div className="container mx-auto px-4 py-8 max-w-xl">
         <h1 className="text-2xl font-bold text-center mb-4">צור קשר</h1>

         {submitted ? (
            <p className="text-green-600 text-center">ההודעה שלך נשלחה בהצלחה!</p>
         ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                     נושא
                  </label>
                  <Input
                     id="subject"
                     {...register('subject')}
                     placeholder="הכנס את נושא ההודעה"
                     className="mt-1"
                  />
                  {errors.subject && <ErrorAlert className='mt-4' error={errors.subject} />}
               </div>

               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                     הודעה
                  </label>
                  <Textarea
                     id="message"
                     {...register('message')}
                     placeholder="כתוב את ההודעה שלך כאן..."
                     className="mt-1"
                     rows={6}
                  />
                  {errors.message && <ErrorAlert className='mt-4' error={errors.message} />}
               </div>

               {/* Submit Button */}
               <Button type="submit" className="w-full">
                  שלח הודעה
               </Button>
            </form>
         )}
      </div>
   );
}
