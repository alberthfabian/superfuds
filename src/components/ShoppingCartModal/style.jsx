import styled from 'styled-components';
import { BLACK, GREY, GREY_LIGHT, PRIMARY, WHITE } from '../../styles';

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
  border: 1px solid ${BLACK};
  border-radius: 10px;
  background-color: ${WHITE};
  padding-bottom: 80px;
`

export const Head = styled.div ` 
  padding: 16px;
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

export const Body = styled.div ` 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 16px;
`

export const Table = styled.table  `
  margin-left: 16px;
  border-collapse: collapse;
  width: 95%;
`


export const Th = styled.th  `
  text-align: start;
`

export const TrTitle = styled.tr ` 
  margin-bottom: 10px;
`

export const Tr = styled.tr ` 
  align-items: center;
  margin-bottom: 10px;
  :nth-child(even) {
    background-color: ${GREY_LIGHT};
  }
`

export const Td = styled.td `

`

export const TableDelete = styled.button `
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  img {
    width: 20px;
    height: 20px;
  }
`

export const TdImg = styled.td `

`

export const TableImg = styled.img `
  width: 80px;
  height: 80px;
`

export const TableProduct = styled.img `
  width: 50px;
  height: 50px;
  position: absolute;
`

export const TableDivImg = styled.div `
  display: flex;
  justify-content: center;
  position: relative;
  left: 262%;
  top: 10px;
`

export const TdData = styled.td `
  display: flex;
  max-width: 200px;
`

export const ContainerDiv = styled.div ` 
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;
`

export const TableTitle = styled.p `
  font-weight: 600;
  margin: 0px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const TableInits = styled.p ` 
  margin: 4px 0px ;
  font-size: 14px;
  color: ${GREY};
`

export const TableSupplier = styled.p ` 
  color: ${PRIMARY};
  font-weight: 600;
  margin: 0px;
`

export const TdCount = styled.td `

`

export const TableImgButton = styled.img `
  width: 20px;
  height: 20px;
  padding: 0px 5px 0px 5px;
`

export const ButtonImg = styled.button `
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`