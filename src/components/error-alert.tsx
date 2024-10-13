import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"

export function ErrorAlert({ error }: { error?: any }) {
   return (
      <Alert variant="destructive">
         <AlertCircle className="h-4 w-4" />
         <AlertTitle>שגיאה</AlertTitle>
         <AlertDescription>
            {error?.message || 'קרתה שגיאה בשרת. אנא נסו שוב מאוחר יותר.'}
         </AlertDescription>
      </Alert>
   )
}
