import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"

export function ErrorAlert({ error , className }: { error?: any , className?: string }) {
   return (
      <Alert className={`${className} dark:bg-red-950 dark:text-white`} variant="destructive" >
         <AlertCircle className="h-4 w-4" />
         <AlertTitle>שגיאה</AlertTitle>
         <AlertDescription className="dark:opacity-60">
            {error?.message || 'קרתה שגיאה בשרת. אנא נסו שוב מאוחר יותר.'}
         </AlertDescription>
      </Alert>
   )
}
