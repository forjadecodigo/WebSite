import React, { Fragment, useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { proyectos } from '../data/proyectos'
import Menu from '../components/menu'
import SliderAnimado from '../components/slider-animado'
import BotonConResplandor from '../components/boton-con-resplandor'
import PieDePagina from '../components/pie-de-pagina'
import Etapas from '../components/etapas'
import RecuadroFondoNegroVerdoso from '../components/recuadro-fondo-negro-verdoso'
import Testimonios from '../components/testimonios'
import { Trefoil, Quantum } from 'ldrs/react'
import 'ldrs/react/Trefoil.css'
import 'ldrs/react/Quantum.css'
import './inicio.css'

const Inicio = (props) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [tiltCEO, setTiltCEO] = useState({ x: 0, y: 0 });
  const [tiltCTO, setTiltCTO] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const location = useLocation();
  const proyectosRef = useRef(null);
  const videoRef = useRef(null);
  const contenidoRef = useRef(null);
  const [isPortafolioScrolling, setIsPortafolioScrolling] = useState(false);
  const portafolioRef = useRef(null);
  let scrollTimeout;

  useEffect(() => {
    localStorage.removeItem('selectedProject');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let projectToShow = null;
    if (location.state && location.state.selectedProject) {
      const id = location.state.selectedProject;
      projectToShow = Object.values(proyectos).find(p => p.id === id);
      if (projectToShow) {
        localStorage.setItem('selectedProject', JSON.stringify(projectToShow));
      }
    }
    setSelectedProject(projectToShow);

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
  }, [location.state]);

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

  const services = [
    {
      icon: <i className="fas fa-code fa-3x"></i>,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos que destacan tu marca y mejoran la experiencia de tus usuarios.'
    },
    {
      icon: <i className="fas fa-qrcode fa-3x"></i>,
      title: 'QR Personalizados',
      description: 'Diseñamos códigos QR únicos con tu logo, colores y estilo personalizado para destacar tu marca.'
    },
    {
      icon: <i className="fas fa-laptop-code fa-3x"></i>,
      title: 'Software Empresarial',
      description: 'Soluciones personalizadas que optimizan tus procesos y aumentan la eficiencia de tu negocio.'
    },
    {
      icon: <i className="fas fa-cloud fa-3x"></i>,
      title: 'Servicios en la Nube',
      description: 'Implementación y gestión de soluciones cloud que garantizan alta disponibilidad y rendimiento.'
    },
    {
      icon: <i className="fas fa-headset fa-3x"></i>,
      title: 'Consultoría IT',
      description: 'Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas para tu empresa.'
    }
  ]

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
        <title>ForjaDeCodigoWeb</title>
        <meta property="og:title" content="ForjaDeCodigoWeb" />
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
          <span className="Titulos inicio-text31">
            Donde la imaginación se transforma en software
          </span>
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
          <h1 className="serviciosInicio-hero-title">Tú lo imaginas, nosotros lo forjamos.</h1>
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
          {services.map((service, index) => (
            <div key={index} className="serviciosInicio-service-card">
              <div className="serviciosInicio-service-icon">
                {service.icon}
              </div>
              <h3 className="serviciosInicio-service-title">{service.title}</h3>
              <p className="serviciosInicio-service-description">{service.description}</p>
            </div>
          ))}
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
            <h1>Nuestro Portafolio</h1>
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
              {Object.entries(proyectos).map(([id, proyecto], index) => (
                <div key={id} className="portafolioInicio-proyecto-card animate-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="portafolioInicio-proyecto-imagen-container">
                    <img 
                      src={proyecto.imagen} 
                      alt={proyecto.titulo}
                      className="portafolioInicio-proyecto-imagen zoom-in"
                    />
                  </div>
                  <div className="portafolioInicio-proyecto-info">
                    <h2>{proyecto.titulo}</h2>
                    <p>{proyecto.descripcion.substring(0, 150)}...</p>
                    <div className="portafolioInicio-tecnologias-tags">
                      {proyecto.tecnologias.slice(0, 3).map((tech, index) => (
                        <span key={index} className="portafolioInicio-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="portafolioInicio-testimonios">
            <Testimonios />
          </div>
        </div>
      </div>

      <div className="nosotrosInicio" id="nosotrosInicio">
        <div className="nosotrosInicio-hero">
          <h1>Somos Forja de Código</h1>
          <p>
            La unión perfecta entre la innovación técnica y la sensibilidad creativa.
            Somos una empresa de desarrollo de software y diseño web que no solo crea soluciones digitales, sino que las moldea a la medida de cada cliente, con precisión técnica, visión estética y un enfoque humano.
            
            Nuestroequipo combina más de una década de experiencia en software, arquitectura escalable y formación internacional, con una dirección creativa centrada en entender, conectar y crear experiencias que realmente impactan.
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
                Desarrollador de software y web, con formación en mercadeo y ventas, y actual CEO de Forja de Código. Su enfoque une la tecnología con la creatividad para crear soluciones funcionales, visualmente atractivas y alineadas con la visión de cada cliente.
                Apasionado por descubrir lo que cada proyecto realmente necesita y transformarlo en una experiencia digital que conecte, emocione y funcione.
                Si estás buscando a alguien que escuche con atención, proponga con propósito y construya contigo, estás en el lugar ideal.
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
                Ingeniero de software con más de 10 años de experiencia en el desarrollo de soluciones web y móviles. Su trayectoria incluye proyectos de alto impacto tanto a nivel nacional como internacional, y una sólida formación adquirida en el exterior, donde amplió su visión tecnológica y estratégica. 
                Especialista en arquitectura de software y en el diseño de soluciones escalables, lidera el corazón técnico de Forja de Código con una mezcla única de precisión, innovación y visión a futuro.
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
