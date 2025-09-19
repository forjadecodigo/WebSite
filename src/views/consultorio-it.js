import React from 'react'
import { Helmet } from 'react-helmet'
import SparkleNavbar from '../components/SparkleNavbar'
import FloatingBackButton from '../components/FloatingBackButton'
import './consultorio-it.css'

const ConsultorioIT = () => {
  return (
    <div className="consultorio-it-container">
      <Helmet>
        <title>Consultorio IT - Forja de Código</title>
        <meta name="description" content="Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas para tu empresa." />
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
      
      <div className="consultorio-it-hero">
        <h1 className="glow-title-blue-green">Consultorio IT</h1>
        <p className="consultorio-it-subtitle">
          Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas para tu empresa.
        </p>
      </div>

      <div className="consultorio-it-content">
        <div className="consultorio-it-section">
          <h2>¿Qué incluye nuestro Consultorio IT?</h2>
          <ul>
            <li>Auditoría tecnológica de tu empresa</li>
            <li>Estrategia de transformación digital</li>
            <li>Selección de tecnologías adecuadas</li>
            <li>Análisis de costos y ROI</li>
            <li>Plan de migración tecnológica</li>
            <li>Capacitación del equipo técnico</li>
          </ul>
        </div>

        <div className="consultorio-it-section">
          <h2>Áreas de especialización</h2>
          <div className="areas-grid">
            <div className="area">
              <h3>Arquitectura de Software</h3>
              <p>Diseño de sistemas escalables y mantenibles</p>
            </div>
            <div className="area">
              <h3>Seguridad Informática</h3>
              <p>Protección de datos y sistemas</p>
            </div>
            <div className="area">
              <h3>DevOps</h3>
              <p>Automatización de procesos de desarrollo</p>
            </div>
            <div className="area">
              <h3>Cloud Computing</h3>
              <p>Estrategias de migración y optimización</p>
            </div>
          </div>
        </div>

        <div className="consultorio-it-cta">
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

export default ConsultorioIT
