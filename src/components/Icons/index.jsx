import React from 'react';
import Tooltip from './Tooltip';
import { IconsDiv } from './style';
import { dataIcons } from '../Helper/dataIcons';
import './style.css';

const Icons = () => {
  return (
    <IconsDiv>
      {dataIcons?.map(info => (
        <Tooltip 
          key={info.id} 
          src={info.src} 
          alt={info.alt} 
          text={info.text} 
        />
      ))}
    </IconsDiv>
  );
};

export default Icons;
