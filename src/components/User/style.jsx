import styled from 'styled-components';
import { WHITE, BLACK } from '../../styles';

export const HeaderAvatar = styled.img `
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const HeaderUser = styled.div `
  display: flex;
  align-items: center;
`

export const HeaderInfo = styled.div `
  margin-right: 10px;
`

export const HeaderInfoUser = styled.p `
  color: ${WHITE};
  margin: 0px;
  font-weight: bold;
`

export const HeaderProfile = styled.div `
  color: ${BLACK};
  margin: 0px;
  margin-right: 10px;
  font-size: 10px;
`

export const HeaderArrow = styled.button `
  background: none;
  color: inherit;
  border: none;
  padding: 0 0 10px 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

export const HeaderDropDown = styled.div ` 
   display: flex;
   justify-content: flex-end;
   align-items: center;
   height: 10px;
   margin-top: 3px;
`