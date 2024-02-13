import "./blog.css";

import muestraBlog from '../../assets/muestra_blog.png';

function Blog() {
  return (
    /* la clase secciones hace referencia a los contenedores de blog y gallery y su código CSS se encuentra en App.css */
    /* la clase subtitulo-secciones hace referencia a el subtitulo de las secciones blog y gallery, su código CSS se encuentra en App.css*/ 
    <section className="secciones">
      <strong>Blog</strong>
      <p className="subtitulo-secciones">
        Éste es un blog en proceso sobre un videojuego que pertenece a unos amigos
      </p>
      <div className="contenedor-muestra-blog">
        <img
          className="muestra-blog"
          src={muestraBlog}
          alt="imagen de muestra de un blog"
        />
      </div>
    </section>
  );
}

export default Blog;
