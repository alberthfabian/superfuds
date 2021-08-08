import styled from 'styled-components';
import { PRIMARY, WHITE } from '../../styles';

export const CardDivHover = styled.button `
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 30px;
  background-color: red;
  margin: 0px;
  left: 0px;
  bottom: -30px;
  border-radius: 4px;
  background-color: ${PRIMARY};
  color: ${WHITE};
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`