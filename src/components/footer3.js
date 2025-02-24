import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer className="footer3-footer4 thq-section-padding">
      <div className="footer3-credits">
        <div className="thq-divider-horizontal"></div>
        <div className="footer3-row">
          <div className="footer3-footer-links1">
            <span className="footer3-copyright1 thq-body-small">
              © 2024 Forja de Codigo
            </span>
            <span className="footer3-description thq-body-small">
              {props.privacyLink ?? (
                <Fragment>
                  <span className="footer3-text4">
                    <span>Donde la imaginación se transforma en software.</span>
                    <br></br>
                    <span>
                      Desarrollamos soluciones digitales a la medida para
                      impulsar tu negocio.
                    </span>
                    <br></br>
                    <span>Innovamos contigo, crecemos juntos.</span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="footer3-link121 thq-body-small">
              {props.termsLink ?? (
                <Fragment>
                  <span className="footer3-text2">Terminos y Condiciones</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="footer3-footer-links2">
            <span className="footer3-copyright2 thq-body-small">
              Correo: forjadecodigo@gmail.com
            </span>
            <span className="footer3-link122 thq-body-small">
              {props.termsLink1 ?? (
                <Fragment>
                  <span className="footer3-text1">
                    Telefono: +57 314 159 2653
                  </span>
                </Fragment>
              )}
            </span>
            <span className="footer3-link123 thq-body-small">
              {props.termsLink11 ?? (
                <Fragment>
                  <span className="footer3-text3">
                    Ubicación: Pereira, Colombia
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  termsLink1: undefined,
  termsLink: undefined,
  termsLink11: undefined,
  privacyLink: undefined,
}

Footer3.propTypes = {
  termsLink1: PropTypes.element,
  termsLink: PropTypes.element,
  termsLink11: PropTypes.element,
  privacyLink: PropTypes.element,
}

export default Footer3
