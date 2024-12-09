import React from 'react';
import { SVGprop } from '../../types';
const Menu = React.memo(({ width, height }: SVGprop) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 15.5H24.5"
        stroke="#0000001a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7.75H24.5"
        stroke="#0000001a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 23.25H24.5"
        stroke="#0000001a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default Menu;
