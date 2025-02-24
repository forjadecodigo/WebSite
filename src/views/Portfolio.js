import React from 'react'
import Header from '../components/header'
import './portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
      image: '/path/to/project1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Sistema de Gestión',
      description: 'Sistema integral para la gestión de recursos empresariales y seguimiento de proyectos.',
      image: '/path/to/project2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'App Móvil',
      description: 'Aplicación móvil multiplataforma para servicios de delivery y seguimiento en tiempo real.',
      image: '/path/to/project3.jpg',
      link: '#'
    }
  ]

  return (
    <div className="portfolio-container">
      <Header />
      <div className="portfolio-content">
        <div className="portfolio-header">
          <h2 className="portfolio-title">Nuestro Portafolio</h2>
          <p className="portfolio-description">
            Descubre algunos de nuestros proyectos más destacados. Cada proyecto refleja nuestro compromiso
            con la calidad y la innovación en el desarrollo de software.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-project-card">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-project-image"
              />
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-project-description">{project.description}</p>
              <a href={project.link} className="portfolio-project-link">
                Ver más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio 