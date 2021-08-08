import styled from 'styled-components';
import { GREY_LIGHT, PRIMARY } from '../../styles';

export const Modal = styled.div ` 
  position: absolute;
  background-color: ${GREY_LIGHT};
  width: 100%;
  height:  100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div ` 
  width: 700px;
  border: 1px solid red;
`

export const Head = styled.div ` 
  padding: 10px;
  button {
    color: ${PRIMARY};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    margin-right: 10px;
  }
`