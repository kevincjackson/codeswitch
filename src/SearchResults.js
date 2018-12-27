import React from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";

const SearchResults = ({
  features,
  feature_ids,
  languages,
  language_ids,
  setRoute,
  setSearch,
  user
}) => {
  return (
    <div>
      <SearchBar
        features={features}
        feature_ids={feature_ids}
        languages={languages}
        language_ids={language_ids}
        setSearch={setSearch}
      />
      <Results
        features={features}
        feature_ids={feature_ids}
        languages={languages}
        language_ids={language_ids}
        setRoute={setRoute}
        user={user}
      />
    </div>
  );
};

export default SearchResults;
