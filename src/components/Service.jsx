import { useState } from "react";
import { heroLogo, plusIcon, minusIcon } from '../assets/assets';
import { disclosureInfo } from '../constants/constants'
import { formatContent, toggleDisclosure } from '../utils/utils'

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className='serviceSection'>
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
              Estamos comprometidos con ofrecer soluciones integrales y personalizadas
            </h2>
          </div>

          {/* Disclosure Layout */}
          {disclosureInfo.map((disclosure, index) => (
            <div key={index} className="disclosureContainer">
              <div className="disclosureHeader" onClick={() => toggleDisclosure(index, activeIndex, setActiveIndex)}>
                <span>{disclosure.title}</span>
                <img
                  className="disclosureIcon"
                  src={activeIndex === index ? minusIcon : plusIcon}
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