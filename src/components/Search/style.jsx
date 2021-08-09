import styled from 'styled-components';
import { DEVICE } from '../../styles';

export const SearchJoin = styled.div `
  position: relative;
  /* @media ${DEVICE.laptop} {
    display: none;
  } */
`

export const SearchInput = styled.input ` 
  width: 500px;
  height: 20px;
  border-radius: 40px;
  padding: 2px 15px 2px 15px;
  :focus {
    border: 0px;
    outline: none;
  }
  @media ${DEVICE.laptopL} {
    width: 400px;
  }
  @media ${DEVICE.laptop} {
    width: 300px;
  }
  @media ${DEVICE.tablet} {
    display: none;
  }
`

export const Glass = styled.div `
  position: absolute;
  top: 1px;
  right: 10px;
  @media ${DEVICE.tablet} {
    display: none;
  }
`