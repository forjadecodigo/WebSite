import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <Link to="/" className="header-navlink">
      <div className={`header-header ${props.rootClassName} `}>
        <span className="header-text1">
          {props.text ?? (
            <Fragment>
              <span className="header-text2">
                <span>Forja</span>
                <br></br>
                <span>de</span>
                <br></br>
                <span>CÓdigo</span>
              </span>
            </Fragment>
          )}
        </span>
        <img alt="image" src="/logo-400h.png" className="header-image" />
      </div>
    </Link>
  )
}

Header.defaultProps = {
  rootClassName: '',
  text: undefined,
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default Header
