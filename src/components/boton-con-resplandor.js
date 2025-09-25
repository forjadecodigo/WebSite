import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './boton-con-resplandor.css'

const BotonConResplandor = ({ button, rootClassName = '' }) => {
  return (
    <div className={`boton-con-resplandor-container1 ${rootClassName} `}>
      <div className="button-container">
        <button className="button glow-btn">
          <span>
            {button ?? (
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


BotonConResplandor.propTypes = {
  button: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default BotonConResplandor
