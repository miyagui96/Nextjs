import { Container } from '@/styles/pages/Home'
import Head from 'next/head'
import React from 'react'

import RocketseatLogo from '../assets/rocketseat.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Título do Site</title>
      </Head>

    <RocketseatLogo />
    <h1>ReactJS Structure</h1>
    <p>A ReactJS + NextJS structure made by Matheus Miyagui.</p>

    </Container>
  )
}

export default Home
