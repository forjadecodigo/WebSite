import React, { useRef, useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from '@emailjs/browser'
import SparkleNavbar from '../components/SparkleNavbar'
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
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Error al reproducir el video:', error);
        });
      }
    }
    const tempEmail = localStorage.getItem('tempEmail');
    if (tempEmail && emailInputRef.current) {
      emailInputRef.current.value = tempEmail;
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
      // Si ya tenemos 3 imágenes, no permitir más
      if (selectedImages.length >= 3) {
        return;
      }

      // Limitar el número de archivos a subir para no exceder el límite de 3
      const remainingSlots = 3 - selectedImages.length;
      const filesToAdd = files.slice(0, remainingSlots);

      const newImages = [...selectedImages, ...filesToAdd];
      setSelectedImages(newImages);

      const newPreviews = filesToAdd.map(file => {
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

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Reducir aún más el tamaño máximo
          const MAX_WIDTH = 400;  // Reducido a 400px
          const MAX_HEIGHT = 400; // Reducido a 400px
          
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }
          
          canvas.width = width;
          canvas.height = height;
          
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Reducir la calidad a 0.3 para un archivo más pequeño
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.3);
          
          // Verificar el tamaño del string base64
          const base64Size = Math.ceil((compressedDataUrl.length * 3) / 4);
          if (base64Size > 45000) { // 45KB para dejar margen
            // Si aún es muy grande, reducir más la calidad
            const furtherCompressed = canvas.toDataURL('image/jpeg', 0.2);
            resolve({
              name: file.name,
              data: furtherCompressed
            });
          } else {
            resolve({
              name: file.name,
              data: compressedDataUrl
            });
          }
        };
      };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Preparar los datos del formulario
    const prepareFormData = async () => {
      const formData = new FormData(form.current);
      
      // Datos básicos del formulario
      const templateParams = {
        user_name: formData.get('user_name')?.trim() || '',
        user_email: formData.get('user_email')?.trim() || '',
        user_phone: formData.get('user_phone')?.trim() || '',
        message: formData.get('message')?.trim() || '',
        has_images: selectedImages.length > 0 ? 'Sí' : 'No'
      };

      // Procesar imágenes si existen
      if (selectedImages.length > 0) {
        const base64Images = await Promise.all(
          selectedImages.map(file => compressImage(file))
        );
        
        // Asignar cada imagen a su propio campo
        base64Images.forEach((img, index) => {
          if (index < 3) { // Máximo 3 imágenes
            templateParams[`image${index + 1}`] = img.data;
          }
        });
      }

      return templateParams;
    };

    // Enviar el email
    prepareFormData()
      .then(templateParams => {
        console.log('Enviando email con los siguientes parámetros:', {
          serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
          templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams: templateParams
        });
        
        return emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
      })
      .then((result) => {
        console.log('Email enviado exitosamente:', result);
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' });
        form.current.reset();
        setSelectedImages([]);
        setImagePreviews([]);
      })
      .catch((error) => {
        console.error('Error detallado al enviar el email:', {
          error: error,
          message: error.message,
          text: error.text,
          status: error.status
        });
        setSubmitStatus({ 
          type: 'error', 
          message: `Hubo un error al enviar el mensaje: ${error.message || 'Error desconocido'}. Por favor, intenta nuevamente.` 
        });
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
        <title>Contáctanos - Forja de Código | Desarrollo de Software y Web</title>
        <meta name="description" content="¿Tienes un proyecto en mente? Contáctanos y juntos haremos realidad tu idea. Desarrollo de software y web personalizado para tu negocio." />
        <meta name="keywords" content="contacto, desarrollo web, software a medida, consultoría IT, desarrollo de aplicaciones" />
        <meta property="og:title" content="Contáctanos - Forja de Código | Desarrollo de Software y Web" />
        <meta property="og:description" content="¿Tienes un proyecto en mente? Contáctanos y juntos haremos realidad tu idea. Desarrollo de software y web personalizado para tu negocio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forjadecodigo.com/contactanos" />
        <meta property="og:image" content="https://forjadecodigo.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contáctanos - Forja de Código | Desarrollo de Software y Web" />
        <meta name="twitter:description" content="¿Tienes un proyecto en mente? Contáctanos y juntos haremos realidad tu idea. Desarrollo de software y web personalizado para tu negocio." />
        <meta name="twitter:image" content="https://forjadecodigo.com/logo.png" />
        <link rel="canonical" href="https://forjadecodigo.com/contactanos" />
      </Helmet>
      <SparkleNavbar 
        items={[ 'Inicio', 'Servicios', 'Portafolio', 'Nosotros', 'Contáctanos' ]}
        color="#1543B0"
        initialIndex={4}
        onItemClick={(index) => {
          if (index === 4) {
            scrollToTop()
          } else if (index === 0) {
            window.location.href = '/' // volver a home y arriba
          } else if (index === 1) {
            window.location.href = '/#serviciosInicio'
          } else if (index === 2) {
            window.location.href = '/#portafolioInicio'
          } else if (index === 3) {
            window.location.href = '/#nosotrosInicio'
          }
        }}
      />
      <div style={{ height: 76 }} />
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
            <label className="form-label">Imágenes (máximo 3)</label>
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
              <div 
                className={`image-upload-button ${selectedImages.length >= 3 ? 'disabled' : ''}`}
                onClick={() => selectedImages.length < 3 && triggerFileInput()}
              >
                <div className="upload-icon">+</div>
                <span>{selectedImages.length >= 3 ? 'Límite de imágenes alcanzado' : 'Agregar imágenes'}</span>
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
              {selectedImages.length > 0 && (
                <div className="image-count">
                  {selectedImages.length} de 3 imágenes seleccionadas
                </div>
              )}
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