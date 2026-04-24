import React from 'react';

/**
 * @param {{ children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLDivElement>} props
 */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-5 py-4 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
}

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function CardBody({ children, className = '' }) {
  return (
    <div className={`px-5 py-4 ${className}`}>
      {children}
    </div>
  );
}
