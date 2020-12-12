import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './index.module.scss'

export default function Home() {
  const theme = 'light';
  return (
    <div className={'container ' + theme}>
      <Head>
        <title>ToDo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.bgImage}></div>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
