import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center" aria-label="Loading content">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
  );
};

export default LoadingSpinner;
