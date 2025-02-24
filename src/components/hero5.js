import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <div className="hero5-header19 thq-section-padding">
      <div className="hero5-max-width thq-section-max-width thq-flex-row">
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="hero5-video"
        ></video>
        <div className="hero5-column">
          <div className="hero5-content">
            <h3 className="hero5-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero5-text6">Welcome to our website</span>
                </Fragment>
              )}
            </h3>
            <p className="hero5-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero5-text4">
                    Discover the best products and services for your needs.
                  </span>
                </Fragment>
              )}
            </p>
            <Link to="/contacto" className="hero5-button thq-button-filled">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero5-text5">Get started</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero5.defaultProps = {
  content1: undefined,
  action1: undefined,
  heading1: undefined,
  video1Poster: '/placeholder.png',
  video1Src: '',
}

Hero5.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  heading1: PropTypes.element,
  video1Poster: PropTypes.string,
  video1Src: PropTypes.string,
}

export default Hero5
