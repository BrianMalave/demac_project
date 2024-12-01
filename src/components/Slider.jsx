import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  arrowDown,
  slideImagen1,
  slideImagen2,
  slideImagen3,
  slideImagen4,
  slideImagen5,
  slideImagen6
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
    slideImagen5,
    slideImagen6
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
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              loop={true}
              initialSlide={selectedIndex}
              style={{ width: '80%', height: '80%' }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Zoomed ${index}`} className="modal-image" />
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
            slidesPerView: 3
          }
        }}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        speed={3000}
        style={swiperStyle}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content" onClick={() => openModal(index)}>
              <div className="triangle-topright"></div>
              <img src={image} alt={`Proyectos Demac ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
