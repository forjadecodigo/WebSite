import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import PropTypes from 'prop-types'
import { useProjects } from '../hooks/useProjects'
import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'
import './slider-animado.css'

const SliderAnimado = (props) => {
  const navigate = useNavigate();
  const { projects, loading, error } = useProjects();
  // Referencia a la instancia de Swiper
  const swiperRef = useRef(null);

  // Valores originales de velocidad y dirección
  const ORIGINAL_SPEED = 10000;
  const [autoplaySpeed, setAutoplaySpeed] = useState(ORIGINAL_SPEED);
  const [autoplayReverse, setAutoplayReverse] = useState(false);
  const [lastDirection, setLastDirection] = useState(null);
  const [directionClicks, setDirectionClicks] = useState(0);

  // Función para manejar el click en los botones de navegación
  const handleNavClick = (direction) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (direction === 'right') {
        setAutoplayReverse(false);
        swiper.params.autoplay.reverseDirection = false;
        swiper.slideNext(); // Avanza un slide a la derecha inmediatamente
      } else {
        setAutoplayReverse(true);
        swiper.params.autoplay.reverseDirection = true;
        swiper.slidePrev(); // Avanza un slide a la izquierda inmediatamente
      }
      // Duplicar velocidad si se presiona dos veces la misma dirección
      if (lastDirection === direction) {
        setDirectionClicks(prev => prev + 1);
        setAutoplaySpeed(prev => prev / 2);
        swiper.params.speed = autoplaySpeed / 2;
      } else {
        setDirectionClicks(1);
        setAutoplaySpeed(ORIGINAL_SPEED);
        swiper.params.speed = ORIGINAL_SPEED;
      }
      setLastDirection(direction);
      swiper.autoplay.start();
    }
  };

  // Restaurar valores originales al salir el mouse del carrusel
  const handleMouseLeave = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setAutoplaySpeed(ORIGINAL_SPEED);
      setAutoplayReverse(false);
      setLastDirection(null);
      setDirectionClicks(0);
      swiper.params.autoplay.reverseDirection = false;
      swiper.params.speed = ORIGINAL_SPEED;
      swiper.autoplay.start();
    }
  };

  // Función para manejar el click en un proyecto
  const handleProjectClick = (project) => {
    navigate('/', { 
      state: { 
        selectedProject: project._id, 
        scrollTo: 'portafolioInicio' 
      } 
    });
  };

  if (loading) {
    return (
      <div className={`slider-animado-container10 ${props.rootClassName}`}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <Trefoil size="50" stroke="4" stroke-length="0.15" bg-opacity="0.1" speed="1.4" color="white" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`slider-animado-container10 ${props.rootClassName}`}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
          <p style={{ color: 'white', textAlign: 'center' }}>
            Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`slider-animado-container10 ${props.rootClassName}`}
      onMouseLeave={handleMouseLeave} // Restaurar valores al salir el mouse
    >
      <Swiper
        ref={swiperRef} // Referencia a Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={3}
        speed={autoplaySpeed} // Velocidad controlada por estado
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: autoplayReverse, // Dirección controlada por estado
        }}
        loop={true}
        className="slider-animado-cont-slider"
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 0.5 },
          480: { slidesPerView: 3, spaceBetween: 8 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          991: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {/* Slides de proyectos */}
        {projects.map((proyecto) => (
          <SwiperSlide key={proyecto._id}>
            <button 
              className="slider-animado-item"
              onClick={() => handleProjectClick(proyecto)}
              data-project-id={proyecto._id}
            >
              <div className="proyecto-imagen-container">
                <img
                  alt={proyecto.title}
                  src={proyecto.image || '/proyecto1.jpg'}
                  className={`slider-animado-image${proyecto._id}`}
                />
              </div>
              <div className="slide-overlay">
                <h3>
                  <span className="slider-animado-text">
                    {proyecto.title}
                  </span>
                </h3>
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

SliderAnimado.propTypes = {
  rootClassName: PropTypes.string,
}

export default SliderAnimado;