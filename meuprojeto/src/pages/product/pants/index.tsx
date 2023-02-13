import Navbar from "components/Navbar";
import Link from "next/link";

export default function Pants() {
  return (
    <>
      <h1>Página de Pants</h1>
      <ul>
        <li>
          <Link legacyBehavior href="/product/pants/redpant">
            <a>Red Pant</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/product/pants/bluepant">
            <a>Blue Pant</a>
          </Link>
        </li>
      </ul>
    </>
  )
}