import { useState } from 'react';
import { Form } from "./index";
import { phoneIcon, letterIcon } from '../assets/assets';

const Contact = () => (
  <section id='contacto' className='contactSection'>
    <div>
      <div>
        <h4>¿Agendamos una reunión?</h4>
        <h1>Cuéntanos más de tu proyecto</h1>
        <h4>y comencemos a desarrollarlo con bases sólidas</h4>
      </div>
      <div>
        <a className='contactLinks' href='mailto:contacto@constructorademac.cl'>
          <img src={letterIcon} />
          contacto@constructorademac.cl
          </a>
      </div>
      <div>
        <a className='contactLinks' href='tel:56974993044'>
        <img src={phoneIcon} />
        (+56) 9 7499 304
        4</a>
      </div>
    </div>
    <div>
      <Form />
    </div>
  </section>
)
export default Contact