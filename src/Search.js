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
      <div class="flex flex-wrap ma3 items-center justify-center">
        <div class="pa1">
          <pre><code>
            {database.code_samples[0].content}
          </code></pre>
        </div>
        <div class="pa1">
          <pre><code>
            {database.code_samples[1].content}
          </code></pre>
        </div>
        <div class="pa1">
          <pre><code>
            {database.code_samples[2].content}
          </code></pre>
        </div>
      </div>
    </div>
  )
};

export default Search;
