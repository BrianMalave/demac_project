import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  arrowDown,
  closeButtonModal,
  slideImagen1,
  slideImagen2,
  slideImagen3,
  slideImagen4,
  slideImagen5,
  slideImagen6,
  aeropuerto1,
  aeropuerto2,
  aeropuerto3,
  aeropuerto4,
  angostura1,
  angostura2,
  angostura3,
  angostura4,
  dique1,
  dique2,
  dique3,
  dique4,
  mapa1,
  mapa2,
  mapa3,
  mapa4,
  molo1,
  molo2,
  molo3,
  molo4,
  Puenteb1,
  Puenteb2,
  Puenteb3,
  Puenteb4,
  Puenteb5,
  Puenteb6,
  PuenteRueda
} from '../assets/assets';

const swiperStyle = {
  width: '100%',
  height: '400px'
};

const Slider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    slideImagen1,
    slideImagen2,
    slideImagen3,
    slideImagen4,
    // slideImagen5,
    // slideImagen6,
    aeropuerto1,
    aeropuerto2,
    aeropuerto3,
    aeropuerto4,
    angostura1,
    angostura2,
    angostura3,
    angostura4,
    dique1,
    dique2,
    dique3,
    dique4,
    mapa1,
    // mapa2,
    // mapa3,
    // mapa4,
    molo1,
    molo2,
    molo3,
    molo4,
    Puenteb1,
    Puenteb2,
    Puenteb3,
    Puenteb4,
    Puenteb5,
    Puenteb6,
    PuenteRueda
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-content')) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* QuickView Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            {/* Botón de cierre */}
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              loop={true}
              initialSlide={selectedIndex}
              style={{ width: '100%', height: '100%' }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img loading="lazy" src={image} alt={`Zoomed ${index}`} className="modal-image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Slider Content */}
      <div className="knowSomeButtonContainer">
        <span className="knowSomeButton">
          <img src={arrowDown} alt="arrow Down" className="arrowDownImage" />
          Conoce aqui algunos de ellos.
        </span>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1
          },
          1440: {
            slidesPerView: 3,
            slidesPerGroup: 1
          },
          1920: {
            slidesPerView: 4,
            slidesPerGroup: 1
          },
          1980: {
            slidesPerView: 5,
            slidesPerGroup: 1
          },
          2560: {
            slidesPerView: 5,
            slidesPerGroup: 1
          }
        }}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        speed={500}
        style={swiperStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" onClick={() => openModal(index)}>
              <div className="triangle-topright"></div>
              <img loading="lazy" src={image} alt={`Proyectos Demac ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
