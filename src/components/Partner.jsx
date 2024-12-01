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
import { viales } from '../constants/constants';

const Partner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDisclosureToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
        <h3 className="partnerFieldTitle">Obras Marítimas</h3>
        {viales.map((viale, index) => (
          <div className="partnerContainer" key={index}>
            <div 
              className="partnerProjectName" 
              onClick={() => handleDisclosureToggle(index)}
              style={{
                cursor: "pointer", 
                fontWeight: "bold", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center"
              }}
            >
              {viale.title}
              <img 
                src={openIndex === index ? chevronDown : chevronRight} 
                alt={openIndex === index ? "Chevron Down" : "Chevron Right"} 
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div 
              className={`partnerProjectInfoClients ${openIndex === index ? "open" : ""}`}
            >
              <div className="partnerFirstContainer">
                <div className="partnerProjectDate">Año: {viale.year}</div>
              </div>
              <div className="partnerDescriptionContainer">
                <div className="partnerProjectDescription">
                  <p>
                    <strong className="descriptionParagraph">Descripción:</strong> {viale.description}
                  </p>
                </div>
                <div className="partnerLogoContainerAlt">
                  <h3>Clientes:</h3>
                  <div className="clientContainer">
                    {viale.clients.map((client, i) => (
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
      </div>
    </section>
  );
};

export default Partner;
