import { useState } from 'react';
import { heroLogo } from '../assets/assets';
const Hero = () => (
  <section id='nosotros' className='heroSection'>
    <div className='heroMainContainer'>
      <div className='heroSubContainer'>
        <h1 className='heroMessage'>
          Somos una <span className='big-words'>solución integral</span> para proyectos de construcción
        </h1>
      </div>
      <div className='heroSubContainerTwo'>
        <div className='heroParagraphContainer'>
          <p>Contamos con más de 30 años de trayectoria.</p>
          <p>Nos apasiona desarrollar y construcir obras de alto impacto que</p>
          <p><span className='big-words-paragraph'>marcan la diferencia</span> en las comunidades.</p>
        </div>
        <div className='heroImageContainer'>
          <img className='heroImage' src={heroLogo} />
        </div>
      </div>
    </div>
  </section>
)
export default Hero