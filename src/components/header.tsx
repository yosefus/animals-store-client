import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Menu, Search } from "lucide-react"
import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ModeToggle } from "./theme-switcher"

const links = [
   { name: "דף הבית", href: "/" },
   { name: "קטגוריות", href: "/categories" },
   { name: "כל המוצרים", href: "/products" },
   { name: "אודות", href: "/about" },
   { name: "צור קשר", href: "/contact" },
   { name: "404", href: "/404" },
];

export default function Header() {
   const navigate = useNavigate()
   const [openMenu , setOpenMenu] = useState(false)

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const query = formData.get('query')
      if (!query) return;
      navigate(`/products?query=${query}`)
   }


   return (
      <header className="sticky z-10 top-0 flex h-16 items-center gap-4 border-b bg-background1 bg-opacity-501 backdrop-blur-xl px-4 md:px-6">
         <Sheet
            onOpenChange={setOpenMenu}
            open={openMenu}
         >
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
            <SheetContent side="right">
               <SheetTitle className="sr-only">Menu</SheetTitle>
               <nav className="grid gap-6  pt-5 text-lg font-medium whitespace-nowrap">
                  {links.map((link) => (
                     <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={() => setOpenMenu(false)}
                        className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                        >
                        {link.name}
                     </NavLink>
                  ))}
                  <SignedOut>
                     <NavLink
                        to={'sign-up'}
                        onClick={() => setOpenMenu(false)}
                        className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"} hover:text-foreground`}
                     >
                        התחברות
                     </NavLink>
                  </SignedOut>
                  <ModeToggle />
               </nav>
            </SheetContent>
         </Sheet>



         <nav className="hidden whitespace-nowrap flex-col gap-6 text-lg w-full font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to="/"> <img src="/logo.svg" className="h-8 w-8" alt="logo" /></Link>
            {links.map((link) => (
               <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"}  flex items-center gap-2 text-lg font-semibold md:text-base`}
               >
                  {link.name}
               </NavLink>
            ))}
            <SignedOut>
               <NavLink
                  to={'sign-up'}
                  className={({ isActive }) => ` ${isActive ? "text-foreground" : "text-muted-foreground"}  flex items-center gap-2 text-lg font-semibold md:text-base`}
               >
                  התחברות
               </NavLink>
            </SignedOut>
            <ModeToggle />
         </nav>

         <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form onSubmit={handleSubmit} className=" mr-auto flex-1 sm:flex-initial">
               <div className="relative">
                  <button className="absolute left-2.5 top-2.5" type="submit">
                     <Search className=" h-4 w-4 text-muted-foreground" />
                  </button>
                  <Input
                     type="search"
                     name="query"
                     placeholder="חיפוש תיפלצים..."
                     className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
               </div>
            </form>
            <SignedIn>
               <UserButton />
            </SignedIn>
         </div>
      </header>
   )
}



