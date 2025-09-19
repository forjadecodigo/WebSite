import React from 'react'
import { Helmet } from 'react-helmet'
import SparkleNavbar from '../components/SparkleNavbar'
import FloatingBackButton from '../components/FloatingBackButton'
import './desarrollo-web.css'

const DesarrolloWeb = () => {
  return (
    <div className="desarrollo-web-container">
      <Helmet>
        <title>Desarrollo Web - Forja de Código</title>
        <meta name="description" content="Creamos sitios web modernos y responsivos que destacan tu marca y mejoran la experiencia de tus usuarios." />
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
      
      <div className="desarrollo-web-hero">
        <h1 className="glow-title-blue-green">Desarrollo Web</h1>
        <p className="desarrollo-web-subtitle">
          Creamos sitios web modernos y responsivos que destacan tu marca y mejoran la experiencia de tus usuarios.
        </p>
      </div>

      <div className="desarrollo-web-content">
        <div className="desarrollo-web-section">
          <h2>¿Qué incluye nuestro servicio de Desarrollo Web?</h2>
          <ul>
            <li>Diseño responsivo que se adapta a todos los dispositivos</li>
            <li>Optimización para motores de búsqueda (SEO)</li>
            <li>Interfaz de usuario intuitiva y atractiva</li>
            <li>Velocidad de carga optimizada</li>
            <li>Integración con redes sociales</li>
            <li>Panel de administración fácil de usar</li>
          </ul>
        </div>

        <div className="desarrollo-web-section">
          <h2>Tecnologías que utilizamos</h2>
          <div className="tecnologias-grid">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Vue.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">JavaScript</span>
          </div>
        </div>

        <div className="desarrollo-web-cta">
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

export default DesarrolloWeb
