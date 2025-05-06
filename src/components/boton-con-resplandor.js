import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './boton-con-resplandor.css'

const BotonConResplandor = (props) => {
  return (
    <div className={`boton-con-resplandor-container1 ${props.rootClassName} `}>
      <div className="button-container">
        <button className="button glow-btn">
          <span>
            {props.button ?? (
              <Fragment>
                <span className="boton-con-resplandor-text2 Botones">
                  Botón con Resplandor
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

BotonConResplandor.defaultProps = {
  button: undefined,
  rootClassName: '',
}

BotonConResplandor.propTypes = {
  button: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default BotonConResplandor
