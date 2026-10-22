import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

// index.html already applied the saved theme before the page painted,
// so we simply read which one is active.
function readInitial(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#050b17' : '#f4f7fc')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked (private mode). The toggle still works for this visit.
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
