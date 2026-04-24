import React from 'react';

/**
 * @param {{ children: React.ReactNode, variant?: 'primary' | 'secondary' | 'ghost', size?: 'sm' | 'md' | 'lg', className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:   'bg-black text-white hover:bg-gray-800',
    secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    ghost:     'text-gray-600 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
