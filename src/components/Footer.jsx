import { useState } from 'react';
import { logoFooter } from '../assets/assets';

const Footer = () => (
  <section id='footer' className='footerSection'>
    <div className='footerContainer'>
      <div className='footerLogoContainer'>
        <img src={logoFooter} />
        <h1>Somos una solución integral para proyectos de construcción, desde el desarrollo de ingeniería a la construcción de obras complejas.</h1>
      </div>
      <div className="footerMenuContainer">
        <ul>
          <li className="footerListTitle"><a className='titleLink' href='#'>Nosotros</a></li>
        </ul>
        <ul>
          <li className="footerListTitle"><a href='#'>Servicios</a></li>
          <li><a className="foooterLink" href="#">Ingeniería</a></li>
          <li><a className="foooterLink" href="#">Habilitación de Redes</a></li>
          <li><a className="foooterLink" href="#">Hormigón</a></li>
          <li><a className="foooterLink" href="#">Estructuras</a></li>
        </ul>
        <ul>
          <li className="footerListTitle"><a href='#'>Partners</a></li>
          <li><a className="foooterLink" href="#">Facebook</a></li>
          <li><a className="foooterLink" href="#">Tumblr</a></li>
          <li><a className="foooterLink" href="#">Instagram</a></li>
          <li><a className="foooterLink" href="#">YouTube</a></li>
          <li><a className="foooterLink" href="#">Twitter</a></li>
        </ul>
        <ul>
          <li className="footerListTitle"><a href='#'>Contacto</a></li>
          <li><a className="foooterLink" href="#">Formulario</a></li>
          <li><a className="foooterLink" href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className='disclaimerContainer'>
      <p>
        © 2024 Constructora Demac. Todos los derechos reservados. | By Behumans.
      </p>
    </div>
  </section>
)
export default Footer