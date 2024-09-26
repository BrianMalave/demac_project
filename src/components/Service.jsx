import { useState } from "react";
import { heroLogo, plusIcon } from '../assets/assets';
import { disclosureInfo } from '../constants/constants'
import { formatContent, toggleDisclosure } from '../utils/utils'

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section id='servicios' className='serviceSection'>
      <div className="serviceTitleContainer">
        <h1 className="serviceTitle">Servicios</h1>
      </div>

      <div className="serviceSubContainer">
        <div className="serviceLogoContainer">
          <img className='serviceLogo' src={heroLogo} alt="Logo" />
        </div>

        <div className="serviceTextContainer">
          <div className="serviceSubTitleContainer">
            <h2 className="serviceTitleDescription">
              Contamos más de 30 años de trayectoria. Nos apasiona desarrollar y construir obras de alto impacto que marcan la diferencia en las comunidades.
            </h2>
          </div>

          {/* Disclosure Layout */}
          {disclosureInfo.map((disclosure, index) => (
            <div key={index} className="disclosureContainer">
              <div className="disclosureHeader" onClick={() => toggleDisclosure(index, activeIndex, setActiveIndex)}>
                <span>{disclosure.title}</span>
                <img
                  className="disclosureIcon"
                  src={activeIndex === index ? '-' : plusIcon}
                  alt={activeIndex === index ? 'Cerrar' : 'Abrir'}
                />
              </div>
              <div className={`disclosureContent disclosureContent-${index} ${activeIndex === index ? 'active' : ''}`}>
              {formatContent(disclosure.content)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;