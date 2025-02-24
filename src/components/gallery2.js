import React from 'react'
import PropTypes from 'prop-types'
import ProjectCarousel from './ProjectCarousel'
import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div className={`gallery2-gallery3 thq-section-padding ${props.rootClassName} `}>
      <div className="gallery2-max-width thq-section-max-width">
        <ProjectCarousel />
      </div>
    </div>
  )
}

Gallery2.defaultProps = {
  rootClassName: '',
}

Gallery2.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery2
