import { useCallback } from 'react'
import { useTheme } from 'next-themes'

import useIsMounted from './hooks/useIsMounted'

const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  const switchTheme = useCallback(() => {
    if (isMounted) {
      if (theme === 'light') {
        setTheme('dark')
        return
      }

      setTheme('light')
    }
  }, [theme, setTheme, isMounted]);

  if (!isMounted) return null

  return (
    <a className="float-right cursor-pointer" onClick={switchTheme}>
      <img src={theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg'} />
    </a>
  )
}

export default Toggle
