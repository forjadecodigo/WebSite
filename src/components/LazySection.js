import React from 'react';
import { useLazyLoading } from '../hooks/useLazyLoading';

const LazySection = ({ 
  children, 
  className = '', 
  style = {},
  threshold = 0.1,
  rootMargin = '50px',
  fallback = null,
  ...props 
}) => {
  const { elementRef, shouldLoad } = useLazyLoading({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  return (
    <div
      ref={elementRef}
      className={className}
      style={style}
      {...props}
    >
      {shouldLoad ? children : (fallback || <div style={{ minHeight: '200px' }} />)}
    </div>
  );
};

export default LazySection;







