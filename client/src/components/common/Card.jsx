import React from 'react';

/**
 * Reusable Card component with clean styling and hover elevation
 */
export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  accent = null, // 'saffron' | 'green' | 'navy' | null
}) => {
  const accentClasses = {
    saffron: 'border-t-4 border-t-secondary-500',
    green: 'border-t-4 border-t-accent-600',
    navy: 'border-t-4 border-t-primary-800',
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-slate-200/80 p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:shadow-card hover:-translate-y-1 hover:border-slate-300 cursor-pointer'
          : 'shadow-sm'
      } ${accent ? accentClasses[accent] : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, badge, action, className = '' }) => (
  <div className={`flex items-start justify-between gap-4 mb-4 ${className}`}>
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {badge}
      </div>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`text-slate-600 text-sm leading-relaxed ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4 ${className}`}>
    {children}
  </div>
);

export default Card;
