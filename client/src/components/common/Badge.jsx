import React from 'react';

/**
 * Reusable Badge component for categories, tags, and status
 */
export const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'saffron' | 'green' | 'blue' | 'red' | 'gray' | 'purple'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon = null,
}) => {
  const variantClasses = {
    primary: 'bg-primary-50 text-primary-800 border-primary-200',
    saffron: 'bg-orange-50 text-orange-700 border-orange-200',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    blue: 'bg-sky-50 text-sky-800 border-sky-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    gray: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${
        variantClasses[variant] || variantClasses.primary
      } ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
