import React, { Fragment, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu.css'

const Menu = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      history.push({
        pathname: '/',
        state: { scrollTo: sectionId }
      });
    } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`menu-container1 ${props.rootClassName}`}>
      <div className="menu-logo button-container">
        <Link to="/" className="menu-navlink1 button glow-btn">
          <span className="menu-text10">
            {props.button ?? (
              <Fragment>
                <span className="menu-text21 Botones">
                  Botón con Resplandor
                </span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
      <div className="menu-sub-menu">
        <div className="botonInicio button-container">
          <button onClick={() => scrollToSection('inicio-seccion1')} className="button glow-btn">
            <span className="Botones">
              {props.button4 ?? (
                <Fragment>
                  Inicio
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="botonServicios button-container">
          <button onClick={() => scrollToSection('serviciosInicio')} className="button glow-btn">
            <span className="Botones">
              {props.button3 ?? (
                <Fragment>
                  Servicios
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="botonPortafolio button-container">
          <button onClick={() => scrollToSection('portafolioInicio')} className="button glow-btn">
            <span className="Botones">
              {props.button2 ?? (
                <Fragment>
                  Portafolio
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="botonNosotros button-container">
          <button onClick={() => scrollToSection('nosotrosInicio')} className="button glow-btn">
            <span className="Botones">
              {props.button1 ?? (
                <Fragment>
                  Nosotros
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="menu-contactanos button-container">
        <Link to="/contactanos" className="button glow-btn">
          <span className="Botones">
            {props.button11 ?? (
              <Fragment>
                ¡Tú idea aquí!
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Menu.defaultProps = {
  button2: undefined,
  rootClassName: '',
  button11: undefined,
  button1: undefined,
  button3: undefined,
  button4: undefined,
  button: undefined,
}

Menu.propTypes = {
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
  button11: PropTypes.element,
  button1: PropTypes.element,
  button3: PropTypes.element,
  button4: PropTypes.element,
  button: PropTypes.element,
}

export default Menu
