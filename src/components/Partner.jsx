import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  besalcoLogo,
  icafalLogo,
  ferrovialLogo,
  comsaLogo,
  asmarLogo,
  arrigoniLogo,
  belfiLogo,
  sacyrLogo,
  chevronDown,
  chevronRight
} from '../assets/assets';
import { viales, maritimas, aeroportuarias } from '../constants/constants';

const Partner = () => {

  const [openIndexViales, setOpenIndexViales] = useState(null);
  const [openIndexMaritimas, setOpenIndexMaritimas] = useState(null);
  const [openIndexAero, setOpenIndexAero] = useState(null);


  const handleToggleViales = (index) => {
    setOpenIndexViales(openIndexViales === index ? null : index);
  };
  const handleToggleMaritimas = (index) => {
    setOpenIndexMaritimas(openIndexMaritimas === index ? null : index);
  };
  const handleToggleAero = (index) => {
    setOpenIndexAero(openIndexAero === index ? null : index);
  };

  const images = [
    besalcoLogo,
    icafalLogo,
    ferrovialLogo,
    comsaLogo,
    asmarLogo
  ];

  const swiperStyle = {
    width: '100%',
    height: '140px'
  };

  return (
    <section className='partnerSection'>
      <div className='partnerTitleContainer'>
        <h1 className="partnerTitle">Partners que nos han elegido por nuestra experiencia</h1>
      </div>

      {/* SLIDERS PARTNER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 5 }
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={3000}
        style={swiperStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-Partner-content">
              <img className="slide-Partner-image" src={image} alt={`Partner Demac ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DISCLOSURE LAYOUT */}
      <div className="partnerMainContainer">
        <section id="obras-viales" class="obra-section">
          {/* Obras Viales */}
          <h3 className="partnerFieldTitle">Obras Viales</h3>
          {viales.map((vial, index) => (
            <div className="partnerContainer" key={index}>
              <div
                className="partnerProjectName"
                onClick={() => handleToggleViales(index)}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {vial.title}
                <img
                  src={openIndexViales === index ? chevronDown : chevronRight}
                  alt={openIndexViales === index ? "Chevron Down" : "Chevron Right"}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div
                className={`partnerProjectInfoClients ${openIndexViales === index ? "open" : ""}`}
              >
                <div className="partnerFirstContainer">
                  <div className="partnerProjectDate">Año: {vial.year}</div>
                </div>
                <div className="partnerDescriptionContainer">
                  <div className="partnerProjectDescription">
                    <p>
                      <strong className="descriptionParagraph">Descripción:</strong> {vial.description}
                    </p>
                  </div>
                  <div className="partnerLogoContainerAlt">
                    <h3>Clientes:</h3>
                    <div className="clientContainer">
                      {vial.clients.map((client, i) => (
                        <img
                          key={i}
                          src={client.logo}
                          alt={client.alt}
                          className="clientLogo"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="obras-maritimas" class="obra-section">
          {/* Obras Marítimas */}
          <h3 className="partnerFieldTitle">Obras Marítimas</h3>
          {maritimas.map((maritima, index) => (
            <div className="partnerContainer" key={index}>
              <div
                className="partnerProjectName"
                onClick={() => handleToggleMaritimas(index)}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {maritima.title}
                <img
                  src={openIndexMaritimas === index ? chevronDown : chevronRight}
                  alt={openIndexMaritimas === index ? "Chevron Down" : "Chevron Right"}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div
                className={`partnerProjectInfoClients ${openIndexMaritimas === index ? "open" : ""}`}
              >
                <div className="partnerFirstContainer">
                  <div className="partnerProjectDate">Año: {maritima.year}</div>
                </div>
                <div className="partnerDescriptionContainer">
                  <div className="partnerProjectDescription">
                    <p>
                      <strong className="descriptionParagraph">Descripción:</strong> {maritima.description}
                    </p>
                  </div>
                  <div className="partnerLogoContainerAlt">
                    <h3>Clientes:</h3>
                    <div className="clientContainer">
                      {maritima.clients.map((client, i) => (
                        <img
                          key={i}
                          src={client.logo}
                          alt={client.alt}
                          className="clientLogo"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section id="obras-aeropotuarias">
          {/* Obras Aeroportuarias */}
          <h3 className="partnerFieldTitle">Obras Aeroportuarias</h3>
          {aeroportuarias.map((aero, index) => (
            <div className="partnerContainer" key={index}>
              <div
                className="partnerProjectName"
                onClick={() => handleToggleAero(index)}
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {aero.title}
                <img
                  src={openIndexAero === index ? chevronDown : chevronRight}
                  alt={openIndexAero === index ? "Chevron Down" : "Chevron Right"}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div
                className={`partnerProjectInfoClients ${openIndexAero === index ? "open" : ""}`}
              >
                <div className="partnerFirstContainer">
                  <div className="partnerProjectDate">Año: {aero.year}</div>
                </div>
                <div className="partnerDescriptionContainer">
                  <div className="partnerProjectDescription">
                    <p>
                      <strong className="descriptionParagraph">Descripción:</strong> {aero.description}
                    </p>
                  </div>
                  <div className="partnerLogoContainerAlt">
                    <h3>Clientes:</h3>
                    <div className="clientContainer">
                      {aero.clients.map((client, i) => (
                        <img
                          key={i}
                          src={client.logo}
                          alt={client.alt}
                          className="clientLogo"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Partner;
