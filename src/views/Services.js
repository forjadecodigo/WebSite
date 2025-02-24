import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './services.css'
import { FaCode, FaMobile, FaCloud, FaDesktop, FaChartLine, FaTools } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Página Web Simple',
      icon: <FaCode className="services-icon" />,
      description: 'Una solución económica, ideal para pequeños negocios.',
      features: [
        'Diseño moderno y responsive',
        'Optimización para móviles',
        'Formularios de contacto',
        'Integración con redes sociales'
      ],
      link: '/contacto?service=simple'
    },
    {
      id: 2,
      title: 'Desarrollo Web',
      icon: <FaDesktop className="services-icon" />,
      description: 'Desarrollamos aplicaciones y sitios web personalizados que impulsan tu negocio.',
      features: [
        'Desarrollo Frontend y Backend',
        'Aplicaciones Web Progresivas',
        'Optimización de rendimiento',
        'SEO y accesibilidad'
      ],
      link: '/contacto?service=web'
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      icon: <FaCloud className="services-icon" />,
      description: 'Servicios de implementación y gestión de infraestructura en la nube.',
      features: [
        'AWS, Azure, Google Cloud',
        'CI/CD Pipelines',
        'Containerización',
        'Monitoreo y seguridad'
      ],
      link: '/contacto?service=cloud'
    },
    {
      id: 4,
      title: 'Software Empresarial',
      icon: <FaDesktop className="services-icon" />,
      description: 'Soluciones de software personalizadas para empresas.',
      features: [
        'ERPs y CRMs',
        'Sistemas de gestión',
        'Integración de sistemas',
        'Migración de datos'
      ],
      link: '/contacto?service=enterprise'
    },
    {
      id: 5,
      title: 'Consultoría IT',
      icon: <FaChartLine className="services-icon" />,
      description: 'Asesoramiento experto en tecnología y transformación digital.',
      features: [
        'Arquitectura de software',
        'Optimización de procesos',
        'Estrategia digital',
        'Auditorías técnicas'
      ],
      link: '/contacto?service=other'
    },
    {
      id: 6,
      title: 'Mantenimiento',
      icon: <FaTools className="services-icon" />,
      description: 'Servicios de mantenimiento y soporte continuo.',
      features: [
        'Soporte técnico',
        'Actualizaciones',
        'Monitoreo 24/7',
        'Respuesta a incidentes'
      ],
      link: '/contacto?service=other'
    }
  ]

  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Forja de Código</title>
        <meta property="og:title" content="Services - Forja de Código" />
      </Helmet>
      <div className="services-header">
        <h1 className="services-title thq-heading-1">Nuestros Servicios</h1>
        <p className="services-description thq-body-large">
          Ofrecemos una amplia gama de servicios de desarrollo de software adaptados
          a las necesidades específicas de cada cliente. Desde aplicaciones web hasta
          soluciones empresariales completas.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="services-card">
            {service.icon}
            <h3 className="services-title">{service.title}</h3>
            <p className="services-description">{service.description}</p>
            <div className="services-features">
              {service.features.map((feature, index) => (
                <div key={index} className="services-feature">
                  <span className="services-feature-icon">•</span>
                  {feature}
                </div>
              ))}
            </div>
            <Link to={service.link} className="services-cta">
              Solicitar Servicio
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services 