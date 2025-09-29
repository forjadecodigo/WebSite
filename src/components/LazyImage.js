import React from 'react';
import { useLazyImage } from '../hooks/useLazyLoading';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  style = {},
  onClick,
  onLoad,
  ...props 
}) => {
  const { elementRef, imageSrc, isLoaded } = useLazyImage(src, placeholder);

  const handleLoad = () => {
    if (onLoad) onLoad();
  };

  return (
    <img
      ref={elementRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
      style={{
        ...style,
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7
      }}
      onClick={onClick}
      onLoad={handleLoad}
      {...props}
    />
  );
};

export default LazyImage;







