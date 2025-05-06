import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import BotonConResplandor from './boton-con-resplandor'
import './etapas.css'

const Etapas = (props) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, translateX: 0, translateY: 0 });
  const [bombilloEncendido, setBombilloEncendido] = useState(false);
  const history = useHistory();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / centerY;
    const tiltY = (centerX - x) / centerX;
    
    // Calcular el movimiento hacia el cursor (máximo 20px)
    const translateX = (x - centerX) / centerX * 20;
    const translateY = (y - centerY) / centerY * 20;
    
    setTilt({ 
      x: tiltX * 10, 
      y: tiltY * 10,
      translateX,
      translateY
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, translateX: 0, translateY: 0 });
  };

  const handleContactClick = () => {
    history.push('/contactanos');
  };

  return (
    <div className="etapas-container1 thq-section-padding">
      <div className="etapas-max-width thq-section-max-width">
        <div className="etapas-container2 thq-grid-2">
          <div className="etapas-section-header">
            <div className="etapas-text-container">
              <h2 className="etapas-text10 thq-heading-2">
                Descubre el poder de nuestros productos
              </h2>
              <p className="etapas-text11 thq-body-large">
                <span>
                  Porque desarrollar un software no es solo escribir líneas de
                  código… es entenderte, acompañarte y construir algo que
                  realmente te sirva.
                </span>
                <br></br>
                <span>
                  Nuestro proceso está pensado para que te sientas parte del
                  proyecto desde el primer momento, con claridad en cada etapa y
                  decisiones tomadas en conjunto.
                </span>
                <br></br>
                <span>
                  Usamos metodologías ágiles para adaptarnos contigo, y mantenemos
                  una comunicación constante para que sientas que tu idea
                  evoluciona, no se pierde.
                </span>
                <br></br>
                <br></br>
                <span>
                  Con este paso a paso, no solo forjamos código: forjamos
                  confianza.
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
            <div className="etapas-actions">
              <BotonConResplandor
                button={
                  <Fragment>
                    <span className="etapas-text22 Botones" onClick={handleContactClick}>
                      Empecemos tu proyecto
                    </span>
                  </Fragment>
                }
                rootClassName="boton-con-resplandorroot-class-name4"
              ></BotonConResplandor>
            </div>
            <div
              className={`etapas-container3${bombilloEncendido ? ' bombillo-encendido' : ''}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={e => {
                handleMouseLeave();
                setBombilloEncendido(false);
              }}
              onMouseEnter={() => setBombilloEncendido(true)}
              onClick={handleContactClick}
              style={{
                transform: `perspective(1000px) 
                           rotateX(${tilt.x}deg) 
                           rotateY(${tilt.y}deg)
                           translateX(${tilt.translateX}px)
                           translateY(${tilt.translateY}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="etapas-image"
              />
            </div>
          </div>
          <div className="etapas-container4">
            <div className="etapas-container5 thq-card">
              <h2 className="etapas-text23 thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="etapas-text39"> Cuéntanos tu idea</span>
                  </Fragment>
                )}
              </h2>
              <span className="etapas-text24 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="etapas-text58">
                      Nos compartes qué necesitas: una app, un sitio web, una
                      solución personalizada… ¡lo que tengas en mente!
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="etapas-text25 thq-heading-3">01</label>
            </div>
            <div className="etapas-container6 thq-card">
              <h2 className="etapas-text26 thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="etapas-text45">
                      <span>Exploramos juntos la mejor solución</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="etapas-text27 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="etapas-text48">
                      <span>
                        Analizamos tu proyecto, te asesoramos y definimos la
                        tecnología ideal para lo que quieres lograr.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="etapas-text28 thq-heading-3">02</label>
            </div>
            <div className="etapas-container7 thq-card">
              <h2 className="etapas-text29 thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="etapas-text55">
                      <span>Te presentamos una propuesta</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="etapas-text30 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="etapas-text35">
                      <span>
                        Diseñamos una solución a medida con tiempos, costos y
                        alcance claros desde el inicio.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="etapas-text31 thq-heading-3">03</label>
            </div>
            <div className="etapas-container8 thq-card">
              <h2 className="etapas-text32 thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="etapas-text52">
                      <span>¡Manos al código!</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="etapas-text33 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="etapas-text40">
                      <span>
                        Nos ponemos a trabajar. Recibes tu proyecto funcionando,
                        con soporte, ajustes y acompañamiento según lo que
                        necesites.
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="etapas-text34 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Etapas.defaultProps = {
  step3Description: undefined,
  step1Title: undefined,
  imageSrc1: '/bombilloapp-600h.png',
  step4Description: undefined,
  step2Title: undefined,
  step2Description: undefined,
  step4Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
  imageAlt1: 'image',
}

Etapas.propTypes = {
  step3Description: PropTypes.element,
  step1Title: PropTypes.element,
  imageSrc1: PropTypes.string,
  step4Description: PropTypes.element,
  step2Title: PropTypes.element,
  step2Description: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  imageAlt1: PropTypes.string,
}

export default Etapas
