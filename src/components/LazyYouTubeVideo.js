import React, { useState, useRef } from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

const LazyYouTubeVideo = ({ 
  videoId, 
  className = '', 
  style = {},
  thumbnailQuality = 'maxresdefault',
  ...props 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { elementRef, shouldLoad } = useLazyLoading({
    threshold: 0.5,
    rootMargin: '100px'
  });

  const handleClick = () => {
    setIsPlaying(true);
  };

  if (!shouldLoad) {
    return (
      <div 
        ref={elementRef}
        className={`${className} lazy-youtube-placeholder`}
        style={{
          ...style,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255, 255, 255, 0.5)',
          cursor: 'pointer',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>▶️</div>
          <div>Cargando video...</div>
        </div>
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div 
        className={`${className} youtube-thumbnail-container`}
        style={{
          ...style,
          position: 'relative',
          cursor: 'pointer',
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2))',
          transition: 'all 0.3s ease'
        }}
        onClick={handleClick}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 0 30px rgba(0, 170, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.3)';
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`}
          alt="Video thumbnail"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'white',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            e.target.style.transform = 'translate(-50%, -50%) scale(1)';
          }}
        >
          ▶️
        </div>
      </div>
    );
  }

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
      style={{
        ...style,
        borderRadius: '24px',
        border: 'none'
      }}
      {...props}
    />
  );
};

export default LazyYouTubeVideo;



