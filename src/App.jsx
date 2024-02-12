import "./App.css";

/*
  REACT-PARALLAX
*/

import { ParallaxProvider } from "react-scroll-parallax";

/*
COMPONENTES
*/

import InfoCentered from "./components/Info/INFO";
import Divisor from "./components/Div secciones/DIVISOR";
import Blog from "./components/Blog/BLOG";
import Gallery from "./components/Galería/GALLERY";
import Divisor2 from "./components/Div secciones/DIVISOR-2";
import ContactForm from "./components/Contact/CONTACT";
import Footer from "./components/Footer nav/FOOTER";
import Parallax_2 from "./components/Parallax_2/PARALLAX_2";
import Comets from "./components/Comets & Stars/Comets/COMETS";

function App() {
  return (
    <>
      <aside className="space">
        <Comets />
      </aside>
      <ParallaxProvider>
        <header>
          <Parallax_2 />
        </header>
        <main>
          <InfoCentered />
          <Divisor />
          <section className="contenedor-blog-gallery">
            <Blog />
            <Gallery />
          </section>
          <Divisor2 />
        </main>
        <footer>
          <ContactForm />
          <Footer />
        </footer>
      </ParallaxProvider>
    </>
  );
}

export default App;
