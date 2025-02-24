import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container2">
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step1ImageAlt}
              src="/localshop.png"
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text10 thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text21">Desde lo local hasta lo global</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text18">
                  Comenzamos creando software a medida para nuestro círculo cercano, ahora ayudamos a empresas de todos los sectores.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps1-container4 thq-card">
            <img
              alt={props.step3ImageAlt}
              src="/coding.png"
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text12 thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text17">Software hecho a la medida</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text13 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text20">
                  Desarrollamos aplicaciones y sitios web personalizados que impulsan tu negocio.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps1-container5 thq-card">
            <img
              alt={props.step2Alt}
              src="/colombia.png"
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text14 thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text19">El futuro digital de Colombia</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text15 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text16">
                  Llevamos tecnología de vanguardia a empresarios que buscan crecer y alcanzar nuevos objetivos.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.propTypes = {
  step2Description: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step1ImageAlt: PropTypes.string,
  step2Title: PropTypes.element,
  step3ImageAlt: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step2Alt: PropTypes.string,
  step3Description: PropTypes.element,
  step3ImageSrc: PropTypes.string,
  step1Title: PropTypes.element,
}

export default Steps1
