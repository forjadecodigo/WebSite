import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'
import './header.css'

const Header = () => {
  return (
    <>
      <div className="header-header">
        <Link to="/">
          <img
            alt="Logo Forja de Código"
            src="/logo.png"
            className="header-image"
          />
        </Link>
        <h1 className="header-text">Forja de Código</h1>
      </div>
      <Navbar />
    </>
  )
}

export default Header
