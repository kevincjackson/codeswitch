import Description from "./Description";
import React from "react";
import SearchBar from "./SearchBar";

const Start = ({ features, languages, setSearch }) => {
  return (
    <div>
      <Description />
      <SearchBar
        features={features}
        langauges={languages}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Start;
