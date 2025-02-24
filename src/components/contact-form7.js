import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      const selectElement = document.getElementById('contact-form-7-options');
      if (selectElement) {
        switch(service) {
          case 'simple':
            selectElement.value = 'web-simple';
            break;
          case 'web':
            selectElement.value = 'web';
            break;
          case 'cloud':
            selectElement.value = 'cloud';
            break;
          case 'enterprise':
            selectElement.value = 'enterprise';
            break;
          case 'other':
            selectElement.value = 'other';
            break;
          default:
            break;
        }
      }
    }
  }, [location]);

  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-section-max-width">
        <div className="contact-form7-section-title">
          <h2 className="contact-form7-text11 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="contact-form7-text20">Contacto</span>
              </Fragment>
            )}
          </h2>
          <span className="contact-form7-text12 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="contact-form7-text22">
                  Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y te responderemos lo antes posible.
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form7-content2">
            <div className="contact-form7-row1">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon1 thq-icon-small"
              >
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="contact-form7-email thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form7-text19">forjadecodigo@gmail.com</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-row2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon3 thq-icon-small"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="contact-form7-phone thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form7-text23">+57 314 159 2653</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-row3">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form7-icon5 thq-icon-small"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <span className="contact-form7-address thq-body-small">
                {props.address ?? (
                  <Fragment>
                    <span className="contact-form7-text21">Pereira, Colombia</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form7-form">
          <div className="contact-form7-container1">
            <div className="contact-form7-input1">
              <label
                htmlFor="contact-form-7-first-name"
                className="contact-form7-text13 thq-body-small"
              >
                Nombre (opcional)
              </label>
              <input
                type="text"
                id="contact-form-7-first-name"
                placeholder="Tu nombre"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input2">
              <label
                htmlFor="contact-form-7-email"
                className="contact-form7-text14 thq-body-small"
              >
                Email *
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required
                placeholder="tu@email.com"
                className="thq-input"
              />
            </div>
            <div className="contact-form7-input3">
              <label
                htmlFor="contact-form-7-phone"
                className="contact-form7-text15 thq-body-small"
              >
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                id="contact-form-7-phone"
                placeholder="+57 300 000 0000"
                className="thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container3">
            <div className="contact-form7-input4">
              <label
                htmlFor="contact-form-7-options"
                className="contact-form7-text16 thq-body-small"
              >
                ¿Qué tipo de proyecto necesitas? *
              </label>
              <select
                id="contact-form-7-options"
                required
                className="thq-select"
              >
                <option value="">Selecciona una opción</option>
                <option value="web-simple">Sitio Web Simple</option>
                <option value="web">Desarrollo Web Personalizado</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="enterprise">Software Empresarial</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>
          <div className="contact-form7-container4">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-message"
                className="contact-form7-text17 thq-body-small"
              >
                Cuéntanos más sobre tu proyecto *
              </label>
              <textarea
                id="contact-form-7-message"
                required
                rows="4"
                placeholder="Describe tu proyecto, objetivos y cualquier detalle importante..."
                className="thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form7-checkbox1">
            <input
              type="checkbox"
              id="contact-form-7-check"
              required
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-7-check"
              className="contact-form7-text18 thq-body-small"
            >
              Acepto los términos y condiciones de Forja de Código
            </label>
          </div>
          <button
            type="submit"
            className="thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span>Enviar Mensaje</span>
                </Fragment>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

ContactForm7.defaultProps = {
  email: undefined,
  heading1: undefined,
  address: undefined,
  content1: undefined,
  phone: undefined,
  action: undefined,
}

ContactForm7.propTypes = {
  email: PropTypes.element,
  heading1: PropTypes.element,
  address: PropTypes.element,
  content1: PropTypes.element,
  phone: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm7
