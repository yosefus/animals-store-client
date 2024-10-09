import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CircleUser, Menu, Search } from "lucide-react"
import { NavLink } from "react-router-dom"
import { ModeToggle } from "./theme-switcher"

const links = [
   { name: "דף הבית", href: "/" },
   { name: "קטגוריות", href: "/categories" },
   { name: "כל המוצרים", href: "/products" },
   { name: "אודות", href: "/about" },
   { name: "צור קשר", href: "/contact" },
];

export default function Header() {


   return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
         <Sheet>
            <SheetTrigger asChild>
               <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
               >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <nav className="grid gap-6 pt-5 text-lg font-medium">
                  {links.map((link) => (
                     <NavLink
                        key={link.name}
                        to={link.href}
                        className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"}  hover:text-foreground`}
                     >
                        {link.name}
                     </NavLink>
                  ))}
                  <ModeToggle/>
               </nav>
            </SheetContent>
         </Sheet>



         <nav className="hidden flex-col gap-6 text-lg w-full font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            {links.map((link) => (
               <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"}  flex items-center gap-2 text-lg font-semibold md:text-base`}
               >
                  {link.name}
               </NavLink>
            ))}
            <ModeToggle/>
         </nav>

         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className=" mr-auto flex-1 sm:flex-initial">
               <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                     type="search"
                     placeholder="Search products..."
                     className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
               </div>
            </form>
            <DropdownMenu>
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
            </DropdownMenu>
         </div>
      </header>
   )
}
