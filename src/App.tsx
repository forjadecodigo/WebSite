import './App.css'
import logo from './assets/logo.png'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'

function MainContent() {
  return (
    <div className="app-container">
      <div className="content">
        <img 
          src={logo} 
          alt="Forja de Código" 
          className="logo"
        />
        <h1 className="title">FORJA DE CÓDIGO</h1>
        <p className="subtitle">Próximamente</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
