import { useState } from 'react';
import { logoFooter } from '../assets/assets';

const Footer = () => (
  <section id='footer' className='footerSection'>
    <div className='footerContainer'>
      <div className='footerLogoContainer'>
        <img src={logoFooter} />
        <h1>Somos una solución integral para proyectos de construcción, desde el desarrollo de ingeniería a la construcción de obras complejas.</h1>
      </div>
      <div class="footerMenuContainer">
        <ul>
          <li class="footerListTitle"><a className='titleLink' href='#'>Nosotros</a></li>
        </ul>
        <ul>
          <li class="footerListTitle"><a href='#'>Servicios</a></li>
          <li><a class="foooterLink" href="#">Ingeniería</a></li>
          <li><a class="foooterLink" href="#">Habilitación de Redes</a></li>
          <li><a class="foooterLink" href="#">Hormigón</a></li>
          <li><a class="foooterLink" href="#">Estructuras</a></li>
        </ul>
        <ul>
          <li class="footerListTitle"><a href='#'>Partners</a></li>
          <li><a class="foooterLink" href="#">Facebook</a></li>
          <li><a class="foooterLink" href="#">Tumblr</a></li>
          <li><a class="foooterLink" href="#">Instagram</a></li>
          <li><a class="foooterLink" href="#">YouTube</a></li>
          <li><a class="foooterLink" href="#">Twitter</a></li>
        </ul>
        <ul>
          <li class="footerListTitle"><a href='#'>Contacto</a></li>
          <li><a class="foooterLink" href="#">Formulario</a></li>
          <li><a class="foooterLink" href="#">LinkedIn</a></li>
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