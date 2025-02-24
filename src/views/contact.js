import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm7 from '../components/contact-form7'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Forja de Código</title>
        <meta property="og:title" content="Contact - Forja de Código" />
      </Helmet>
      <ContactForm7
        content2="¡Contáctanos hoy!"
        heading1="Contacto"
        content1="Estamos aquí para ayudarte. Cuéntanos sobre tu proyecto y te responderemos lo antes posible."
        email="forjadecodigo@gmail.com"
        phone="+57 314 159 2653"
        action="Enviar Mensaje"
      />
    </div>
  )
}

export default Contact
