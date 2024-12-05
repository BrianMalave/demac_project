import { useEffect } from "react";
import { elementObserver } from '../utils/utils';
import { civiles, industriales, maritima, mineria, viales } from '../assets/assets';

const Field = () => {

  useEffect(() => {
    const fieldImages = document.querySelectorAll(".fieldImagesSubContainer");

    const cleanup = elementObserver(fieldImages, (element, isVisible) => {
      if (isVisible) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
    return cleanup;
  }, []);

  return (
    <section className='fieldSection'>
      <div className='fieldInfoContainer'>
        <div className="fieldInfoTitleContainer">
          <h1 className="fieldTitle">Destacamos en proyectos diversos, con un enfoque de calidad, seguridad y excelencia</h1>
        </div>
        <div className="fieldInfoDescription">
          <p className="fieldDescription">
            Contamos con un equipo multidisciplinario altamente calificado, lo que nos permite gestionar simultáneamente el desarrollo y construcción de diversos proyectos de manera eficiente y eficaz.
          </p>
        </div>
      </div>
      <div className="fieldImagesContainer">
        <div className="fieldImagesSubContainer motion-down">
          <a href="#partners">
            <img src={civiles} alt="Obras Civiles por Demac" className="fieldImages" />
            <h2>Obras Civiles</h2>
          </a>
        </div>
        <div className="fieldImagesSubContainer motion-up">
          <a href="#partners">
            <img src={industriales} alt="Obras Industriales por Demac" className="fieldImages" />
            <h2>Industriales</h2>
          </a>
        </div>
        <div className="fieldImagesSubContainer motion-up">
          <a href="#partners">
            <img src={mineria} alt="Obras Mineras por Demac" className="fieldImages" />
            <h2>Mineras</h2>
          </a>
        </div>
        <div className="fieldImagesSubContainer motion-up">
          <a href="#partners">
            <img src={maritima} alt="Obras Maritimas por Demac" className="fieldImages" />
            <h2>Marítimas</h2>
          </a>
        </div>
        <div className="fieldImagesSubContainer motion-down">
          <a href="#partners">
            <img src={viales} alt="Obras Viales por Demac" className="fieldImages" />
            <h2>Viales</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Field;
