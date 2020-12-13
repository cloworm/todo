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
    <div className="min-h-screen flex flex-col items-center w-1/2">
      <Head>
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex-1">
        <div>
          <p className="text-3xl text-white font-bold tracking-widest pt-10">
            TODO
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
