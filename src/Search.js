import CodeSample from "./CodeSample";
import React from "react";
import SearchBar from "./SearchBar";

const Search = ({ feature_ids, language_ids, setSearch }) => {
  return (
    <div>
      <SearchBar
        feature_ids={feature_ids}
        language_ids={language_ids}
        setSearch={setSearch}
      />
      {feature_ids.map((feat, index) => {
        return (
          <div
            key={index}
            className="flex flex-wrap ma3 items-start justify-center"
          >
            {language_ids.map((lang, index) => {
              return (
                <CodeSample
                  key={index}
                  feature_id={feat}
                  language_id={lang}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Search;
