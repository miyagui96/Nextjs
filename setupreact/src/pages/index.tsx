import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Título do Site</title>
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </>
  )
}

export default Home