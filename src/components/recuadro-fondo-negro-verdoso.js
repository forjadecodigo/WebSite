import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import BotonConResplandor from './boton-con-resplandor'
import './recuadro-fondo-negro-verdoso.css'

const RecuadroFondoNegroVerdoso = (props) => {
  const history = useHistory();

  const handleContactClick = () => {
    history.push('/contactanos');
  };

  return (
    <div
      className={`recuadro-fondo-negro-verdoso-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-section-max-width">
        <div className="recuadro-fondo-negro-verdoso-accent2-bg">
          <div className="recuadro-fondo-negro-verdoso-accent1-bg">
            <div className="recuadro-fondo-negro-verdoso-container2">
              <div className="recuadro-fondo-negro-verdoso-content">
                <span className="recuadro-fondo-negro-verdoso-text1 thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="recuadro-fondo-negro-verdoso-text4">
                         Tu idea merece algo único.
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="recuadro-fondo-negro-verdoso-text2 thq-body-large">
                  {props.content1 ?? (
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

RecuadroFondoNegroVerdoso.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
}

RecuadroFondoNegroVerdoso.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default RecuadroFondoNegroVerdoso
