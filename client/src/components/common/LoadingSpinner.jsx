import React from 'react';

/**
 * LoadingSpinner component with custom sizes and message
 */
export const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-3">
      <div
        className={`${sizeClasses[size] || sizeClasses.md} rounded-full border-primary-200 border-t-primary-800 animate-spin`}
        role="status"
        aria-label="Loading"
      />
      {text && <p className="text-sm text-slate-500 font-medium">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
