import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos2.css'

const Logos2 = (props) => {
  return (
    <div className="logos2-container1 thq-section-padding">
      <div className="logos2-max-width thq-section-max-width">
        <h2 className="logos2-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="logos2-text2">
                Trusted by the world&apos;s best companies social proof to build
                credibility
              </span>
            </Fragment>
          )}
        </h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos2-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos2-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos2-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos2-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos2-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos2.defaultProps = {
  logo5Alt: 'Logo5',
  heading1: undefined,
  logo1Alt: 'Logo1',
  logo4Alt: 'Logo4',
  logo1Src: '/placeholder.png',
  logo2Alt: 'Logo2',
  logo4Src: '/placeholder.png',
  logo3Src: '/placeholder.png',
  logo3Alt: 'Logo3',
  logo2Src: '/placeholder.png',
  logo5Src: '/placeholder.png',
}

Logos2.propTypes = {
  logo5Alt: PropTypes.string,
  heading1: PropTypes.element,
  logo1Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo5Src: PropTypes.string,
}

export default Logos2
