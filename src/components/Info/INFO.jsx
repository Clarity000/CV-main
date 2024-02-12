import "./info.css";

function InfoCentered() {
  return (
    <section className="info">
      <img src="" alt="" />
      <header className="titulo">
        <img src="" alt="" />
        <h2>
          Mi nombre es Nicolás y soy <span> FrontEnd Developer</span>
        </h2>
      </header>
      <div className="texto">
        <h3>Sobre mí:</h3>
        <p>
          Tengo <span>23 años</span> y estoy cursando el segundo año de la
          carrera de <span>Ing. en Sistemas</span> en la UTN, comencé la carrera
          para profesionalizarme en el área IT y tener una buena{" "}
          <span>base de conocimientos</span> de cara al futuro en la tecnología,
          de momento me dedico al desarrollo web, pero apunto a encontrar algo
          en lo que poder aprovechar todo mi <span>potencial</span>.
        </p>
      </div>
      <div className="divisor-container">
        <hr />
        <img
          className="divisor-img"
          src="./src/assets/circulo.svg"
          alt="circulo girando en radio de aro"
        />
      </div>
      <div className="texto-2">
        <h3>Experiencia:</h3>
        <p>
          Hace ya un tiempo que me dediqué a aprender sobre diferentes{" "}
          <span>tecnologías y lenguajes de programación</span>, lo que me
          permitió tener una buena base de conocimiento en :
        </p>
      </div>
      <div className="brand-container">
        <div className="brand-line">
          <img
            className="logo"
            src="./src/assets/logos/html_logo.png"
            alt="html logo"
          />
          <img
            className="logo"
            src="./src/assets/logos/css_logo.png"
            alt="css logo"
          />
          <img
            className="logo"
            src="./src/assets/logos/js_logo.png"
            alt="js logo"
          />
          <img
            className="logo"
            src="./src/assets/logos/react_logo.png"
            alt="react logo"
          />
        </div>
        <div className="brand-line">
          <img
            className="logo"
            src="./src/assets/logos/tailwind_logo.png"
            alt="tailwind logo"
          />
          <img
            className="logo"
            src="./src/assets/logos/figma_logo.png"
            alt="figma logo"
          />
          <img
            className="logo"
            src="./src/assets/logos/vs_code_logo.png"
            alt="vs code logo"
          />
          <img className="logo" src="./src/assets/logos/jira_logo.png" alt="" />
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </section>
  );
}

export default InfoCentered;
