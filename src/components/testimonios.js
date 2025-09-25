import React, { Fragment, useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import './testimonios.css'
import TeamCarousel from './TeamCarousel'

const Testimonios = ({ 
  content1,
  author4Src = 'https://images.unsplash.com/photo-1636041282523-1add6c493ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA1MjQ2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position,
  author1Name,
  author4Alt = 'Image of Sarah Lee',
  author2Src = '/imagen%20de%20whatsapp%202025-02-25%20a%20las%2016.50.28_4a5e1e9c-200h.jpg',
  author2Name,
  author4Position,
  author1Src = '/captura%20de%20pantalla%202025-04-09%20110746-200w.png',
  review4,
  author3Src = 'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA1MjQ2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1,
  author3Name,
  review3,
  author2Alt = 'Image of Jane Smith',
  author3Alt = 'Image of Michael Johnson',
  heading1,
  author1Alt = 'Image of John Doe',
  author1Position,
  author4Name,
  review2,
  author2Position
}) => {
  const [showYunque, setShowYunque] = useState(false);
  const testimoniosRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          const visitCount = parseInt(localStorage.getItem('testimoniosVisitCount') || '0');
          
          if (visitCount === 0 || visitCount >= 3) {
            setShowYunque(true);
            hasAnimatedRef.current = true;
            localStorage.setItem('testimoniosVisitCount', '1');
            
            setTimeout(() => {
              setShowYunque(false);
            }, 2300);
          } else {
            localStorage.setItem('testimoniosVisitCount', (visitCount + 1).toString());
          }
        }
      },
      { threshold: 0.1 }
    );

    if (testimoniosRef.current) {
      observer.observe(testimoniosRef.current);
    }

    return () => {
      if (testimoniosRef.current) {
        observer.unobserve(testimoniosRef.current);
      }
    };
  }, []);

  return (
    <div className="thq-section-padding" ref={testimoniosRef}>
      <div className="testimonios-max-width thq-section-max-width">
        {showYunque && (
          <div className="efecto-yunque-container">
            <img
              src="/hb3d3.0-700h.png"
              alt="Yunque"
              className="efecto-yunque"
            />
          </div>
        )}
        <div className="testimonios-container10">
          <h1 className="testimonios-text10 thq-heading-2 glow-title-blue-green">
            {heading1 ?? (
              <Fragment>
                <span className="testimonios-text38">Ecos del futuro que ya construimos</span>
              </Fragment>
            )}
          </h1>
          <span className="testimonios-text11 thq-body-small">
            {content1 ?? (
              <Fragment>
                <span className="testimonios-text24">
                  
                  <span>
                  En Forja de Código convertimos ideas en realidades digitales. Así nos cuentan nuestros clientes cómo ha sido dar forma a su visión con nosotros.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <TeamCarousel
            title="TESTIMONIOS"
            titleColor="rgba(0, 170, 255, 1)"
            infoTextColor="#E6F3FF"
            showArrows
            showDots
            visibleCards={2}
            sideCardScale={0.85}
            sideCardOpacity={0.7}
            infoPosition="bottom"
            cardWidth={300}
            cardHeight={350}
            members={[
              {
                id: 't1',
                name: (author1Name ? '' : 'Julio Lenis') || undefined,
                role: (author1Position ? '' : 'Tatuador (Raven Tatto Studios Pereira)') || undefined,
                image: author1Src,
                bio: (review1 ? '' : '“Muchas gracias Forja de código... 100% recomendados.”') || undefined,
              },
              {
                id: 't2',
                name: (author2Name ? '' : 'Julio Arango') || undefined,
                role: (author2Position ? '' : 'Ganadero') || undefined,
                image: '/ganando.jpg',
                bio: (review2 ? '' : '“Estoy muy impresionado con el nivel de profesionalismo...”') || undefined,
              },
              {
                id: 't3',
                name: (author3Name ? '' : 'Natalia Lopez') || undefined,
                role: (author3Position ? '' : 'Psicologa') || undefined,
                image: '/NataliLopez.png',
                bio: (review3 ? '' : '“El equipo de Forja de Código tiene una capacidad única...”') || undefined,
              },
              {
                id: 't4',
                name: (author4Name ? '' : 'Juan Henao') || undefined,
                role: (author4Position ? '' : 'Desarrollador de Videojuegos') || undefined,
                image: author4Src,
                bio: (review4 ? '' : '“La experiencia con Forja de Código en el desarrollo de mi videojuego ha sido excepcional.”') || undefined,
              },
              {
                id: 't5',
                name: 'Blanca Ofir Rodriguez',
                role: 'Propietaria Spa Blanca',
                image: '/blanca.jpg',
                bio: 'Una excelente experiencia, brindando un servicio espectacular dando valor humano y una calidad genial.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}


Testimonios.propTypes = {
  content1: PropTypes.element,
  author4Src: PropTypes.string,
  author3Position: PropTypes.element,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author1Src: PropTypes.string,
  review4: PropTypes.element,
  author3Src: PropTypes.string,
  review1: PropTypes.element,
  author3Name: PropTypes.element,
  review3: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author4Name: PropTypes.element,
  review2: PropTypes.element,
  author2Position: PropTypes.element,
}

export default Testimonios
