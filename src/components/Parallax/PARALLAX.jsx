import "./parallax.css";
import { Parallax } from "react-scroll-parallax";

function ParallaxEffect() {
  return (
    <div className="parallax-effect">
      <Parallax speed={30} className="layer-1">
        <img
          className="layer-1"
          src="./src/assets/parallax/ROCKS-FRONT.png"
          alt="rocas espaciales"
        />
      </Parallax>
      <Parallax speed={16} className="layer-2">
        <img
          className="layer-2"
          src="./src/assets/parallax/ROCKS-BEHIND.png"
          alt="rocas espaciales"
        />
      </Parallax>
      <img
        className="layer-3"
        src="./src/assets/parallax/ROCKS-BEHIND-2.png"
        alt="rocas espaciales"
      />
      <Parallax speed={-13} className="layer-4">
        <img src="./src/assets/parallax/EARTH.png" alt="planeta tierra" />
      </Parallax>
      <Parallax className="parallax-text" speed={-20}>
        <div className="parallax-text">
          <h1>Bienvenidos</h1>
        </div>
      </Parallax>
    </div>
  );
}

export default ParallaxEffect;
