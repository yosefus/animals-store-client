import { Moon, Sun } from "lucide-react"
import { useThemeStore } from "@/components/theme"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const setTheme = useThemeStore(state => state.setTheme)

  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent  >
        <DropdownMenuItem className="pl-4 cursor-pointer justify-start hover:bg-accent" onClick={() => setTheme("light")}>
          אור כמו החיים שלי
        </DropdownMenuItem>
        <DropdownMenuItem className="pl-4 cursor-pointer justify-start hover:bg-accent" onClick={() => setTheme("dark")}>
          חושך כמו החיים של חמינאי
        </DropdownMenuItem>
        <DropdownMenuItem className="pl-4 cursor-pointer justify-start hover:bg-accent" onClick={() => setTheme("system")}>
          זרום עם המערכת
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
