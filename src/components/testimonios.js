import React, { Fragment, useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import './testimonios.css'

const Testimonios = (props) => {
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
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonios-text38">Ecos del futuro que ya construimos</span>
              </Fragment>
            )}
          </h1>
          <span className="testimonios-text11 thq-body-small">
            {props.content1 ?? (
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
          <div className="testimonios-accent2-bg1 thq-animated-card-bg-2">
            <div className="testimonios-accent1-bg1 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonios-card1">
                <div className="testimonios-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonios-image1"
                  />
                  <div className="testimonios-container13">
                    <strong className="testimonios-text12 thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonios-text31">
                            Julio Lenis
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="testimonios-text13 thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonios-text39">
                            Tatuador (Raven Tatto Studios Pereira)
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonios-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonios-text35">
                        Muchas gracias Forja de código Estoy muy satisfecho con
                        el resultado de su trabajo innovador he intuitivo
                        100% recomendados
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonios-accent2-bg2 thq-animated-card-bg-2">
            <div className="testimonios-accent1-bg2 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonios-card2">
                <div className="testimonios-container14">
                  <img
                    alt={props.author2Alt}
                    src="/ganando.jpg"
                    className="testimonios-image2"
                  />
                  <div className="testimonios-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonios-text32">
                            Julio Arango
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonios-text42">Ganadero</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonios-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonios-text41">
                        Estoy muy impresionado con el nivel de profesionalismo y
                        creatividad que Forja de Código aportó al proyecto.
                        Lograron convertir nuestra visión en realidad con una
                        aplicación web eficiente y fácil de usar.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonios-accent2-bg3 thq-animated-card-bg-2">
            <div className="testimonios-accent1-bg3 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonios-card3">
                <div className="testimonios-container16">
                  <img
                    alt={props.author3Alt}
                    src="/NataliLopez.png"
                    className="testimonios-image3"
                  />
                  <div className="testimonios-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonios-text36">
                            Natalia Lopez
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonios-text30">Psicologa</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonios-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonios-text37">
                        El equipo de Forja de Código tiene una capacidad única
                        para combinar tecnología de vanguardia con un enfoque
                        centrado en el usuario. Entregaron una solución de software
                        personalizada que no solo cumplió con nuestros requisitos,
                        sino que los superó.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonios-accent2-bg4 thq-animated-card-bg-2">
            <div className="testimonios-accent1-bg4 thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonios-card4">
                <div className="testimonios-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonios-image4"
                  />
                  <div className="testimonios-container19">
                    <strong className="testimonios-text21 thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonios-text40">Juan Henao</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="testimonios-text22 thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonios-text33">
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonios-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonios-text34">
                        La experiencia con Forja de Código en el desarrollo de
                        mi videojuego ha sido excepcional. Su equipo entendió
                        perfectamente mi visión y la convirtió en realidad.
                        La jugabilidad, los gráficos y la optimización superaron
                        todas mis expectativas. Estoy muy satisfecho con el
                        resultado final.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonios.defaultProps = {
  content1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1636041282523-1add6c493ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA1MjQ2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author1Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  author2Src:
    '/imagen%20de%20whatsapp%202025-02-25%20a%20las%2016.50.28_4a5e1e9c-200h.jpg',
  author2Name: undefined,
  author4Position: undefined,
  author1Src: '/captura%20de%20pantalla%202025-04-09%20110746-200w.png',
  review4: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDA1MjQ2M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author3Name: undefined,
  review3: undefined,
  author2Alt: 'Image of Jane Smith',
  author3Alt: 'Image of Michael Johnson',
  heading1: undefined,
  author1Alt: 'Image of John Doe',
  author1Position: undefined,
  author4Name: undefined,
  review2: undefined,
  author2Position: undefined,
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
