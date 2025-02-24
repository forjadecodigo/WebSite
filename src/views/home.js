import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Gallery2 from '../components/gallery2'
import Hero5 from '../components/hero5'
import Steps1 from '../components/steps1'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forja de Código</title>
        <meta property="og:title" content="Forja de Código" />
      </Helmet>
      <Header
        text={
          <Fragment>
            <span className="home-text10">
              <span>Forja</span>
              <br></br>
              <span>de</span>
              <br></br>
              <span>CÓdigo</span>
            </span>
          </Fragment>
        }
      ></Header>
      <Gallery2
        heading1={
          <Fragment>
            <span className="home-text16">Nuestros Proyectos</span>
          </Fragment>
        }
        image1Src="/proyecto1.jpg"
        image2Src="/proyecto2.jpg"
        image3Src="/proyecto3.jpg"
        image4Src="/proyecto4.jpg"
        rootClassName="gallery2root-class-name"
      ></Gallery2>
      <Hero5
        action1={
          <Fragment>
            <span className="home-text17">Comienza Aqui</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text18">
              Cada idea tiene el potencial de convertirse en una solución
              innovadora. En nuestra empresa, combinamos creatividad y
              tecnología para desarrollar aplicaciones y sitios web
              personalizados que se adaptan a las necesidades de cada cliente.
              Desde pequeños emprendimientos hasta grandes empresas, convertimos
              tu visión en software funcional, eficiente y escalable. Si puedes
              imaginarlo, nosotros podemos crearlo.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text19">
              Donde la imaginación se transforma en software
            </span>
          </Fragment>
        }
        video1Src="/video.mp4"
        video1Poster="/example-1500w.png"
      ></Hero5>
      <Steps1
        step1Title={
          <Fragment>
            <span className="home-text20">Desde lo Local Hasta lo Global</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text21">El futuro digital de Colombia</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text22">Software a la medida</span>
          </Fragment>
        }
        step1ImageSrc="/localshop.png"
        step2ImageSrc="/colombia.png"
        step3ImageSrc="/coding.png"
        step1Description={
          <Fragment>
            <span className="home-text23">
              Comenzamos creando software a medida para nuestro círculo cercano,
              ahora ayudamos a empresas de todos los sectores.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text24">
              Llevamos tecnología de vanguardia a empresarios que buscan crecer
              y alcanzar nuevos objetivos.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text25">
              Desarrollamos aplicaciones y sitios web personalizados que
              impulsan tu negocio.
            </span>
          </Fragment>
        }
      ></Steps1>
      <Footer3
        termsLink={
          <Fragment>
            <span className="home-text26">Terminos y Condiciones</span>
          </Fragment>
        }
        termsLink1={
          <Fragment>
            <span className="home-text27">Telefono: +57 314 159 2653</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text28">
              <span>Donde la imaginación se transforma en software.</span>
              <br></br>
              <span>
                Desarrollamos soluciones digitales a la medida para impulsar tu
                negocio.
              </span>
              <br></br>
              <span>Innovamos contigo, crecemos juntos.</span>
            </span>
          </Fragment>
        }
        termsLink11={
          <Fragment>
            <span className="home-text34">Ubicación: Pereira, Colombia</span>
          </Fragment>
        }
      ></Footer3>
    </div>
  )
}

export default Home
