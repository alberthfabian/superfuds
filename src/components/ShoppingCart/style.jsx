import styled from 'styled-components';
import { RED } from '../../styles';

export const HeaderButton = styled.button ` 
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-right: 70px;
  position: relative;
`

export const HeaderCar = styled.img `
  width: 30px;
  height: 30px;
`

export const Count = styled.div ` 
  border-radius: 50%;
  background-color: ${RED};
  width: 18px;
  height: 18px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 6px;
  bottom: -6px;
  font-size: 10px;
`