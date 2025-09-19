import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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

const App = () => {
  return (
    <Router>
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

ReactDOM.render(<App />, document.getElementById('app'))
