import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholder = 'blur',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref} className={`relative ${className}`} style={{ aspectRatio: '16/9' }}>
      {isInView && src && (
        <img
          src={src}
          alt={alt || ''}
          className={`transition-opacity duration-300 absolute inset-0 w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default LazyImage;
