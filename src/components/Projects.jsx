import { useState } from "react";
import { arrowDown, gallery } from '../assets/assets'

const Project = () => (
  <section className='projectSection'>
    <div className='projectInfoContainer'>
      <div className="projectInfoTitleContainer">
        <h1 className="projectTitle">Comprometidos con cada uno de nuestros clientes</h1>
      </div>
      <div className="projectInfoDescription">
        <p className="projectDescription">
        Buscamos ofrecer soluciones integrales y personalizadas que garanticen el éxito de sus proyectos. 
        </p>
      </div>
    </div>
    <div className="knowSomeButtonContainer">
      <span className="knowSomeButton">
        <img src={arrowDown} alt="arrow Down" className="arrowDownImage"/>
        Conoce aqui algunos de ellos.
      </span>
    </div>
    {/* <div className="galleryImagesContainer">
    </div> */}
    <img src={gallery} alt="gallery" className="galleryImage"/>
  </section>
);

export default Project