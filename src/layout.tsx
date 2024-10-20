import { ClerkProvider } from '@clerk/clerk-react'
import { heIL } from '@clerk/localizations'
import { dark } from '@clerk/themes'
import { Analytics } from "@vercel/analytics/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet, useNavigate } from "react-router-dom"
import Header from "./components/header"
import { useThemeStore } from "./components/theme"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY)
   throw new Error("Missing Publishable Key")

const queryClient = new QueryClient()

function Layout() {
   const navigate = useNavigate()
   const theme = useThemeStore(state => state.theme)

   return (
      <QueryClientProvider client={queryClient}>
         <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
            localization={heIL}
            appearance={{
               baseTheme: theme === 'light' ? undefined : dark,
               variables: {
                  fontSize: '16px',
               }
            }}
         >
            <div className="flex min-h-screen w-full flex-col">
               <Header />
               <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                  <Outlet />
               </main>
               <Analytics />
            </div>
         </ClerkProvider>
      </QueryClientProvider>
   )
}

export default Layout
