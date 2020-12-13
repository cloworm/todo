import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'



const Toggle = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted ] = useState(false)

  useEffect(() => {
    setIsMounted(() => true)
  }, [])

  // TODO - usecallback
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  if (theme === 'light') {
    return (
      <a className="float-right cursor-pointer" onClick={switchTheme}>
      <img src="/images/icon-moon.svg" />
    </a>
    )
  }

  return (
    <a className="float-right cursor-pointer" onClick={switchTheme}>
      <img src="/images/icon-sun.svg" />
    </a>
  )
}

export default Toggle
