import React from 'react'
import { Helmet } from 'react-helmet'
import Gallery2 from '../components/gallery2'
import Hero5 from '../components/hero5'
import Steps1 from '../components/steps1'
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Forja de Código</title>
        <meta property="og:title" content="Forja de Código" />
      </Helmet>
      <Gallery2
        image1Src="/proyecto1.jpg"
        image2Src="/proyecto2.jpg"
        image3Src="/proyecto3.jpg"
        image4Src="/proyecto4.jpg"
        rootClassName="gallery2root-class-name"
      />
      <Hero5
        content1="Cada idea tiene el potencial de convertirse en una solución innovadora. En nuestra empresa, combinamos creatividad y tecnología para desarrollar aplicaciones y sitios web personalizados que se adaptan a las necesidades de cada cliente. Desde pequeños emprendimientos hasta grandes empresas, convertimos tu visión en software funcional, eficiente y escalable. Si puedes imaginarlo, nosotros podemos crearlo."
        heading1="Donde la imaginación se transforma en software"
        action1="Comienza Aquí"
        video1Src="/video.mp4"
        video1Poster="/example-1500w.png"
      />
      <Steps1 />
    </div>
  )
}

export default Home
