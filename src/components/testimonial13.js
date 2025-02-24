import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial13-text19">User Reviews</span>
              </Fragment>
            )}
          </h2>
          <p className="testimonial13-subtitle thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial13-text22">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text10 thq-body-large">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial13-text21">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.&quot;
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text11 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial13-text16">Author Name</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial13-text18">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company1LogoAlt}
                src={props.company1LogoSrc}
                className="testimonial13-logo1"
              />
            </div>
          </div>
          <div className="testimonial13-content2 thq-flex-column">
            <div className="testimonial13-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text13 thq-body-large">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial13-text17">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat.&quot;
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image2 thq-img-round"
              />
              <div className="testimonial13-avatar-content2">
                <span className="testimonial13-text14 thq-body-small">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial13-text20">Author Name</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial13-text23">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.company2LogoAlt}
                src={props.company2LogoSrc}
                className="testimonial13-logo2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  author1Name: undefined,
  review2: undefined,
  author2Alt: 'Author Avatar',
  company1LogoSrc: '/placeholder.png',
  company2LogoAlt: 'Company Logo',
  author1Position: undefined,
  author1Alt: 'Author Avatar',
  heading1: undefined,
  company1LogoAlt: 'Company Logo',
  author2Name: undefined,
  review1: undefined,
  author2Src: '/placeholder.png',
  content1: undefined,
  author1Src: '/placeholder.png',
  company2LogoSrc: '/placeholder.png',
  author2Position: undefined,
}

Testimonial13.propTypes = {
  author1Name: PropTypes.element,
  review2: PropTypes.element,
  author2Alt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author1Position: PropTypes.element,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  company1LogoAlt: PropTypes.string,
  author2Name: PropTypes.element,
  review1: PropTypes.element,
  author2Src: PropTypes.string,
  content1: PropTypes.element,
  author1Src: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial13
