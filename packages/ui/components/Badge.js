import React from 'react';

const colorMap = {
  cafe:        'bg-amber-100 text-amber-700',
  electronics: 'bg-blue-100 text-blue-700',
  grocery:     'bg-green-100 text-green-700',
  clothing:    'bg-purple-100 text-purple-700',
  books:       'bg-rose-100 text-rose-700',
  default:     'bg-gray-100 text-gray-600',
};

/**
 * @param {{ label: string, className?: string }} props
 */
export function Badge({ label, className = '' }) {
  const color = colorMap[label?.toLowerCase()] ?? colorMap.default;
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full capitalize ${color} ${className}`}>
      {label}
    </span>
  );
}
