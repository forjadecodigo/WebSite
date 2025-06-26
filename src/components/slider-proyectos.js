import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useProjects } from '../hooks/useProjects'
import { Trefoil } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'
import './slider-proyectos.css'

const SliderProyectos = (props) => {
  const navigate = useNavigate();
  const { projects, loading, error } = useProjects();

  const handleProjectClick = (project) => {
    // Guardar en localStorage
    localStorage.setItem('selectedProject', JSON.stringify({
      id: project._id,
      titulo: project.title,
      descripcion: project.description,
      tecnologias: project.technologies,
      imagen: project.image || '/proyecto1.jpg' // fallback image
    }));
    
    // Navegar a la página principal y hacer scroll a portafolioInicio
    navigate('/', { 
      state: { 
        selectedProject: project._id,
        projectImage: project.image || '/proyecto1.jpg',
        scrollTo: 'portafolioInicio'
      } 
    });
  };

  if (loading) {
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
          </div>
          <div className="slider-proyectos-container">
            <div className="slider-proyectos-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <Trefoil size="50" stroke="4" stroke-length="0.15" bg-opacity="0.1" speed="1.4" color="white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
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
          </div>
          <div className="slider-proyectos-container">
            <div className="slider-proyectos-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
              <p style={{ color: 'white', textAlign: 'center' }}>
                Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            {projects.map((proyecto) => (
              <div 
                key={proyecto._id}
                className="proyecto-card"
                onClick={() => handleProjectClick(proyecto)}
                data-description={proyecto.description}
                data-titulo={proyecto.title}
                data-tecnologias={JSON.stringify(proyecto.technologies)}
              >
                <img
                  alt={proyecto.title}
                  src={proyecto.image || '/proyecto1.jpg'}
                  className={`slider-proyectos-image${proyecto._id}`}
                />
                <div className="proyecto-overlay">
                  <h3>{proyecto.title}</h3>
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
