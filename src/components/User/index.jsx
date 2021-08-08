import React from 'react';
import {
  HeaderAvatar, 
  HeaderUser, 
  HeaderInfo, 
  HeaderInfoUser, 
  HeaderProfile,
  HeaderArrow,
  HeaderDropDown,
} from './style';

const User = ({
  name,
  text,
  avatar,
  altAvatar,
  type
}) => {
  return (
    <HeaderUser>
      <HeaderInfo>
        <HeaderInfoUser>{name}</HeaderInfoUser>
        <HeaderDropDown>
          <HeaderProfile>{text}</HeaderProfile>
          <HeaderArrow type={type}>&#8964;</HeaderArrow>
        </HeaderDropDown>
      </HeaderInfo>
      <HeaderAvatar src={avatar} alt={altAvatar} />
    </HeaderUser>
  );
};

export default User;
