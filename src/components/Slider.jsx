import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';           
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';  
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  gallery,
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

const Slider = () => (
  <>
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
      // navigation  
      pagination={{ clickable: true }}  
      autoplay={{ 
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      speed={3000}
      style={swiperStyle}
    >
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen1} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen2} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen3} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen4} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen5} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <div className="triangle-topright"></div>
          <img src={slideImagen6} alt="Proyectos Demac" />
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);

export default Slider;
