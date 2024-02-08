import "./parallax_2.css";

import { Parallax } from "react-scroll-parallax";

function Parallax_2() {
  return (
    <section className="parallax_2">
      <Parallax speed={45} className="tierra-1"></Parallax>
      <Parallax speed={30} className="tierra-2"></Parallax>
      <Parallax speed={25} className="tierra-3"></Parallax>
      <Parallax speed={15} className="tierra-4"></Parallax>
      <Parallax speed={45} className="tierra-5"></Parallax>
      <Parallax speed={-10} className="planeta"></Parallax>
      <Parallax className="parallax-text" speed={-35}>
        <div className="parallax-text">
          <h1>Bienvenidos</h1>
        </div>
      </Parallax>
    </section>
  );
}


export default Parallax_2;
