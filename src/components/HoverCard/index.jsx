import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions';
import {
  CardDivHover
} from './style';

const HoverCard = ({ id }) => {
  const dispatch = useDispatch();
  const add = useSelector(state => state.add.add);

  useEffect(() => {
    console.log('data Car', add);
  },[add])

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