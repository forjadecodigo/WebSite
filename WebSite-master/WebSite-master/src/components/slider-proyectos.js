import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { proyectos } from '../data/proyectos'
import './slider-proyectos.css'

const SliderProyectos = (props) => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    const proyecto = proyectos[`proyecto${projectId}`];
    
    // Guardar en localStorage
    localStorage.setItem('selectedProject', JSON.stringify({
      id: projectId,
      titulo: proyecto.titulo,
      descripcion: proyecto.descripcion,
      tecnologias: proyecto.tecnologias,
      imagen: proyecto.imagen
    }));
    
    // Navegar a la página principal y hacer scroll a portafolioInicio
    navigate('/', { 
      state: { 
        selectedProject: projectId,
        projectImage: proyecto.imagen,
        scrollTo: 'portafolioInicio'
      } 
    });
  };

  return (
    <div className={`slider-proyectos-gallery3 thq-section-padding ${props.rootClassName} `}>
      <div className="slider-proyectos-max-width thq-section-max-width">
        <div className="slider-proyectos-section-title">
          <h2 className="slider-proyectos-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="slider-proyectos-text4">Nuestros Proyectos</span>
              </Fragment>
            )}
          </h2>
          <span className="slider-proyectos-text2">
            {props.content1 ?? (
              <Fragment>
                <span className="slider-proyectos-text3">
                  Software y web hechos a la medida de nuestros clientes
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="slider-proyectos-container">
          <div className="slider-proyectos-content">
            {Object.entries(proyectos).map(([id, proyecto]) => (
              <div 
                key={id}
                className="proyecto-card"
                onClick={() => handleProjectClick(proyecto.id)}
                data-description={proyecto.descripcion}
                data-titulo={proyecto.titulo}
                data-tecnologias={JSON.stringify(proyecto.tecnologias)}
              >
                <img
                  alt={proyecto.titulo}
                  src={proyecto.imagen}
                  className={`slider-proyectos-image${proyecto.id}`}
                />
                <div className="proyecto-overlay">
                  <h3>{proyecto.titulo}</h3>
                  <p>Ver detalles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

SliderProyectos.defaultProps = {
  rootClassName: '',
  content1: undefined,
  heading1: undefined,
}

SliderProyectos.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default SliderProyectos
