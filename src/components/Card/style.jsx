import styled from 'styled-components';
import { PRIMARY, GREY } from '../../styles';

export const CardDiv = styled.div `
  position: relative;
  border: 0.5px solid ${PRIMARY};
  border-radius: 4px;
  width: 170px;
  height: 260px;
  margin: 20px;
  padding: 5px;
`

export const CardButton = styled.button ` 
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 168px;
  height: 170px;
  img {
    max-width: 168px;
    max-height: 170px;
  }
`

export const CardValue = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0px;
    color: ${PRIMARY};
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 18px;
    border-radius: 10px;
    background-color: ${PRIMARY};
    font-size: 12px;
  }
`

export const CardTitle = styled.p `
  margin: 5px 0px 2px 0px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const CardPrice = styled.p ` 
  margin: 2px 0px 0px 0px;
`

export const CardSign = styled.span `
  color: ${PRIMARY};
  font-weight: bold;
  font-size: 20px;
`

export const CardNumber = styled.span `
  font-weight: bold;
  font-size: 20px;
`

export const CardUnit = styled.span `
  color: ${GREY};
  font-size: 12px;
`