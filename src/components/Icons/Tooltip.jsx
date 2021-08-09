import React from 'react'
import { 
  IconsImg, 
  IconsDivImg 
} from './style';

const Tooltip = ({ 
  src, 
  alt, 
  text 
}) => {
  return (
    <IconsDivImg className='tooltip' >
      <IconsImg src={src} alt={alt} data-testid='img'/>
      <div className="tooltiptext" data-testid='icons-div'>
        <p id='product'>Producto</p>
        <p id='text'>{text}</p>
      </div>
    </IconsDivImg>
  )
}

export default Tooltip
