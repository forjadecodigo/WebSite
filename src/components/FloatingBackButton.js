import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingBackButton.css';

const FloatingBackButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackClick = () => {
    // Guardar la posición actual del scroll
    const currentScrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', currentScrollPosition.toString());
    
    // Navegar de vuelta a la página de inicio y luego scroll a la sección de servicios
    navigate('/');
    
    // Esperar a que la página se cargue y luego hacer scroll al contenedor de tarjetas de servicios
    setTimeout(() => {
      const cardsContainer = document.getElementById('servicios-cards-container');
      if (cardsContainer) {
        cardsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Restaurar la posición del scroll cuando se regrese a la página
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }
  }, []);

  return (
    <button 
      className={`floating-back-button ${scrollPosition > 100 ? 'visible' : ''}`}
      onClick={handleBackClick}
      title="Volver a servicios"
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Volver</span>
    </button>
  );
};

export default FloatingBackButton;
