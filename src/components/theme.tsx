import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const applyTheme = (theme: Theme) => {
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')

  if (theme === 'system')
    root.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  else
    root.classList.add(theme)
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (newTheme) => {
        set({ theme: newTheme })
        applyTheme(newTheme)
      },
    }),
    { name: 'theme-storage' }
  )
)

if (typeof window !== 'undefined') {
  applyTheme(useThemeStore.getState().theme)
}