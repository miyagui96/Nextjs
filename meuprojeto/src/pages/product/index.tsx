import Link from 'next/link'

export default function Product() {
    return (
        <>
          <h1>Página de Produtos</h1>
          <Link legacyBehavior href="/">
             <a>Voltar</a>
          </Link>
        </>
    )
}