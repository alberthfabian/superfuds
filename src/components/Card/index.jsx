import React from 'react';
import HoverCard from '../HoverCard';
import Icons from '../Icons';
import { totalValue } from '../Helper/Total';
import { 
  CardDiv, 
  CardButton, 
  CardValue,
  CardTitle,
  CardPrice,
  CardSign,
  CardNumber,
  CardUnit
} from './style';
import './style.css';

const Card = ({ 
  id,
  title, 
  price_real, 
  net_content, 
  supplier, 
  image, 
  units_sf 
}) => {

  return (
    <CardDiv className='card-general' id={id}>
      <CardButton type='button'>
        <img src={image} alt={title} />
      </CardButton>
      <Icons />
      <hr />
      <CardValue>
        <p>{supplier}</p>
        <div>{net_content}</div>
      </CardValue>
      <CardTitle>{title}</CardTitle>
      <CardPrice>
        <CardSign>$ </CardSign>
        <CardNumber>{totalValue(price_real)}</CardNumber>
        <CardUnit>{` x ${units_sf} unids`}</CardUnit>
      </CardPrice>
      <HoverCard id={id} />
    </CardDiv>
  );
};

export default Card;