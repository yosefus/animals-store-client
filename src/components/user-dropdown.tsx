import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { CircleUser } from "lucide-react"


const UserDropdown = () => (<DropdownMenu>
   <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
         <CircleUser className="h-5 w-5" />
         <span className="sr-only">Toggle user menu</span>
      </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className="text-right" align="start">
      <DropdownMenuLabel>החשבון שלי</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem >הגדרות</DropdownMenuItem>
      <DropdownMenuItem>תמיכה</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>התנתקות</DropdownMenuItem>
   </DropdownMenuContent>
</DropdownMenu>)

export default UserDropdown