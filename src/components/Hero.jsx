import { useState } from 'react';
import { heroLogo } from '../assets/assets';
const Hero = () => (
  <section className='heroSection'>
    <div className='heroMainContainer'>
      <div className='heroSubContainer'>
        <h1 className='heroMessage'>
          Somos una <span className='big-words'>solución integral</span> para proyectos de construcción
        </h1>
      </div>
      <div className='heroSubContainerTwo'>
        <div className='heroParagraphContainer'>
          <p><span className='big-words-paragraph' >Contamos con más de 30 años de trayectoria.</span></p>
          <p className='containerP'>Nos apasiona desarrollar y construir obras de alto impacto que
          <span className='big-words-paragraph margin-paragraph'>marcan la diferencia</span> en las comunidades.
          </p>
        </div>
        <div className='heroImageContainer'>
          <img className='heroImage' alt='Constructora Demac Logo' src={heroLogo} />
        </div>
      </div>
    </div>
  </section>
)
export default Hero