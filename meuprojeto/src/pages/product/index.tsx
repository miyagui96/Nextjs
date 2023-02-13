import Navbar from 'components/Navbar'
import Link from 'next/link'

export default function Product() {
    return (
        <>
          <Navbar></Navbar>
          <h1>Página de Produtos</h1>
          <Link legacyBehavior href="/">
             <a>Voltar</a>
          </Link>
          <ul>
            <li>
              <Link legacyBehavior href="/product/pants">
                <a>Pants</a>
              </Link>
            </li>
          </ul>
        </>
    )
}