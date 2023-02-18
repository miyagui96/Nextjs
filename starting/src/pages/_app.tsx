import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from '../../components/screen/Layout/Layout'
import '../../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Next.js Boilerplate</title>
    </Head>
    <Layout>
      <CssBaseline/>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

