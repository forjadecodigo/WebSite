import { useEffect, useRef, useState } from 'react';
import { LAZY_CONFIG } from '../utils/lazyConfig';

export const useLazyLoading = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef(null);

  const defaultOptions = {
    threshold: LAZY_CONFIG.sections.threshold,
    rootMargin: LAZY_CONFIG.sections.rootMargin,
    triggerOnce: true,
    ...options
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (defaultOptions.triggerOnce) {
            setHasLoaded(true);
            observer.unobserve(element);
          }
        } else if (!defaultOptions.triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

  return {
    elementRef,
    isIntersecting,
    hasLoaded,
    shouldLoad: isIntersecting || hasLoaded
  };
};

export const useLazyImage = (src, placeholder = LAZY_CONFIG.images.placeholder) => {
  const { elementRef, shouldLoad } = useLazyLoading({
    threshold: LAZY_CONFIG.images.threshold,
    rootMargin: LAZY_CONFIG.images.rootMargin
  });
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad && src) {
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [shouldLoad, src]);

  return {
    elementRef,
    imageSrc,
    isLoaded,
    shouldLoad
  };
};

export const useLazyVideo = (src, options = {}) => {
  const { elementRef, shouldLoad } = useLazyLoading({
    threshold: LAZY_CONFIG.videos.threshold,
    rootMargin: LAZY_CONFIG.videos.rootMargin,
    ...options
  });
  const [videoSrc, setVideoSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad && src && !videoSrc) {
      setVideoSrc(src);
      setIsLoaded(true);
    }
  }, [shouldLoad, src, videoSrc]);

  return {
    elementRef,
    videoSrc,
    isLoaded,
    shouldLoad
  };
};
