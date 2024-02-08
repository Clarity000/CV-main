import "./contact.css";

function ContactForm() {
  return (
    <div className="form-container">
      <form action="https://formsubmit.co/nicomoyanoccr@gmail.com" method="POST" className="form">
        <div className="form-group">
          <label htmlFor="email">Contáctame...</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Ingrese su email"
          />
          <textarea
            required
            cols="50"
            rows="10"
            id="textarea"
            name="mensaje"
            placeholder="Deje su mensaje"
          />
        </div>
        <button type="submit" className="form-btn">
          Enviar
        </button>
        <input type="hidden" name="_next" value="http://localhost:5173/"/>
        <input type="hidden" name="_captcha" value="false"/>
      </form>
    </div>
  );
}

export default ContactForm;
