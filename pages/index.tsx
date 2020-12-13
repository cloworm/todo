import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Toggle from '../components/Toggle'

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="flex-1 w-1/2">
        <div>
          <p className="text-3xl text-white font-bold tracking-widest pt-10">
            TODO
            <Toggle />
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
