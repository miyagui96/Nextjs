import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <CssBaseline />
    <Component {...pageProps} />
  </>
  )
}

