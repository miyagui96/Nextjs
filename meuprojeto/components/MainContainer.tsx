import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "../styles/MainContainer.module.css"

// interface Produto {
//   children: string;
//   outra: any;
// }

export default function MainContainer({ children }: any) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}