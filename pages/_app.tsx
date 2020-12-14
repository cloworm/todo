import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { RecoilRoot } from 'recoil'

function Application({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default Application
