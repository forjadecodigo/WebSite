import { Link } from 'react-router-dom';
import '../styles/App.css';

const NotFound = () => {
  return (
    <div className="app-container">
      <div className="content">
        <h1 className="title">404</h1>
        <p className="subtitle" style={{ maxWidth: '600px', margin: '2rem auto' }}>
          ¡El herrero de código sigue buscando el martillo que se le perdió!
        </p>
        <Link 
          to="/" 
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#000000',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 700,
            transition: 'transform 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Volver a la Forja
        </Link>
      </div>
    </div>
  );
};

export default NotFound;