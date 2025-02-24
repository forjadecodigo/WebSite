import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form7.css'

const ContactForm7 = (props) => {
  return (
    <div className="contact-form7-contact1 thq-section-padding">
      <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form7-section-title thq-flex-column Content">
          <span className="contact-form7-text10 thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form7-text24">
                  Get in touch with us today!
                </span>
              </Fragment>
            )}
          </span>
          <div className="contact-form7-content1">
            <h2 className="contact-form7-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact-form7-text20">Contact us</span>
                </Fragment>
              )}
            </h2>
            <span className="contact-form7-text12 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form7-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </span>
          </div>
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
                    <span className="contact-form7-text19">
                      hello@teleporthq.io
                    </span>
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
                    <span className="contact-form7-text23">
                      +1 (555) 000-0000
                    </span>
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
                    <span className="contact-form7-text21">
                      789 Test St, Bucharest
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <form className="contact-form7-form thq-flex-column">
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
                placeholder="Nombre"
                className="contact-form7-text-input1 thq-input"
              />
            </div>
          </div>
          <div className="contact-form7-container2">
            <div className="contact-form7-input2">
              <label
                htmlFor="contact-form-7-email"
                className="contact-form7-text14 thq-body-small"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-form-7-email"
                required="true"
                placeholder="Email"
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
                enctype="Numero de teléfono"
                disabled="Numero de telefono"
                placeholder="Número"
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
                ¿Cuál será nuestra misión?
              </label>
              <select
                id="contact-form-7-options"
                placeholder="Select one"
                className="contact-form7-select thq-select"
              >
                <option value="Option 1">Customer service</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Finance</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 3">Feature request</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>
          <div className="contact-form7-container4">
            <div className="contact-form7-input5">
              <label
                htmlFor="contact-form-7-message"
                className="contact-form7-text17 thq-body-small"
              >
                Cuéntanos en qué podemos ayudarte
              </label>
              <textarea
                id="contact-form-7-message"
                rows="3"
                placeholder="Templa tu mensaje aquí..."
                className="contact-form7-textarea thq-input"
              ></textarea>
            </div>
          </div>
          <div className="contact-form7-checkbox1">
            <input
              type="checkbox"
              id="contact-form-7-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label
              htmlFor="contact-form-7-check"
              className="contact-form7-text18 thq-body-small"
            >
              Acepto las reglas y condiciones del Gremio de Forjadores de
              Codigo.
            </label>
          </div>
          <button
            type="submit"
            className="contact-form7-button thq-button-filled"
          >
            <span className="contact-form7-action1 thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="contact-form7-text25">
                    Comenzar a Forjar
                  </span>
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
  content2: undefined,
  action: undefined,
}

ContactForm7.propTypes = {
  email: PropTypes.element,
  heading1: PropTypes.element,
  address: PropTypes.element,
  content1: PropTypes.element,
  phone: PropTypes.element,
  content2: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm7
