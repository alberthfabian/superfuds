import styled from 'styled-components';

export const SearchJoin = styled.div `
  position: relative;
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
`

export const Glass = styled.div `
  position: absolute;
  top: 1px;
  right: 10px;
`