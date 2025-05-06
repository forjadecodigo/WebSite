import React, { useRef, useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from '@emailjs/browser'
import Menu from '../components/menu'
import PieDePagina from '../components/pie-de-pagina'

import './contactanos.css'

const Contactanos = (props) => {
  const form = useRef();
  const videoRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isGlowing, setIsGlowing] = useState(false);
  const fileInputRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    // Recuperar el email del localStorage si existe
    const tempEmail = localStorage.getItem('tempEmail');
    if (tempEmail && emailInputRef.current) {
      emailInputRef.current.value = tempEmail;
      // Limpiar el email del localStorage después de usarlo
      localStorage.removeItem('tempEmail');
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = [...selectedImages, ...files];
      setSelectedImages(newImages);

      const newPreviews = files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newPreviews).then(previews => {
        setImagePreviews([...imagePreviews, ...previews]);
      });
    }
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    const newPreviews = [...imagePreviews];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setSelectedImages(newImages);
    setImagePreviews(newPreviews);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(form.current);
    selectedImages.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' });
        form.current.reset();
        setSelectedImages([]);
        setImagePreviews([]);
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);
        setSubmitStatus({ type: 'error', message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={`contactanos-container1 ${isGlowing ? 'glow-effect' : ''}`}>
      <video
        ref={videoRef}
        className="background-video"
        src="/herrerosonriente.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <Helmet>
        <title>Contáctanos - Forja de Código</title>
        <meta property="og:title" content="Contáctanos - Forja de Código" />
      </Helmet>
      <Menu 
        rootClassName="menuroot-class-name9"
        button11={
          <Fragment>
            <span onClick={scrollToTop}>¡Tú idea aquí!</span>
          </Fragment>
        }
      />
      <div className="contactanos-form-container">
        <h1 className="contactanos-title">Contáctanos</h1>
        <p className="contactanos-subtitle">
          Cuéntanos sobre tu proyecto y juntos lo haremos realidad
        </p>
        
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label className="form-label" htmlFor="user_name">Nombre</label>
            <input
              type="text"
              className="form-input"
              id="user_name"
              name="user_name"
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="user_email">Email</label>
            <input
              ref={emailInputRef}
              type="email"
              className="form-input"
              id="user_email"
              name="user_email"
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="user_phone">Teléfono</label>
            <input
              type="tel"
              className="form-input"
              id="user_phone"
              name="user_phone"
              placeholder="Tu número de teléfono"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">¿Cuál es tu idea para forjarla juntos?</label>
            <textarea
              className="form-input form-textarea"
              id="message"
              name="message"
              required
              placeholder="Cuéntanos los detalles de tu proyecto..."
              onFocus={() => setIsGlowing(true)}
              onBlur={() => setIsGlowing(false)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Imágenes (opcional)</label>
            <div className="image-upload-container">
              <input
                ref={fileInputRef}
                type="file"
                id="images"
                name="images"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="image-input"
                style={{ display: 'none' }}
              />
              <div className="image-upload-button" onClick={triggerFileInput}>
                <div className="upload-icon">+</div>
                <span>Agregar imágenes</span>
              </div>
              <div className="image-previews-container">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="image-preview-item">
                    <img src={preview} alt={`Preview ${index}`} />
                    <button
                      type="button"
                      className="remove-image-button"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {submitStatus && (
            <div 
              style={{ 
                marginTop: '20px',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: submitStatus.type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                color: 'white',
                textAlign: 'center'
              }}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
      <PieDePagina rootClassName="pie-de-paginaroot-class-name" />
    </div>
  )
}

export default Contactanos
