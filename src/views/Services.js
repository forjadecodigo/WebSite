import React from 'react'
import Header from '../components/header'
import './services.css'
import { FaCode, FaMobile, FaCloud, FaDesktop, FaChartLine, FaTools } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo Web',
      icon: <FaCode className="services-icon" />,
      description: 'Creamos sitios web y aplicaciones web modernas, responsivas y escalables.',
      features: [
        'Desarrollo Frontend y Backend',
        'Aplicaciones Web Progresivas (PWA)',
        'Optimización de rendimiento',
        'SEO y accesibilidad'
      ]
    },
    {
      id: 2,
      title: 'Desarrollo Móvil',
      icon: <FaMobile className="services-icon" />,
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma de alta calidad.',
      features: [
        'Apps iOS y Android',
        'Desarrollo React Native',
        'Integración con APIs',
        'Publicación en stores'
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]

  return (
    <div className="services-container">
      <Header />
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-description">
            Ofrecemos una amplia gama de servicios de desarrollo y consultoría tecnológica
            para ayudar a tu empresa a alcanzar sus objetivos digitales.
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
              <button className="services-cta">Solicitar Servicio</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services 