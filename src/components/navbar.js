import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar-container">
      <div className="navbar-links">
        <Link to="/" className={`navbar-link ${isActive('/')}`}>
          Inicio
        </Link>
        <Link to="/servicios" className={`navbar-link ${isActive('/servicios')}`}>
          Servicios
        </Link>
        <Link to="/portafolio" className={`navbar-link ${isActive('/portafolio')}`}>
          Portafolio
        </Link>
        <Link to="/nosotros" className={`navbar-link ${isActive('/nosotros')}`}>
          Nosotros
        </Link>
        <Link to="/contacto" className={`navbar-link ${isActive('/contacto')}`}>
          Contacto
        </Link>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="navbar-icon">
          <div className="navbar-line"></div>
          <div className="navbar-line"></div>
          <div className="navbar-line"></div>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={`navbar-link ${isActive('/')}`} onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/servicios" className={`navbar-link ${isActive('/servicios')}`} onClick={toggleMenu}>
          Servicios
        </Link>
        <Link to="/portafolio" className={`navbar-link ${isActive('/portafolio')}`} onClick={toggleMenu}>
          Portafolio
        </Link>
        <Link to="/nosotros" className={`navbar-link ${isActive('/nosotros')}`} onClick={toggleMenu}>
          Nosotros
        </Link>
        <Link to="/contacto" className={`navbar-link ${isActive('/contacto')}`} onClick={toggleMenu}>
          Contacto
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 