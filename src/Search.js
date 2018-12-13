import CodeSample from "./CodeSample";
import React from "react";
import SearchBar from "./SearchBar";
import database from "./database";

const Search = ({ features, languages, setSearch }) => {

  return (
    <div>
      <SearchBar
        features={features}
        languages={languages}
        setSearch={setSearch}
      />
      {features.map((feature, index) => {

        return (
          <div
            key={index}
            className="flex flex-wrap ma3 items-start justify-center"
          >
            {languages.map((language, index) => {
              return <CodeSample key={index} feature_id={feature} language_id={language} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Search;
