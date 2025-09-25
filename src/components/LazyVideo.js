import React, { useRef, useEffect } from 'react';
import { useLazyVideo } from '../hooks/useLazyLoading';

const LazyVideo = ({ 
  src, 
  className = '', 
  style = {},
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  onPlay,
  onPause,
  ...props 
}) => {
  const { elementRef, videoSrc, shouldLoad } = useLazyVideo(src);
  const videoRef = useRef(null);

  useEffect(() => {
    if (shouldLoad && videoSrc && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Error al reproducir el video:', error);
        });
      }
    }
  }, [shouldLoad, videoSrc]);

  if (!shouldLoad) {
    return (
      <div 
        ref={elementRef}
        className={`${className} lazy-video-placeholder`}
        style={{
          ...style,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255, 255, 255, 0.5)'
        }}
      >
        Cargando video...
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      onPlay={onPlay}
      onPause={onPause}
      {...props}
    />
  );
};

export default LazyVideo;




