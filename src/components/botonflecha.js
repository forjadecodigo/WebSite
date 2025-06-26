import React from 'react';
import './botonflecha.css';

const BotonFlecha = ({ direction = 'left', onClick }) => {
  return (
    <button className="button-3d" onClick={onClick} aria-label={direction === 'left' ? 'Flecha izquierda' : 'Flecha derecha'}>
      <div className="button-top">
        <span className="material-icons" style={{fontSize: '2rem'}}>{direction === 'left' ? '❮' : '❯'}</span>
      </div>
      <div className="button-bottom"></div>
      <div className="button-base"></div>
    </button>
  );
};

export default BotonFlecha; 