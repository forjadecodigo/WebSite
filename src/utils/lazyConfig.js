// Configuración para lazy loading
export const LAZY_CONFIG = {
  // Configuración para imágenes
  images: {
    threshold: 0.1,
    rootMargin: '50px',
    placeholder: '/placeholder.jpg'
  },
  
  // Configuración para videos
  videos: {
    threshold: 0.5,
    rootMargin: '100px'
  },
  
  // Configuración para secciones
  sections: {
    threshold: 0.1,
    rootMargin: '50px'
  },
  
  // Configuración para componentes
  components: {
    fallbackDelay: 200 // ms
  }
};

// Función para crear un placeholder SVG
export const createPlaceholder = (width = 400, height = 300, text = 'Loading...') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#333"/>
      <text x="50%" y="50%" font-family="Arial" font-size="18" fill="#999" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Función para precargar recursos críticos
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/hb3d3.0-1500w.png',
    '/roboforjaazul.webm'
  ];
  
  criticalImages.forEach(src => {
    if (src.endsWith('.webm')) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      document.head.appendChild(link);
    } else {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    }
  });
};


