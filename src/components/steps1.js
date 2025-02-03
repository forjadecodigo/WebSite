import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container4">
          <div className="steps1-container5 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text12 thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text21">Discover</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text13 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text18">
                    Explore our wide range of products and services.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps1-container6 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text14 thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text17">Order</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text15 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text20">
                    Place your order easily and securely through our platform.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2 className="steps1-text10 thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text19">Choose</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text16">
                    Select the products or services that best fit your needs.
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

Steps1.defaultProps = {
  step2Description: undefined,
  step1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3Title: undefined,
  step1Description: undefined,
  step1ImageAlt: 'Discover Image',
  step2Title: undefined,
  step3ImageAlt: 'Order Image',
  step2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step2Alt: 'Choose Image',
  step3Description: undefined,
  step3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step1Title: undefined,
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
