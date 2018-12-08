import React from "react";
import SearchBar from "./SearchBar";

const Search = ({ features, languages, setSearch }) => {
  return (
    <div>
      <SearchBar
        features={features}
        languages={languages}
        setSearch={setSearch}
      />
      <p>Results</p>
    </div>
  )
};

export default Search;
