import React from 'react';
import { SearchInput, SearchJoin, Glass } from './style';

const Search = ({type, placeholder}) => {
  return (
    <SearchJoin>
      <SearchInput 
        type={type}
        placeholder={placeholder}
      />
      <Glass>&#128269;</Glass>
    </SearchJoin>
  )
}

export default Search;
