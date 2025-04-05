import React from 'react';

interface StarIconProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ width = 32, height = 32, fill = "currentColor", className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_1_3)">
        <path d="M17.5453 1.6594L21.1545 8.97254C21.4054 9.48118 21.8907 9.83362 22.4521 9.91505L30.5228 11.0879C31.9366 11.2934 32.5006 13.0303 31.478 14.0269L25.6381 19.7193C25.2322 20.1151 25.0467 20.6859 25.1428 21.2446L26.5212 29.2826C26.7628 30.6904 25.285 31.7637 24.0207 31.0995L16.8024 27.3048C16.3004 27.0411 15.7003 27.0411 15.1984 27.3048L7.98 31.0995C6.71575 31.7644 5.2379 30.6904 5.47954 29.2826L6.85793 21.2446C6.95405 20.6859 6.76848 20.1151 6.36264 19.7193L0.522674 14.0269C-0.499938 13.0296 0.0641005 11.2928 1.47787 11.0879L9.54862 9.91505C10.11 9.83362 10.5953 9.48118 10.8462 8.97254L14.4554 1.6594C15.0869 0.378466 16.9132 0.378466 17.5453 1.6594Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarIcon;