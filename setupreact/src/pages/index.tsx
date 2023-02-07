import Head from 'next/head'
import React from 'react'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Título do Site</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>Hello World!</h1>
      </main>
    </>
  )
}

export default Home
