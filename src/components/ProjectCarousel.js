import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import './ProjectCarousel.css';

const ProjectCarousel = () => {
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

  // Creamos un array con suficientes repeticiones para asegurar el efecto infinito
  const repeatedProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="project-carousel-container">
      <div className="project-carousel-track">
        {repeatedProjects.map((project, index) => (
          <Link 
            key={`${project.id}-${index}`}
            to={`/portafolio#${project.id}`}
            className="project-carousel-item"
          >
            <img 
              src={`/${project.imagen}`} 
              alt={project.titulo} 
              className="project-carousel-image"
            />
            <div className="project-carousel-info">
              <h3>{project.titulo}</h3>
              <div className="project-carousel-tech">
                {project.tecnologias.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 