import React from 'react'
import { Helmet } from 'react-helmet'
import SparkleNavbar from '../components/SparkleNavbar'
import FloatingBackButton from '../components/FloatingBackButton'
import './software-empresarial.css'

const SoftwareEmpresarial = () => {
  return (
    <div className="software-empresarial-container">
      <Helmet>
        <title>Software Empresarial - Forja de Código</title>
        <meta name="description" content="Soluciones personalizadas que optimizan tus procesos y aumentan la eficiencia de tu negocio." />
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
      
      <div className="software-empresarial-hero">
        <h1 className="glow-title-blue-green">Software Empresarial</h1>
        <p className="software-empresarial-subtitle">
          Soluciones personalizadas que optimizan tus procesos y aumentan la eficiencia de tu negocio.
        </p>
      </div>

      <div className="software-empresarial-content">
        <div className="software-empresarial-section">
          <h2>¿Qué incluye nuestro servicio de Software Empresarial?</h2>
          <ul>
            <li>Sistemas de gestión empresarial (ERP)</li>
            <li>Software de gestión de clientes (CRM)</li>
            <li>Sistemas de inventario y almacén</li>
            <li>Plataformas de e-commerce personalizadas</li>
            <li>Sistemas de reportes y análisis</li>
            <li>Integración con sistemas existentes</li>
          </ul>
        </div>

        <div className="software-empresarial-section">
          <h2>Beneficios para tu empresa</h2>
          <div className="beneficios-grid">
            <div className="beneficio">
              <h3>Automatización</h3>
              <p>Reduce tareas manuales y aumenta la productividad</p>
            </div>
            <div className="beneficio">
              <h3>Escalabilidad</h3>
              <p>Crece con tu negocio sin limitaciones</p>
            </div>
            <div className="beneficio">
              <h3>Personalización</h3>
              <p>Adaptado específicamente a tus necesidades</p>
            </div>
            <div className="beneficio">
              <h3>ROI</h3>
              <p>Retorno de inversión medible y rápido</p>
            </div>
          </div>
        </div>

        <div className="software-empresarial-cta">
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

export default SoftwareEmpresarial
