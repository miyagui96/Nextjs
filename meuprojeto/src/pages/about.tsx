import Navbar from 'components/Navbar'
import Link from 'next/link'

export default function About() {
    return (
        <>
          <h1>Página de About!</h1>
          <Link legacyBehavior href="/">
            <a>Voltar</a>
          </Link>
        </>
    )
}        