import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import styles from './index.module.css'
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
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

  return (
    <div className="flex flex-column items-center">
      <Head>
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div></div>
        {/* <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
        <button onClick={switchTheme}>Change theme</button>
      </main>

      <Footer />
    </div>
  )
}
