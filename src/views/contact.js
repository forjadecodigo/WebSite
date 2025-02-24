import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ContactForm7 from '../components/contact-form7'
import Footer3 from '../components/footer3'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Forja de Código</title>
        <meta property="og:title" content="Contact - Forja de Código" />
      </Helmet>
      <Header
        text={
          <Fragment>
            <span className="contact-text10">
              <span>Forja</span>
              <br></br>
              <span>de</span>
              <br></br>
              <span>CÓdigo</span>
            </span>
          </Fragment>
        }
        rootClassName="headerroot-class-name"
      ></Header>
      <ContactForm7
        email={
          <Fragment>
            <span className="contact-text16">forjadecodigo@gmail.com</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="contact-text17">+57 (300) 672-4400</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact-text18">Comenzar a forjar</span>
          </Fragment>
        }
        address={
          <Fragment>
            <span className="contact-text19">
              Pereira, Risaralda (Colombia)
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text20">
              Los artesanos del código estamos siempre atentos a nuevos
              proyectos, ideas y creaciones digitales. Envíanos un mensaje y
              forjemos juntos el futuro.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text21">
              Donde la imaginación se transforma en software.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text22">¡Envíanos tu señal!</span>
          </Fragment>
        }
      ></ContactForm7>
      <Footer3
        termsLink={
          <Fragment>
            <span className="contact-text23">Terminos y Condiciones</span>
          </Fragment>
        }
        termsLink1={
          <Fragment>
            <span className="contact-text24">Telefono: +57 314 159 2653</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text25">
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
            <span className="contact-text31">Ubicación: Pereira, Colombia</span>
          </Fragment>
        }
      ></Footer3>
    </div>
  )
}

export default Contact
