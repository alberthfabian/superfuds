import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions';
import {
  CardDivHover
} from './style';

const HoverCard = ({ id }) => {
  const dispatch = useDispatch();

  const value = (id) => {
    dispatch(addProduct(id));
  };

  return (
    <CardDivHover className='card-hover' onClick={() => value(id)}>
      Agregar al carrito
    </CardDivHover>
  );
};

export default HoverCard;