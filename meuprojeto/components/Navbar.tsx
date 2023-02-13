import Link from 'next/link'

export default function Navbar() {
  return (
    <ul>
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
    </ul>
  )
}