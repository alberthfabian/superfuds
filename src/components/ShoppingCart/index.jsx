import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions';
import { 
  HeaderCar, 
  HeaderButton,
  Count
} from './style';

const ShoppingCart = ({type, car, altCar}) => {
  const dispatch = useDispatch();
  const add = useSelector(state => state.add.add);

  const modalOpen = () => {
    dispatch(openModal(true));
  }

  return (
    <HeaderButton 
      type={type}
      onClick={() => modalOpen()}
    >
      <HeaderCar 
        src={car} 
        alt={altCar}
      />
      {add.length !== 0 && 
        <Count>{add.length}</Count>
      }
    </HeaderButton>
  );
};

export default ShoppingCart;
