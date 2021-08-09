import styled from 'styled-components';
import { PRIMARY, WHITE, DEVICE } from '../../styles';

export const FooterMain = styled.div `
  display: flex;
  justify-content: center;
`

export const Foot = styled.div `
  background-color: ${PRIMARY};
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  width: 90%;
  @media ${DEVICE.tablet} {
    width: 85%;
  }
  @media ${DEVICE.mobileL} {
    width: 70%;
  }
  @media ${DEVICE.mobileM} {
    width: 60%;
  }
`