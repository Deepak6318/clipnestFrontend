import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="cn-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#F472B6"/>
        </linearGradient>
      </defs>

      {/* Circular gradient badge (no external filter/shadow to preserve box) */}
      <circle cx="20" cy="20" r="18" fill="url(#cn-grad)" />

      {/* Paperclip icon */}
      <path
        d="M15 22.5L24 13.5C25.933 11.567 29.067 11.567 31 13.5C32.933 15.433 32.933 18.567 31 20.5L20.75 30.75C18.402 33.098 14.598 33.098 12.25 30.75C9.902 28.402 9.902 24.598 12.25 22.25L22 12.5"
        stroke="#0F0B1A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Only the badge + paperclip, no embedded wordmark */
      }
    </svg>
  );
};

export default Logo;


