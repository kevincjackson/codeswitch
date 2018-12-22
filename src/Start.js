import Description from "./Description";
import React from "react";
import SearchBar from "./SearchBar";

const Start = ({ features, languages, setSearch }) => {
  return (
    <div>
      <Description />
      <SearchBar
        features={features}
        feature_ids={[]}
        languages={languages}
        language_ids={[]}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Start;
