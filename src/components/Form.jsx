import React from "react";
import { arrowRight } from "../assets/assets";

const Form = () => (
  <section className="contactForm">
    <form action="">
        <div className="inputBoxFirst">
          {/* <label>Nombre</label> */}
          <input type="text" className="inputField" placeholder="Nombre"></input>
        </div>
        <div className="inputBox">
          {/* <label>Correo electrónico</label> */}
          <input type="email" className="inputField" placeholder="Correo electrónico"></input>
        </div>
        <div className="inputBox">
          {/* <label>Teléfono</label> */}
          <input type="tel" className="inputField" placeholder="Número telefónico"></input>
        </div>
        <div className="inputBox">
          {/* <label>Mensaje</label> */}
          <textarea name="" id="" className="inputField mess" placeholder="Mensaje"></textarea>
        </div>
        <button type="submit">
          Enviar Mensaje
          <img src={arrowRight} />  
        </button>

    </form>
  </section>
)

export default Form