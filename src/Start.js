import Description from "./Description";
import React from "react";
import SearchBar from "./SearchBar";

const Start = ({ feature_ids, language_ids, setSearch }) => {
  return (
    <div>
      <Description />
      <SearchBar feature_ids={[]} language_ids={[]} setSearch={setSearch} />
    </div>
  );
};

export default Start;
