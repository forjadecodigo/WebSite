import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useProjects } from '../hooks/useProjects'
import Menu from '../components/menu'
import SliderAnimado from '../components/slider-animado'
import BotonConResplandor from '../components/boton-con-resplandor'
import PieDePagina from '../components/pie-de-pagina'
import Etapas from '../components/etapas'
import RecuadroFondoNegroVerdoso from '../components/recuadro-fondo-negro-verdoso'
import Testimonios from '../components/testimonios'
import { Trefoil, Quantum, Helix, Miyagi } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'
import 'ldrs/react/Quantum.css'
import 'ldrs/react/Helix.css'
import 'ldrs/react/Miyagi.css'
import './inicio.css'
import BotonFlecha from '../components/botonflecha'
import AnimacionBlog1 from '../components/animacionblog1'
import AnimacionBlog2 from '../components/animacionblog2'
import AnimacionBlog3 from '../components/animacionblog3'
import MagicBento from '../components/MagicBento'

const tarjetasSets = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];

const Inicio = (props) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [tiltCEO, setTiltCEO] = useState({ x: 0, y: 0 });
  const [tiltCTO, setTiltCTO] = useState({ x: 0, y: 0 });
  const [tiltCMO, setTiltCMO] = useState({ x: 0, y: 0 });
  const [tiltLawyer, setTiltLawyer] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const proyectosRef = useRef(null);
  const videoRef = useRef(null);
  const contenidoRef = useRef(null);
  const [isPortafolioScrolling, setIsPortafolioScrolling] = useState(false);
  const portafolioRef = useRef(null);
  const { projects, loading, error } = useProjects();
  let scrollTimeout;
  const [tarjetaSetIndex, setTarjetaSetIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Hook para detectar el tamaño de pantalla
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Verificar al montar el componente
    checkIsMobile();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Resetear expandedIndex cuando cambie el tamaño de pantalla
  useEffect(() => {
    if (!isMobile) {
      setExpandedIndex(null);
    }
  }, [isMobile]);

  useEffect(() => {
    localStorage.removeItem('selectedProject');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let projectToShow = null;
    if (location.state && location.state.selectedProject && projects.length > 0) {
      const id = location.state.selectedProject;
      projectToShow = projects.find(p => p._id === id);
      if (projectToShow) {
        // Transform API data to match expected format
        const transformedProject = {
          id: projectToShow._id,
          titulo: projectToShow.title,
          descripcion: projectToShow.description,
          tecnologias: projectToShow.technologies,
          imagen: projectToShow.image || '/proyecto1.jpg'
        };
        localStorage.setItem('selectedProject', JSON.stringify(transformedProject));
        setSelectedProject(transformedProject);
      }
    }

    if (location.state && location.state.scrollTo && !window.performance.navigation.type) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else if (projectToShow) {
      setTimeout(() => {
        const element = document.getElementById('portafolioInicio');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [location.state, projects]);

  useEffect(() => {
    if (selectedProject && proyectosRef.current) {
      proyectosRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  // Manejar el error silenciosamente
                  console.log('Error al reproducir el video:', error);
                });
              }
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    if (contenidoRef.current) {
      observer.observe(contenidoRef.current);
    }

    return () => {
      if (contenidoRef.current) {
        observer.unobserve(contenidoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePortafolioScroll = () => {
      if (portafolioRef.current) {
        setIsPortafolioScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsPortafolioScrolling(false);
        }, 150);
      }
    };

    const portafolioElement = portafolioRef.current;
    if (portafolioElement) {
      portafolioElement.addEventListener('scroll', handlePortafolioScroll);
    }

    return () => {
      if (portafolioElement) {
        portafolioElement.removeEventListener('scroll', handlePortafolioScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleMouseMove = (e, setTiltFunction) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / centerY;
    const tiltY = (centerX - x) / centerX;
    
    setTiltFunction({ 
      x: tiltX * 15, 
      y: tiltY * 15 
    });
  };

  const handleMouseLeave = (setTiltFunction) => {
    setTiltFunction({ x: 0, y: 0 });
  };

  const handleContactClick = () => {
    navigate('/contactanos');
  };

  

  return (
    <div className="inicio-container1">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="inicio-background-video"
        src="/roboforjaazul.mp4"
      />
      <Helmet>
        <title>Forja de Código - Desarrollo de Software y Web a la Medida</title>
        <meta name="description" content="Transformamos ideas en soluciones digitales innovadoras. Desarrollo de software y web personalizado para tu negocio. ¡Convierte tu visión en realidad!" />
        <meta name="keywords" content="desarrollo web, software a medida, desarrollo de aplicaciones, diseño web, programación, tecnología, soluciones digitales" />
        <meta property="og:title" content="Forja de Código - Desarrollo de Software y Web a la Medida" />
        <meta property="og:description" content="Transformamos ideas en soluciones digitales innovadoras. Desarrollo de software y web personalizado para tu negocio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forjadecodigo.com/" />
        <meta property="og:image" content="https://forjadecodigo.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Forja de Código - Desarrollo de Software y Web a la Medida" />
        <meta name="twitter:description" content="Transformamos ideas en soluciones digitales innovadoras. Desarrollo de software y web personalizado para tu negocio." />
        <meta name="twitter:image" content="https://forjadecodigo.com/logo.png" />
        <link rel="canonical" href="https://forjadecodigo.com/" />
      </Helmet>
      <Menu
        button={
          <Fragment>
            <span className="inicio-text10 Botones">Botón con Resplandor</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="inicio-text11">Nosotros</span>
          </Fragment>
        }
        button2={
          <Fragment>
            <span className="inicio-text12">Portafolio</span>
          </Fragment>
        }
        button3={
          <Fragment>
            <span className="inicio-text13">Servicios</span>
          </Fragment>
        }
        button4={
          <Fragment>
            <span className="inicio-text14">Inicio</span>
          </Fragment>
        }
        button11={
          <Fragment>
            <span className="inicio-text15">¡Tú idea aquí!</span>
          </Fragment>
        }
        rootClassName="menuroot-class-name"
      ></Menu>
      <div className="inicio-seccion1" id="inicio-seccion1">
        <div className="inicio-slogan">
          <span className="inicio-text16">
            <span>En Forja de Código vamos de la chispa de una idea,</span>
            <br></br>
            <span> a la solidez de una aplicación.</span>
          </span>
        </div>
        <div 
          className="inicio-yunque"
          onMouseMove={(e) => handleMouseMove(e, setTilt)}
          onMouseLeave={() => handleMouseLeave(setTilt)}
          style={{
            transform: `perspective(1000px) 
                       rotateX(${tilt.x}deg) 
                       rotateY(${tilt.y}deg) 
                       ${tilt.x === 0 && tilt.y === 0 ? '' : 'scale(1.1) translateZ(50px)'}`,
            transition: tilt.x === 0 && tilt.y === 0 
              ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
              : 'transform 0.1s ease-out'
          }}
        >
          <img alt="image" src="/hb3d3.0-1500w.png" className="inicio-image" />
        </div>
        <div className="inicio-container2">
          <SliderAnimado
            text={
              <Fragment>
                <span className="inicio-text20">
                  Descripción de la imagen 1
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="inicio-text21">
                  Descripción de la imagen 2
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="inicio-text22">
                  Descripción de la imagen 3
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="inicio-text23">
                  Descripción de la imagen 4
                </span>
              </Fragment>
            }
            text31={
              <Fragment>
                <span className="inicio-text24">
                  Descripción de la imagen 4
                </span>
              </Fragment>
            }
            heading={
              <Fragment>
                <span className="inicio-text25">Título 1</span>
              </Fragment>
            }
            heading1={
              <Fragment>
                <span className="inicio-text26">Título 2</span>
              </Fragment>
            }
            heading2={
              <Fragment>
                <span className="inicio-text27">Título 3</span>
              </Fragment>
            }
            heading3={
              <Fragment>
                <span className="inicio-text28">Título 4</span>
              </Fragment>
            }
            heading31={
              <Fragment>
                <span className="inicio-text29">Título 4</span>
              </Fragment>
            }
            imageSrc3="/fondomatrixazul-700h.png"
            rootClassName="slider-animadoroot-class-name1"
          ></SliderAnimado>
        </div>
      </div>
      <div className="inicio-contenido" ref={contenidoRef}>
        <video
          ref={videoRef}
          src="/manotomandofuego.mp4"
          muted="true"
          loop="true"
          playsInline
          className="inicio-video"
        ></video>
        <span className="inicio-text30">
          <h1 className="Titulos inicio-text31 glow-title-blue-green">
            Donde la imaginación se transforma en software
          </h1>
          <br className="Titulos"></br>
          <br></br>
          <span className="inicio-text34">
            Cada idea tiene el potencial de convertirse en una solución
            innovadora. En nuestra empresa, combinamos creatividad y tecnología
            para desarrollar aplicaciones y sitios web personalizados que se
            adaptan a las necesidades de cada cliente. Desde pequeños
            emprendimientos hasta grandes empresas.  Convertimos tu visión, en
            software funcional, eficiente y escalable. Si puedes imaginarlo,
            nosotros podemos crearlo.
          </span>
          <div className="inicio-boton-container">
            <BotonConResplandor
              button={
                <Fragment>
                  <span className="inicio-text35 Botones" onClick={handleContactClick}>Comienza aquí</span>
                </Fragment>
              }
              rootClassName="boton-con-resplandorroot-class-name"
            ></BotonConResplandor>
          </div>
        </span>
      </div>

      <div className="serviciosInicio" id="serviciosInicio">
        <section className="serviciosInicio-hero">
          <h1 className="serviciosInicio-hero-title glow-title-blue-green">Tú lo imaginas, nosotros lo forjamos.</h1>
          <p className="serviciosInicio-hero-subtitle">
            Damos vida a tus ideas. ¿Listo para crear algo increíble?
          </p>
        </section>

        <div className="serviciosInicio-etapas-container thq-section-padding">
          <Etapas
            imageSrc1="/bombilloapp-600h.png"
            imageAlt1="image"
            onClick={handleContactClick}
          />
        </div>

        <section className="serviciosInicio-services">
          <MagicBento />
        </section>

        <div className="serviciosInicio-cta-container">
          <RecuadroFondoNegroVerdoso
            heading1="¿Listo para dar el siguiente paso?"
            content1="Escríbenos y veamos cómo podemos transformar tu idea en una solución de software o web que realmente funcione para ti."
          />
        </div>
      </div>

      <div 
        className={`portafolioInicio ${isPortafolioScrolling ? 'scrolling' : ''}`} 
        id="portafolioInicio"
        ref={portafolioRef}
      >
        <div className="portafolioInicio-contenido">
          <div className="portafolioInicio-hero">
            <h1 className="glow-title-blue-green">Nuestro Portafolio</h1>
            <p>Forjando ideas en soluciones digitales innovadoras</p>
          </div>

          <div className="portafolioInicio-proyectos" ref={proyectosRef}>
            {selectedProject && (
              <div className="portafolioInicio-proyecto-detalle animate-in">
                <div className="portafolioInicio-proyecto-imagen-container">
                  <img 
                    src={selectedProject.imagen} 
                    alt={selectedProject.titulo}
                    className="portafolioInicio-proyecto-imagen zoom-in"
                  />
                </div>
                <div className="portafolioInicio-proyecto-info">
                  <h2>{selectedProject.titulo}</h2>
                  <p>{selectedProject.descripcion}</p>
                  <div className="portafolioInicio-tecnologias-container">
                    <h3>Tecnologías utilizadas:</h3>
                    <div className="portafolioInicio-tecnologias-tags">
                      {selectedProject.tecnologias.map((tech, index) => (
                        <span key={index} className="portafolioInicio-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="portafolioInicio-proyectos-grid">
              {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', width: '100%' }}>
                  <Trefoil size="50" stroke="4" stroke-length="0.15" bg-opacity="0.1" speed="1.4" color="white" />
                </div>
              ) : error ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', width: '100%' }}>
                  <p style={{ color: 'white', textAlign: 'center' }}>
                    Error al cargar los proyectos. Por favor, intenta de nuevo más tarde.
                  </p>
                </div>
              ) : (
                projects.map((project, index) => (
                  <div key={project._id} className="portafolioInicio-proyecto-card animate-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="portafolioInicio-proyecto-imagen-container">
                      <img 
                        src={project.image || '/proyecto1.jpg'} 
                        alt={project.title}
                        className="portafolioInicio-proyecto-imagen zoom-in"
                      />
                    </div>
                    <div className="portafolioInicio-proyecto-info">
                      <h2>{project.title}</h2>
                      <p>{project.description.substring(0, 150)}...</p>
                      <div className="portafolioInicio-tecnologias-tags">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="portafolioInicio-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="portafolioInicio-testimonios">
            <Testimonios />
          </div>
        </div>
      </div>

      <div className="nosotrosInicio" id="nosotrosInicio">
        <div className="nosotrosInicio-hero">
          <h1 className="glow-title-blue-green">Somos Forja de Código</h1>
          <p>
            La unión perfecta entre la innovación técnica y la sensibilidad creativa. Damos vida a soluciones digitales hechas a medida, con alma, propósito y detalle. Más de diez años de experiencia nos respaldan para crear experiencias que inspiran, conectan y transforman.
          </p>
        </div>

        <div className="nosotrosInicio-contenido">
          <div 
            className="nosotrosInicio-equipo-container"
            onMouseMove={(e) => handleMouseMove(e, setTiltCEO)}
            onMouseLeave={() => handleMouseLeave(setTiltCEO)}
            style={{
              transform: `perspective(1000px) 
                         rotateX(${tiltCEO.x}deg) 
                         rotateY(${tiltCEO.y}deg) 
                         ${tiltCEO.x === 0 && tiltCEO.y === 0 ? '' : 'scale(1.02) translateZ(30px)'}`,
              transition: tiltCEO.x === 0 && tiltCEO.y === 0 
                ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'transform 0.1s ease-out'
            }}
          >
            <div className="nosotrosInicio-fotos-container">
              <div className="nosotrosInicio-foto-container">
                <img 
                  src="/FotoHasbon.jpg" 
                  alt="CEO" 
                  className="nosotrosInicio-foto-perfil"
                />
              </div>
            </div>
            <button 
              className="nosotrosInicio-nombre-cargo"
              onClick={() => {
                console.log('Botón clickeado');
              }}
            >
              <div className="nosotrosInicio-nombre">Daniel Hasbon Orozco</div>
              <div className="nosotrosInicio-cargo">CEO & Co-Fundador</div>
            </button>
            <div className="nosotrosInicio-info-container">
              <div className="nosotrosInicio-loader-container">
                <Quantum
                  size="45"
                  speed="1.75"
                  color="cyan"
                />
              </div>
              <div className="nosotrosInicio-descripcion">
                Desarrollador de software y web con 20 años de experiencia en mercadeo y ventas. Su enfoque une la tecnología con la creatividad para crear soluciones funcionales y visualmente atractivas, alineadas con la visión de cada cliente.
                Apasionado por descubrir lo que cada proyecto necesita y transformarlo en experiencias digitales que conecten y emocionen.
              </div>
            </div>
          </div>

          <div 
            className="nosotrosInicio-equipo-container"
            onMouseMove={(e) => handleMouseMove(e, setTiltCTO)}
            onMouseLeave={() => handleMouseLeave(setTiltCTO)}
            style={{
              transform: `perspective(1000px) 
                         rotateX(${tiltCTO.x}deg) 
                         rotateY(${tiltCTO.y}deg) 
                         ${tiltCTO.x === 0 && tiltCTO.y === 0 ? '' : 'scale(1.02) translateZ(30px)'}`,
              transition: tiltCTO.x === 0 && tiltCTO.y === 0 
                ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'transform 0.1s ease-out'
            }}
          >
            <div className="nosotrosInicio-fotos-container">
              <div className="nosotrosInicio-foto-container">
                <img 
                  src="/FotoBernal.png" 
                  alt="CTO" 
                  className="nosotrosInicio-foto-perfil"
                />
              </div>
            </div>
            <button 
              className="nosotrosInicio-nombre-cargo"
              onClick={() => {
                console.log('Botón clickeado');
              }}
            >
              <div className="nosotrosInicio-nombre">Oscar Eduardo Bernal</div>
              <div className="nosotrosInicio-cargo">CTO & Co-Fundador</div>
            </button>
            <div className="nosotrosInicio-info-container">
              <div className="nosotrosInicio-loader-container">
                <Trefoil
                  size="40"
                  stroke="4"
                  strokeLength="0.15"
                  bgOpacity="0.1"
                  speed="1.4"
                  color="cyan"
                />
              </div>
              <div className="nosotrosInicio-descripcion">
              Ingeniero de software con más de 10 años de experiencia en desarrollo web y móvil. Su trayectoria incluye proyectos de alto impacto y una sólida formación internacional. Especialista en arquitectura de software y diseño de soluciones escalables, lidera el corazón técnico de Forja de Código con una mezcla única de precisión, innovación y una visión estratégica a futuro.
              </div>
            </div>
          </div>

          <div 
            className="nosotrosInicio-equipo-container"
            onMouseMove={(e) => handleMouseMove(e, setTiltCMO)}
            onMouseLeave={() => handleMouseLeave(setTiltCMO)}
            style={{
              transform: `perspective(1000px) 
                         rotateX(${tiltCMO.x}deg) 
                         rotateY(${tiltCMO.y}deg) 
                         ${tiltCMO.x === 0 && tiltCMO.y === 0 ? '' : 'scale(1.02) translateZ(30px)'}`,
              transition: tiltCMO.x === 0 && tiltCMO.y === 0 
                ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'transform 0.1s ease-out'
            }}
          >
            <div className="nosotrosInicio-fotos-container">
              <div className="nosotrosInicio-foto-container">
                <img 
                  src="/FotoDavid.jpg" 
                  alt="Developer" 
                  className="nosotrosInicio-foto-perfil"
                />
              </div>
            </div>
            <button 
              className="nosotrosInicio-nombre-cargo"
              onClick={() => {
                console.log('Botón clickeado');
              }}
            >
              <div className="nosotrosInicio-nombre">David Hasbon Palacios</div>
              <div className="nosotrosInicio-cargo">Desarrollador de Software</div>
            </button>
            <div className="nosotrosInicio-info-container">
              <div className="nosotrosInicio-loader-container">
                <Helix
                  size={45}
                  speed={2.5}
                  color="cyan"
                />
              </div>
              <div className="nosotrosInicio-descripcion">
              Con formación en desarrollo de software, es un desarrollador junior que transforma ideas en soluciones robustas y estéticas. Su habilidad para unir tecnología y creatividad es clave en cada proyecto. Siempre busca innovar y aprender, lo que facilita su adaptación a nuevas tecnologías y lo convierte en un miembro proactivo y valioso del equipo.
              </div>
            </div>
          </div>

          <div 
            className="nosotrosInicio-equipo-container"
            onMouseMove={(e) => handleMouseMove(e, setTiltLawyer)}
            onMouseLeave={() => handleMouseLeave(setTiltLawyer)}
            style={{
              transform: `perspective(1000px) 
                         rotateX(${tiltLawyer.x}deg) 
                         rotateY(${tiltLawyer.y}deg) 
                         ${tiltLawyer.x === 0 && tiltLawyer.y === 0 ? '' : 'scale(1.02) translateZ(30px)'}`,
              transition: tiltLawyer.x === 0 && tiltLawyer.y === 0 
                ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'transform 0.1s ease-out'
            }}
          >
            <div className="nosotrosInicio-fotos-container">
              <div className="nosotrosInicio-foto-container">
                <img 
                  src="/FotoMiguel.jpg" 
                  alt="Legal Advisor" 
                  className="nosotrosInicio-foto-perfil"
                />
              </div>
            </div>
            <button 
              className="nosotrosInicio-nombre-cargo"
              onClick={() => {
                console.log('Botón clickeado');
              }}
            >
              <div className="nosotrosInicio-nombre">Miguel David Sanchez</div>
              <div className="nosotrosInicio-cargo">Asesor Legal</div>
            </button>
            <div className="nosotrosInicio-info-container">
              <div className="nosotrosInicio-loader-container">
                <Miyagi
                  size={45}
                  speed={1.5}
                  color="cyan"
                />
              </div>
              <div className="nosotrosInicio-descripcion">
              Abogado magister (M1) en Derecho Internacional y de la Unión Europea, con estudios en Colombia e Internacionales (Francia). Apasionado por el Derecho Privado y con conocimientos en múltiples áreas tales como "Economía", "Historia", "Politología". Se encarga de todos los asuntos jurídicos de Forja de Código, con profunda entrega y dedicación.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blogInicio" id="blogInicio">
        <div className="blogInicio-contenido">
          <div className="blogInicio-articulo">
            <h2 className="blogInicio-titulo">BLOG DE FORJA DE CÓDIGO</h2>
            <p className="blogInicio-texto">
            Muchos emprenden con entusiasmo, pero pronto se enfrentan a la saturación en redes sociales. Sin un sitio web propio, su marca compite por visibilidad en un espacio limitado. En Colombia, solo el 17% de pequeños negocios tiene web. Contar con un sitio profesional puede marcar la diferencia, destacar su talento y ofrecer un espacio propio para conectar con clientes más allá del algoritmo.
            </p>
           
          </div>
          <div className="blogInicio-multiarticulos-wrapper" style={{position: 'relative', width: '100%'}}>
            <div className="blogInicio-multiarticulos">
              {tarjetasSets[tarjetaSetIndex].map((i, idx) => {
                let posClass = '';
                if (idx === 0) posClass = 'top-left';
                if (idx === 1) posClass = 'top-right';
                if (idx === 2) posClass = 'bottom-left';
                if (idx === 3) posClass = 'bottom-right';
                const isExpanded = isMobile && expandedIndex === idx;
                
                return (
                  <div 
                    className={`blogInicio-tarjeta ${posClass} ${isExpanded ? 'expanded' : ''}`} 
                    key={i}
                    onClick={isMobile ? () => setExpandedIndex(expandedIndex === idx ? null : idx) : undefined}
                    style={isMobile ? { cursor: 'pointer' } : {}}
                  >
                    <h3 className="blogInicio-tarjeta-titulo">Artículo {i}</h3>
                    <h4 className="blogInicio-tarjeta-subtitulo">Subtítulo del artículo {i}</h4>
                    <div className="blogInicio-tarjeta-contenido">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
                      <p>Más contenido de ejemplo para hacer scroll. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
                      <p>Incluso más texto para asegurar el scroll interno. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
                    </div>
                    {isMobile && (
                      <button 
                        className="blogInicio-tarjeta-flecha" 
                        onClick={(e) => {
                          e.stopPropagation(); // Evitar que se propague el clic al contenedor
                          setExpandedIndex(expandedIndex === idx ? null : idx);
                        }}
                        aria-label={isExpanded ? "Contraer artículo" : "Expandir artículo"}
                      >
                        {isExpanded ? '▲' : '▼'}
                      </button>
                    )}
                  </div>
                );
              })}
              {tarjetaSetIndex === 2 ? (
                <div className="blogInicio-circulo-central">
                  <AnimacionBlog3 />
                </div>
              ) : tarjetaSetIndex === 1 ? (
                <div className="blogInicio-circulo-central">
                  <AnimacionBlog2 />
                </div>
              ) : (
                <div className="blogInicio-circulo-central">
                  <AnimacionBlog1 />
                </div>
              )}
              <div style={{position: 'absolute', top: '50%', left: '-160px', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <BotonFlecha direction="left" onClick={() => setTarjetaSetIndex((prev) => prev === 0 ? tarjetasSets.length-1 : prev-1)} />
              </div>
              <div style={{position: 'absolute', top: '50%', right: '-160px', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <BotonFlecha direction="right" onClick={() => setTarjetaSetIndex((prev) => prev === tarjetasSets.length-1 ? 0 : prev+1)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inicio-end-page">
        <PieDePagina
          content1={
            <Fragment>
              <span className="inicio-text36 Botones">
                Desarrollo de Software y Web a la medida
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="inicio-text37">
                Transformando ideas en soluciones
              </span>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="inicio-text38">
                © 2024 Forja de Código. Derechos Reservados.
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="inicio-text39">Terminos de servicio</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="inicio-text40">Cookies</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="inicio-text41">
                Correo: forjadecodigo@gmail.com
              </span>
            </Fragment>
          }
          rootClassName="pie-de-paginaroot-class-name"
        ></PieDePagina>
      </div>
    </div>
  )
}

export default Inicio
