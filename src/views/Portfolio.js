import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import './portfolio.css';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, 'proyectos'), orderBy('fecha', 'desc'));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Forja de Código</title>
        <meta property="og:title" content="Portfolio - Forja de Código" />
      </Helmet>
      <h1 className="portfolio-title">Nuestros Proyectos</h1>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} id={project.id} className="portfolio-item">
            <div className="portfolio-image-container">
              <img 
                src={`/${project.imagen}`} 
                alt={project.titulo} 
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-content">
              <h2>{project.titulo}</h2>
              <p>{project.descripcion}</p>
              <div className="portfolio-tech">
                <h3>Tecnologías:</h3>
                <div className="tech-tags">
                  {project.tecnologias.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="portfolio-features">
                <h3>Características:</h3>
                <ul>
                  {project.caracteristicas.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="portfolio-date">
                Publicado: {new Date(project.fecha.seconds * 1000).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio; 