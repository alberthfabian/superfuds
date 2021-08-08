import React from 'react';
import {
  HeaderSuperfuds
} from './style'

const LogoSuperFuds = ({superfuds, altSuperfuds}) => {
  return (
    <HeaderSuperfuds 
      src={superfuds} 
      alt={altSuperfuds}
    />
  );
};

export default LogoSuperFuds;
