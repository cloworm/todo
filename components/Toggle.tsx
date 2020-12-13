import { useEffect, useState, useCallback } from 'react'
import { useTheme } from 'next-themes'

const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const [src, setSrc] = useState('/images/icon-moon.svg')
  const [isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  const switchTheme = useCallback(() => {
    if (isMounted) {
      if (theme === 'light') {
        setTheme('dark')
        setSrc('/images/icon-sun.svg')
        return
      }

      setTheme('light')
      setSrc('/images/icon-moon.svg')
    }
  }, [theme, setTheme, setSrc, isMounted]);

  return (
    <a className="float-right cursor-pointer" onClick={switchTheme}>
      <img src={src} />
    </a>
  )
}

export default Toggle
