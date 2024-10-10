import { Outlet } from "react-router-dom"
import Header from "./components/header"
import { Analytics } from "@vercel/analytics/react"

function Layout() {
   return (
      <div className="flex min-h-screen w-full flex-col">
         <Header />
         <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <Outlet/>
         </main>
         <Analytics/>
      </div>
   )
}

export default Layout
