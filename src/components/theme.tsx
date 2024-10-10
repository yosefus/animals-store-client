import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}


const applyTheme = (theme: Theme) : Theme => {
  const root = window.document.documentElement
  root.classList.remove('light', 'dark')
  
  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme)
  }

  return theme
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
    {
      name: 'theme-storage',
    }
  )
)

if (typeof window !== 'undefined') {
  applyTheme(useThemeStore.getState().theme)
}