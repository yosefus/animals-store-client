import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
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

const applyTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return

  const root = window.document.documentElement
  root.classList.remove('light', 'dark')

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme)
  }
}

// Initialize theme on app load
if (typeof window !== 'undefined') {
  const { theme } = useThemeStore.getState()
  applyTheme(theme)

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleChange = () => {
    const currentTheme = useThemeStore.getState().theme
    if (currentTheme === 'system') {
      applyTheme('system')
    }
  }

  mediaQuery.addEventListener('change', handleChange)
}