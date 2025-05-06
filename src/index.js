import React, { useEffect } from 'react'
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
import { initializeProyectos } from './data/proyectos'

const App = () => {
  useEffect(() => {
    console.log('Initializing app...');
    initializeProyectos();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
