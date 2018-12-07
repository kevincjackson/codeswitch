import Description from "./Description";
import React from "react";
import SearchBar from "./SearchBar";

const Start = ({ onSearch }) => {
  return (
    <div>
      <Description />
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Start;
