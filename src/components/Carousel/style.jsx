import styled from 'styled-components';
import { DEVICE } from '../../styles';

export const CarouselDiv = styled.div ` 
  display: flex;
  position: relative;
  align-items: center;
`

export const CarouselFrame = styled.div ` 
  display: flex;
  justify-content: center;
  width: 1100px;
  height: 350px;
  overflow: hidden;
  margin: auto;
  @media ${DEVICE.laptop} {
    width: 700px;
  }
  @media ${DEVICE.tablet} {
    width: 400px;
  }
  @media ${DEVICE.mobileL} {
    width: 200px;
  }
`