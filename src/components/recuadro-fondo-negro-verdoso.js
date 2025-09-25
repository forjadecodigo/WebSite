import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import BotonConResplandor from './boton-con-resplandor'
import './recuadro-fondo-negro-verdoso.css'

const RecuadroFondoNegroVerdoso = ({ heading1, content1, rootClassName = '' }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactanos');
    // Scroll suave al inicio de la página después de navegar
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      className={`recuadro-fondo-negro-verdoso-container1 thq-section-padding ${rootClassName} `}
    >
      <div className="thq-section-max-width">
        <div className="recuadro-fondo-negro-verdoso-accent2-bg">
          <div className="recuadro-fondo-negro-verdoso-accent1-bg">
            <div className="recuadro-fondo-negro-verdoso-container2">
              <div className="recuadro-fondo-negro-verdoso-content">
                <span className="recuadro-fondo-negro-verdoso-text1 thq-heading-2">
                  {heading1 ? (
                    typeof heading1 === 'string' ? (
                      <span className="recuadro-fondo-negro-verdoso-text4">
                        {heading1}
                      </span>
                    ) : heading1
                  ) : (
                    <Fragment>
                      <span className="recuadro-fondo-negro-verdoso-text4">
                         Tu idea merece algo único.
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="recuadro-fondo-negro-verdoso-text2 thq-body-large">
                  {content1 ? (
                    typeof content1 === 'string' ? (
                      <span className="recuadro-fondo-negro-verdoso-text5">
                        {content1}
                      </span>
                    ) : content1
                  ) : (
                    <Fragment>
                      <span className="recuadro-fondo-negro-verdoso-text5">
                        Escríbenos y veamos cómo podemos transformarla en una
                        solución de software o web que realmente funcione para
                        ti.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="recuadro-fondo-negro-verdoso-actions">
                <BotonConResplandor
                  button={
                    <Fragment>
                      <span className="recuadro-fondo-negro-verdoso-text3 Botones" onClick={handleContactClick}>
                        Contáctanos
                      </span>
                    </Fragment>
                  }
                  rootClassName="boton-con-resplandorroot-class-name2"
                ></BotonConResplandor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


RecuadroFondoNegroVerdoso.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default RecuadroFondoNegroVerdoso
