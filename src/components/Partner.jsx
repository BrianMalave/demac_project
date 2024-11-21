import { useState } from "react";
import { besalcoLogo, icafalLogo, ferrovialLogo, arrigoniLogo, belfiLogo, sacyrLogo } from '../assets/assets'

const Partner = () => (
  <section className='partnerSection'>
    <div className='partnerTitleContainer'>
      <h1 className="partnerTitle">Partners que nos han elegido por nuestra experiencia</h1>
    </div>
    <div className="partnerMainContainer">
      <div className="partnerContainer">
        <div className="partnerLogoContainer">
          <img src={besalcoLogo} alt="besalco partner Demac" className="partnerLogo" />
        </div>
        <div className="partnerInfoContainer">
          <p className="partnerFieldTitle">
            Obras Marítimas
          </p>
          <div className="partnerProjectName">Reparación Molo 500 Norte
            <span className="partnerPorjectLocation"> - Base Naval Thno</span>
          </div>
          <div className="partnerProjectName">Construcción Molo Sur
            <span className="partnerPorjectLocation"> - Base Naval Thno</span>
          </div>
          <div className="partnerProjectName">Reparacias de Filtraciones Dique Seco N°2
            <span className="partnerPorjectLocation"> - Asmar Thno</span>
          </div>
          <div className="partnerProjectName">Rehabilitación de redes AP y RCI.
            <span className="partnerPorjectLocation"> - Asmar Thno</span>
          </div>
        </div>
      </div>
    </div>
    <div className="partnerMainContainer">
      <div className="partnerContainer">
        <div className="partnerInfoContainer">
          <p className="partnerFieldTitle">
            Obras Viales
          </p>
          <div className="partnerProjectName">Terceras pistas tramo II y nueva plaza de peaje Angostura</div>
          <div className="partnerProjectName">Obras de Infraestructura y Superestructura Puente Bicentenario Oriente</div>
          <div className="partnerProjectName">Construcción Puente Ferroviario</div>
          <div className="partnerProjectName">Construcción Puentes y Fosos, Ruta Nahuelbuta</div>
        </div>
        <div className="partnerLogoContainerAlt">
          <img src={ferrovialLogo} alt="ferrovial partner Demac" className="partnerLogo" />
          <h3>Clientes:</h3>
          <div className="clientContainer">
            <img src={besalcoLogo} alt="besalco partner Demac" className="partnerLogo" />
            <img src={sacyrLogo} alt="sacyr partner Demac" className="clientLogo" />
            <img src={arrigoniLogo} alt="arrigoni partner Demac" className="clientLogo" />
            <img src={belfiLogo} alt="belfi partner Demac" className="clientLogo" />
          </div>
        </div>
      </div>
    </div>
    <div className="partnerMainContainer">
      <div className="partnerContainer">
        <div className="partnerLogoContainer">
          <img src={icafalLogo} alt="icafal partner Demac" className="partnerLogoIcafal" />
        </div>
        <div className="partnerInfoContainer">
          <p className="partnerFieldTitle">
            Obras Aeroportuarias
          </p>
          <div className="partnerProjectName">Ampliación pistas de aterrizaje, Aeródromo Carriel Sur</div>
          <div className="partnerProjectName">Obras de saneamiento Aeródromo, Carriel Sur</div>
          <div className="partnerProjectName">Construcción Edificios y Salas de Bombas, Aeródromo Carriel Sur</div>
        </div>
      </div>
    </div>
  </section>
);

export default Partner