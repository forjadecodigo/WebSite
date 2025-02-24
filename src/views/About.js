import React from 'react'
import { Helmet } from 'react-helmet'
import './about.css'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const About = () => {
  const founders = [
    {
      id: 1,
      name: 'Oscar Bernal',
      role: 'Co-fundador & CTO',
      image: '/path/to/oscar.jpg',
      description: 'Ingeniero de software con más de 8 años de experiencia en desarrollo web y móvil. Especialista en arquitectura de software y soluciones escalables.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Daniel Hasbon',
      role: 'Co-fundador & CEO',
      image: '/path/to/daniel.jpg',
      description: 'Experto en gestión de proyectos tecnológicos y desarrollo de negocios. Apasionado por la innovación y las soluciones tecnológicas.',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ]

  return (
    <div className="about-container">
      <Helmet>
        <title>About - Forja de Código</title>
        <meta property="og:title" content="About - Forja de Código" />
      </Helmet>
      <div className="about-header">
        <h1 className="about-title thq-heading-1">Sobre Nosotros</h1>
        <p className="about-description thq-body-large">
          En Forja de Código, somos un equipo apasionado de desarrolladores y diseñadores
          comprometidos con la excelencia en el desarrollo de software. Nuestra misión es
          transformar ideas innovadoras en soluciones digitales efectivas que impulsen
          el éxito de nuestros clientes.
        </p>
      </div>
      <div className="about-company">
        <div className="about-founders">
          {founders.map((founder) => (
            <div key={founder.id} className="about-founder-card">
              <img
                src={founder.image}
                alt={founder.name}
                className="about-founder-image"
              />
              <h3 className="about-founder-name">{founder.name}</h3>
              <p className="about-founder-role">{founder.role}</p>
              <p className="about-founder-description">{founder.description}</p>
              <div className="about-social-links">
                <a href={founder.social.linkedin} className="about-social-link">
                  <FaLinkedin />
                </a>
                <a href={founder.social.github} className="about-social-link">
                  <FaGithub />
                </a>
                <a href={founder.social.twitter} className="about-social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About 