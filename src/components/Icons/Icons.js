import React from 'react';
import IconsSVG from './Icons.svg';

const Icons = ({name, color, size, className}) => {
  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons;
