import React from "react";

const Search = ({ handleSearch, searchTerm }) => (
  <div>
    <label>Search Phonebook: </label>
    <input onChange={handleSearch} value={searchTerm} />
  </div>
);

export default Search;