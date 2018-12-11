import React from "react";
import database from "./database";

const CodeSample = ({ feature_id, language_id }) => {
  return (
    <div>
      <pre><code>
        {
          database.code_samples
          .filter(x => x.feature_id === parseInt(feature_id))
          .filter(x => x.language_id === parseInt(language_id))
          .map(x => x.content)[0]
        }
      </code></pre>
    </div>
  )
};

export default CodeSample;
