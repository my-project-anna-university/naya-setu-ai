import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

/**
 * ErrorMessage component with optional retry callback
 */
export const ErrorMessage = ({
  title = 'Something went wrong',
  message = 'We encountered an error while processing your request. Please try again.',
  onRetry,
}) => {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50/70 p-6 my-4 text-center max-w-lg mx-auto shadow-sm">
      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
        <FaExclamationTriangle className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-red-900 mb-1">{title}</h3>
      <p className="text-sm text-red-700 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <FaRedo className="w-3.5 h-3.5" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
