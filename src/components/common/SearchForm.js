import React from 'react';

const SearchForm = ({placeholder, defaultValue, handleSearchFormSubmit}) => {
  return(
    <form className="form searchForm" onSubmit={(e) => handleSearchFormSubmit(e)}>
      <input type="text" defaultValue={defaultValue} placeholder={placeholder} className="search"/>
      <button type="submit" className="buttonPrimary">Find</button>
    </form>
  );
};

export default SearchForm;
