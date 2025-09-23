import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import SparkleNavbar from '../components/SparkleNavbar'
import FloatingBackButton from '../components/FloatingBackButton'
import './servicio-nube.css'

const ServicioNube = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const applyAnchor = () => {
      const id = (location.hash && location.hash.slice(1)) || 'servicio-nube-hero'
      const el = document.getElementById(id)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, left: 0, behavior: 'auto' })
    }

    applyAnchor()
    const t = setTimeout(applyAnchor, 50)
    return () => clearTimeout(t)
  }, [location.hash])
  return (
    <div className="servicio-nube-container">
      <Helmet>
        <title>Servicio en la Nube - Forja de Código</title>
        <meta name="description" content="Implementación y gestión de soluciones cloud que garantizan alta disponibilidad y rendimiento." />
      </Helmet>
      
      <SparkleNavbar 
        items={[ 'Inicio', 'Servicios', 'Portafolio', 'Nosotros', 'Contáctanos' ]}
        color="#1543B0"
        initialIndex={1}
        onItemClick={(index) => {
          if (index === 0) {
            window.location.href = '/';
          } else if (index === 1) {
            window.location.href = '/#serviciosInicio';
          } else if (index === 2) {
            window.location.href = '/#portafolioInicio';
          } else if (index === 3) {
            window.location.href = '/#nosotrosInicio';
          } else if (index === 4) {
            window.location.href = '/contactanos';
          }
        }}
      />
      
      <div style={{ height: 76 }} />
      
      <FloatingBackButton />
      
      <div className="servicio-nube-hero" id="servicio-nube-hero" style={{ scrollMarginTop: '76px' }}>
        <h1 className="glow-title-blue-green">Servicio en la Nube</h1>
        <p className="servicio-nube-subtitle">
          Implementación y gestión de soluciones cloud que garantizan alta disponibilidad y rendimiento.
        </p>
      </div>

      <div className="servicio-nube-content">
        <div className="servicio-nube-section">
          <h2>¿Qué incluye nuestro servicio en la Nube?</h2>
          <ul>
            <li>Migración de aplicaciones a la nube</li>
            <li>Configuración de servidores cloud</li>
            <li>Gestión de bases de datos en la nube</li>
            <li>Monitoreo y mantenimiento 24/7</li>
            <li>Backup y recuperación de datos</li>
            <li>Optimización de costos cloud</li>
          </ul>
        </div>

        <div className="servicio-nube-section">
          <h2>Plataformas que manejamos</h2>
          <div className="plataformas-grid">
            <div className="plataforma">
              <h3>AWS</h3>
              <p>Amazon Web Services</p>
            </div>
            <div className="plataforma">
              <h3>Google Cloud</h3>
              <p>Google Cloud Platform</p>
            </div>
            <div className="plataforma">
              <h3>Azure</h3>
              <p>Microsoft Azure</p>
            </div>
            <div className="plataforma">
              <h3>DigitalOcean</h3>
              <p>Cloud Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="servicio-nube-cta">
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contactanos'}
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicioNube
