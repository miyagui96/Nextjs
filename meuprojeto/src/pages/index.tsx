import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link legacyBehavior href="/product">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    <h1>Olá</h1>
    </>
  )
}
