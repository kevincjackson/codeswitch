import Description from "./Description";
import React from "react";
import SearchBar from "./SearchBar";

const Start = ({ features, languages, setSearch }) => {
  return (
    <div>
      <Description />
      <SearchBar
        features={[]}
        languages={[]}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Start;
