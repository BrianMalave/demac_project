import { useState, useEffect } from 'react';
import { heroLogo } from '../assets/assets';
import { solutions } from '../constants/constants';

const Hero = () => {


  const [currentSolution, setCurrentSolution] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentSolution((prevSolution) => (prevSolution + 1) % solutions.length);
        setIsAnimating(false);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='heroSection'>
      <div className='heroMainContainer'>
        <div className='heroSubContainer'>
          <h1 className='heroMessage'>
            Somos una
            <br />
            <span className={`big-words ${isAnimating ? "fade" : ""}`}>
              {solutions[currentSolution]}
            </span>
            <br />
            para proyectos de construcción
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
  );
}
export default Hero