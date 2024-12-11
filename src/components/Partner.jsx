import { useState, useEffect } from "react";
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
  chevronRight,
} from "../assets/assets";
import { viales, maritimas, aeroportuarias, industriales } from "../constants/constants";

const Partner = () => {
  const [activeTab, setActiveTab] = useState("viales");
  const [openIndexes, setOpenIndexes] = useState({});

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = (tab, index) => {
    setOpenIndexes((prevState) => ({
      ...prevState,
      [tab]: prevState[tab] === index ? null : index,
    }));
  };
  useEffect(() => {
    const handleCustomTabChange = (event) => {
      setActiveTab(event.detail.tab);
    };
    window.addEventListener("changeTab", handleCustomTabChange);

    return () => {
      window.removeEventListener("changeTab", handleCustomTabChange);
    };
  }, []);

  const images = [besalcoLogo, icafalLogo, ferrovialLogo, comsaLogo, asmarLogo];

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
            alignItems: "center",
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
          className={`partnerProjectInfoClients ${
            openIndexes[tabKey] === index ? "open" : ""
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
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="partners" className="partnerSection">
      <div className="tabContainer">
        <button
          className={`tabButton ${activeTab === "viales" ? "active" : ""}`}
          onClick={() => handleTabChange("viales")}
        >
          Obras Viales
        </button>
        <button
          className={`tabButton ${activeTab === "maritimas" ? "active" : ""}`}
          onClick={() => handleTabChange("maritimas")}
        >
          Obras Marítimas
        </button>
        <button
          className={`tabButton ${activeTab === "aero" ? "active" : ""}`}
          onClick={() => handleTabChange("aero")}
        >
          Obras Aeroportuarias
        </button>
        <button
          className={`tabButton ${activeTab === "industriales" ? "active" : ""}`}
          onClick={() => handleTabChange("industriales")}
        >
          Obras Industriales
        </button>
      </div>

      <div className="partnerMainContainer">
        <section className={`obra-section ${activeTab === "viales" ? "active" : ""}`}>
          {renderObras(viales, "viales")}
        </section>
        <section className={`obra-section ${activeTab === "maritimas" ? "active" : ""}`}>
          {renderObras(maritimas, "maritimas")}
        </section>
        <section className={`obra-section ${activeTab === "aero" ? "active" : ""}`}>
          {renderObras(aeroportuarias, "aero")}
        </section>
        <section
          className={`obra-section ${activeTab === "industriales" ? "active" : ""}`}
        >
          {renderObras(industriales, "industriales")}
        </section>
      </div>
    </section>
  );
};

export default Partner;
