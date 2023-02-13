import Footer from "./Footer";
import Navbar from "./Navbar";

// interface Produto {
//   children: string;
//   outra: any;
// }

export default function MainContainer({ children }: any) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}