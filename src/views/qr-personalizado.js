import React from 'react'
import { Helmet } from 'react-helmet'
import SparkleNavbar from '../components/SparkleNavbar'
import FloatingBackButton from '../components/FloatingBackButton'
import './qr-personalizado.css'

const QRPersonalizado = () => {
  return (
    <div className="qr-personalizado-container">
      <Helmet>
        <title>QR Personalizado - Forja de Código</title>
        <meta name="description" content="Diseñamos códigos QR únicos con tu logo, colores y estilo personalizado para destacar tu marca." />
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
      
      <div className="qr-personalizado-hero">
        <h1 className="glow-title-blue-green">QR Personalizado</h1>
        <p className="qr-personalizado-subtitle">
          Diseñamos códigos QR únicos con tu logo, colores y estilo personalizado para destacar tu marca.
        </p>
      </div>

      <div className="qr-personalizado-content">
        <div className="qr-personalizado-section">
          <h2>¿Qué incluye nuestro servicio de QR Personalizado?</h2>
          <ul>
            <li>Diseño personalizado con tu logo y colores corporativos</li>
            <li>Múltiples formatos de descarga (PNG, SVG, PDF)</li>
            <li>Diferentes tamaños para diversos usos</li>
            <li>Análisis de escaneos y estadísticas</li>
            <li>QR dinámicos que puedes actualizar sin cambiar el código</li>
            <li>Integración con redes sociales y sitios web</li>
          </ul>
        </div>

        <div className="qr-personalizado-section">
          <h2>Casos de uso</h2>
          <div className="casos-uso-grid">
            <div className="caso-uso">
              <h3>Menús de restaurantes</h3>
              <p>QR codes para acceder a menús digitales</p>
            </div>
            <div className="caso-uso">
              <h3>Tarjetas de presentación</h3>
              <p>Conecta directamente a tu perfil profesional</p>
            </div>
            <div className="caso-uso">
              <h3>Eventos y conferencias</h3>
              <p>Acceso rápido a información del evento</p>
            </div>
            <div className="caso-uso">
              <h3>Productos y packaging</h3>
              <p>Información adicional del producto</p>
            </div>
          </div>
        </div>

        <div className="qr-personalizado-cta">
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

export default QRPersonalizado
