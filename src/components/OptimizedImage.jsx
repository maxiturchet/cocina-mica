import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: width && height ? `${width}/${height}` : '16/9', width: '100%', height: height ? `${height}px` : 'auto' }}>
      <img
        src={src}
        alt={alt || ''}
        className={`transition-opacity duration-300 w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        {...props}
      />
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
