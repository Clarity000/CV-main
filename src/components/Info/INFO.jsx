import "./info.css";

import circulo from '../../../public/assets/circulo.svg';
import htmlLogo from '../../../public/assets/logos/html_logo.png'
import cssLogo from '../../../public/assets/logos/css_logo.png'
import figmaLogo from '../../../public/assets/logos/figma_logo.png'
import jiraLogo from '../../../public/assets/logos/jira_logo.png'
import jsLogo from '../../../public/assets/logos/js_logo.png'
import reactLogo from '../../../public/assets/logos/react_logo.png'
import vsCodeLogo from '../../../public/assets/logos/vs_code_logo.png'
import tailwindLogo from '../../../public/assets/logos/tailwind_logo.png'

function InfoCentered() {
  return (
    <section className="info">
      <header className="titulo">
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
          src={circulo}
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
            src={htmlLogo}
            alt="html logo"
          />
          <img
            className="logo"
            src={cssLogo}
            alt="css logo"
          />
          <img
            className="logo"
            src={jsLogo}
            alt="js logo"
          />
          <img
            className="logo"
            src={reactLogo}
            alt="react logo"
          />
        </div>
        <div className="brand-line">
          <img
            className="logo"
            src={tailwindLogo}
            alt="tailwind logo"
          />
          <img
            className="logo"
            src={figmaLogo}
            alt="figma logo"
          />
          <img
            className="logo"
            src={vsCodeLogo}
            alt="vs code logo"
          />
          <img className="logo" src={jiraLogo} alt="logo de Jira" />
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </section>
  );
}

export default InfoCentered;
