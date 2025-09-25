import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import './style.css'
import Inicio from './views/inicio'
import Contactanos from './views/contactanos'
import NotFound from './views/not-found'
import DesarrolloWeb from './views/desarrollo-web'
import QRPersonalizado from './views/qr-personalizado'
import SoftwareEmpresarial from './views/software-empresarial'
import ServicioNube from './views/servicio-nube'
import ConsultorioIT from './views/consultorio-it'

const ScrollManager = () => {
  const location = useLocation()

  React.useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Si no hay hash, resetea al tope; los anclajes específicos se manejan en cada vista
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location])

  return null
}

const App = () => {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
        <Route path="/qr-personalizado" element={<QRPersonalizado />} />
        <Route path="/software-empresarial" element={<SoftwareEmpresarial />} />
        <Route path="/servicio-nube" element={<ServicioNube />} />
        <Route path="/consultorio-it" element={<ConsultorioIT />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
