import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import BotonConResplandor from './boton-con-resplandor'
import './slogan-interactivo.css'

const SloganInteractivo = (props) => {
  return (
    <div className="slogan-interactivo-header78">
      <div className="slogan-interactivo-column thq-section-padding thq-section-max-width">
        <div className="slogan-interactivo-content">
          <h1 className="slogan-interactivo-text10 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="slogan-interactivo-text19">
                  Tu lo imaginas, nosotros lo forjamos.
                </span>
              </Fragment>
            )}
          </h1>
          <p className="slogan-interactivo-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="slogan-interactivo-text13">
                  <span className="slogan-interactivo-text14">
                    No hacemos software. Damos vida a ideas.
                  </span>
                  <br className="slogan-interactivo-text15"></br>
                  <span className="slogan-interactivo-text16">
                    ¿La tuya está lista?
                  </span>
                  <br className="slogan-interactivo-text17"></br>
                  <br></br>
                </span>
              </Fragment>
            )}
          </p>
          <BotonConResplandor
            button={
              <Fragment>
                <span className="slogan-interactivo-text12 Botones">
                  ¿Que sueñas hoy?
                </span>
              </Fragment>
            }
            rootClassName="boton-con-resplandorroot-class-name1"
          ></BotonConResplandor>
        </div>
      </div>
    </div>
  )
}

SloganInteractivo.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

SloganInteractivo.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default SloganInteractivo
