import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const ImageWithSkeleton = ({ src, alt, className, containerClassName }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${containerClassName || className}`}>
      {/* Skeleton Loading State */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200 animate-pulse">
          <ImageIcon className="w-1/3 h-1/3 text-slate-300" />
        </div>
      )}
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400">
          <ImageIcon className="w-1/3 h-1/3 mb-1 opacity-40" />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => { setIsLoaded(true); setHasError(true); }}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
