import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  besalcoLogo,
  icafalLogo,
  ferrovialLogo,
  comsaLogo,
  asmarLogo,
  chevronDown,
  chevronRight
} from "../assets/assets";
import { viales, maritimas, aeroportuarias, industriales } from "../constants/constants";

const Partner = () => {
  const [activeTab, setActiveTab] = useState("viales");
  const [openIndexes, setOpenIndexes] = useState({});

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = (tab, index) => {
    setOpenIndexes((prevState) => {
      const newState = {
        ...prevState,
        [tab]: prevState[tab] === index ? null : index
      };
      return newState;
    });
  };

  const images = [
    besalcoLogo,
    icafalLogo,
    ferrovialLogo,
    comsaLogo,
    asmarLogo
  ];

  const swiperStyle = {
    width: "100%",
    height: "140px"
  };

  const renderObras = (obras, tabKey) => {
    return obras.map((obra, index) => (
      <div className="partnerContainer" key={index}>
        <div
          className="partnerProjectName"
          onClick={() => handleToggle(tabKey, index)}
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {obra.title}
          <img
            src={openIndexes[tabKey] === index ? chevronDown : chevronRight}
            alt={openIndexes[tabKey] === index ? "Chevron Down" : "Chevron Right"}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div
          className={`partnerProjectInfoClients ${openIndexes[tabKey] === index ? "open" : ""
            }`}
        >
          <div className="partnerFirstContainer">
            <div className="partnerProjectDate">Año: {obra.year}</div>
          </div>
          <div className="partnerDescriptionContainer">
            <div className="partnerProjectDescription">
              <p>
                <strong className="descriptionParagraph">Descripción:</strong>{" "}
                {obra.description}
              </p>
            </div>
            <div className="partnerLogoContainerAlt">
              <h3>Clientes:</h3>
              <div className="clientContainer">
                {obra.clients.map((client, i) => (
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
    ));
  };

  return (
    <section className="partnerSection">
      <div className="partnerTitleContainer">
        <h1 className="partnerTitle">
          Partners que nos han elegido por nuestra experiencia
        </h1>
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
              <img
                className="slide-Partner-image"
                src={image}
                alt={`Partner Demac ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TAB BUTTONS */}
      <div className="tabContainer">
        <button
          className={`tabButton ${activeTab === "viales" ? "active" : ""}`}
          onClick={() => handleTabChange("viales")}
        >
          Obras Viales
        </button>
        <div className="spacer"></div>
        <button
          className={`tabButton ${activeTab === "maritimas" ? "active" : ""}`}
          onClick={() => handleTabChange("maritimas")}
        >
          Obras Marítimas
        </button>
        <div className="spacer"></div>
        <button
          className={`tabButton ${activeTab === "aero" ? "active" : ""}`}
          onClick={() => handleTabChange("aero")}
        >
          Obras Aeroportuarias
        </button>
        <div className="spacer"></div>
        <button
          className={`tabButton ${activeTab === "industriales" ? "active" : ""}`}
          onClick={() => handleTabChange("industriales")}
        >
          Obras Industriales
        </button>
      </div>

      {/* TABS CONTENT */}
      <div className="partnerMainContainer">
        <section
          className={`obra-section ${activeTab === "viales" ? "active" : ""}`}
        >
          {renderObras(viales, "viales")}
        </section>
        <section
          className={`obra-section ${activeTab === "maritimas" ? "active" : ""
            }`}
        >
          {renderObras(maritimas, "maritimas")}
        </section>
        <section
          className={`obra-section ${activeTab === "aero" ? "active" : ""}`}
        >
          {renderObras(aeroportuarias, "aero")}
        </section>
        <section
          className={`obra-section ${activeTab === "industriales" ? "active" : ""
            }`}
        >
          {renderObras(industriales, "industriales")}
        </section>
      </div>
    </section>
  );
};

export default Partner;
