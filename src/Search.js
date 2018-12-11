import CodeSample from "./CodeSample";
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
      { features.map((feature, index) => {
          return (
            <div key={index} className="flex flex-wrap ma3 items-center justify-center">
              {
                languages.map(language => {
                    return (
                      <CodeSample
                        feature_id={feature}
                        language_id={language}
                      />
                    )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
};

export default Search;
