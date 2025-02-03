import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Gallery2 from '../components/gallery2'
import Hero5 from '../components/hero5'
import Steps1 from '../components/steps1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Spectacular Metallic Grasshopper</title>
        <meta property="og:title" content="Spectacular Metallic Grasshopper" />
      </Helmet>
      <div className="home-container2">
        <span className="home-text10">
          <span>Forja</span>
          <br></br>
          <span>de</span>
          <br></br>
          <span>CÓdigo</span>
        </span>
      </div>
      <Gallery2
        heading1={
          <Fragment>
            <span className="home-text16">Nuestros Proyectos</span>
          </Fragment>
        }
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
        video1Poster="/example-1500w.png"
      ></Hero5>
      <Steps1
        step1Title={
          <Fragment>
            <span className="home-text20">Discover</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text21">Choose</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text22">Order</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text23">
              Explore our wide range of products and services.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text24">
              Select the products or services that best fit your needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text25">
              Place your order easily and securely through our platform.
            </span>
          </Fragment>
        }
        step2ImageSrc="/logo-400w.png"
        step1ImageSrc="/2ad22892-43a7-4315-9d53-78f480cf3b86-1400w.webp"
        step3ImageSrc="/2ad22892-43a7-4315-9d53-78f480cf3b86-1400w.webp"
      ></Steps1>
    </div>
  )
}

export default Home
