import React from "react";
import SearchBar from "./SearchBar";

const Search = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <p>Results</p>
    </div>
  )
};

export default Search;
