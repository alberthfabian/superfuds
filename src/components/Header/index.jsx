import React from 'react';
import User from '../User';
import superfuds from '../../assets/img/superfuds.png';
import ShoppingCart from '../ShoppingCart';
import avatar from '../../assets/img/avatar.jpg';
import car from '../../assets/img/car.png';
import LogoSuperFuds from '../../components/LogoSuperFuds';
import Search from '../../components/Search';
import { HeaderDiv, HeaderInfo } from './style';

const Header = () => {
  return (
    <HeaderDiv>
      <LogoSuperFuds 
        superfuds={superfuds} 
        altSuperfuds='SuperFuds' 
      />
      <Search 
        type='text'
        placeholder='Busca marcas y productos...'
      />
      <HeaderInfo>
        <ShoppingCart 
          type='button'
          car={car}
          alt='Car'
        />
        <User   
          name='Saiby Alimentos' 
          text='Mi perfil'
          avatar={avatar}
          altAvatar='Avatar'
          type='button'
        />
      </HeaderInfo>
    </HeaderDiv>
  );
};

export default Header;