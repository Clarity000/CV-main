import "./gallery.css";

import foto1 from '../../../public/assets/img-gallery/1.webp'

function Gallery() {
  return (
    /* la clase secciones hace referencia a los contenedores de blog y gallery y su código CSS se encuentra en App.css */
    <section className="secciones">
      <strong>Gallería</strong>
      <p className="subtitulo-secciones">
        Selección de fotos tomadas en mi tiempo libre, espero les guste.
      </p>
      <div className="contenedor-img">
        <div className="primera-columna">
          <img id="palmera" src="./public/assets/img-gallery/9.webp" alt="" />
        </div>
        <div className="segunda-columna">
          <img src="./public/assets/img-gallery/10.webp" alt="" />
          <img src="./public/assets/img-gallery/6.webp" alt="" />
        </div>
        <div className="columnas-siguientes">
          <img src="./public/assets/img-gallery/7.webp" alt="" />
          <img src="./public/assets/img-gallery/8.webp" alt="" />
          <img src="./public/assets/img-gallery/12.webp" alt="" />
          <img src="./public/assets/img-gallery/19.webp" alt="" />
          <img src="./public/assets/img-gallery/2.webp" alt="" />
          <img src={foto1} alt="" />
          <img src="./public/assets/img-gallery/11.webp" alt="" />
          <img src="./public/assets/img-gallery/20.webp" alt="" />
          <img src="./public/assets/img-gallery/14.webp" alt="" />
          <img src="./public/assets/img-gallery/13.webp" alt="" />
          <img src="./public/assets/img-gallery/16.webp" alt="" />
          <img src="./public/assets/img-gallery/17.webp" alt="" />
          <img src="./public/assets/img-gallery/21.webp" alt="" />
          <img src="./public/assets/img-gallery/15.webp" alt="" />
          <img src="./public/assets/img-gallery/22.webp" alt="" />
          <img src="./public/assets/img-gallery/23.webp" alt="" />
          <img src="./public/assets/img-gallery/18.webp" alt="" />
          <img src="./public/assets/img-gallery/24.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
