import { useState } from "react";
import { civiles, industriales, maritima, mineria, viales } from '../assets/assets'

const Field = () => (
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
        <img src={civiles} alt="Obras Civiles" className="fieldImages"/>
        <h2>Obras Civiles</h2>
      </div>
      <div className="fieldImagesSubContainer motion-up">
        <img src={industriales} alt="Obras Industriales" className="fieldImages"/>
        <h2>Industriales</h2>
      </div>
      <div className="fieldImagesSubContainer motion-up">
        <img src={mineria} alt="Obras Mineras" className="fieldImages"/>
        <h2>Mineras</h2>
      </div>
      <div className="fieldImagesSubContainer motion-up">
        <img src={maritima} alt="Obras Maritimas" className="fieldImages"/>
        <h2>Marítimas</h2>
      </div>
      <div className="fieldImagesSubContainer motion-down">
        <img src={viales} alt="Obras Viales" className="fieldImages"/>
        <h2>Viales</h2>
      </div>
    </div>
  </section>
);

export default Field