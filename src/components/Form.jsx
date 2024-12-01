import React from "react";
import { useState } from "react";
import { arrowRight } from "../assets/assets";
import Swal from 'sweetalert2'

const Form = () => {

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5ffaed1f-d247-429e-a783-c8921b158512");

    const res = await fetch("https://api.web3forms.com/submit",  {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "¡Muchas Gracias!",
        text: "Tu mensaje se ha enviado satisfactoriamente!",
        icon: "success"
      });
      setFormValues({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section className="contactForm">
      <form onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="Nueva notificación desde constructorademac.cl"></input>
        <input type="hidden" name="from_name" value="constructorademac.cl"></input>
        <div className="inputBoxFirst">
          {/* <label>Nombre</label> */}
          <input type="text" className="inputField" name='nombre' placeholder="Nombre" required onChange={handleChange} value={formValues.nombre}></input>
        </div>
        <div className="inputBox">
          {/* <label>Correo electrónico</label> */}
          <input type="email" className="inputField" name='email' placeholder="Correo electrónico" required onChange={handleChange} value={formValues.email}></input>
        </div>
        <div className="inputBox">
          {/* <label>Teléfono</label> */}
          <input type="tel" className="inputField" name='telefono' placeholder="Número telefónico" onChange={handleChange} value={formValues.telefono}></input>
        </div>
        <div className="inputBox">
          {/* <label>Mensaje</label> */}
          <textarea name='mensaje' id="" className="inputField mess" placeholder="Mensaje" required onChange={handleChange} value={formValues.mensaje}></textarea>
        </div>
        <button type="submit">
          Enviar Mensaje
          <img src={arrowRight} />
        </button>

      </form>
    </section>
  )
}


export default Form