import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link legacyBehavior href="/">
          <a>Página Inicial</a>
        </Link>
      </li>
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
      <li>
        <Link legacyBehavior href="/contact">
          <a>Contato</a>
        </Link>
      </li>
    </ul>
  )
}