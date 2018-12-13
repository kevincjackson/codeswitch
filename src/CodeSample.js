import React from "react";
import database from "./database";

const CodeSample = ({ feature_id, language_id }) => {

  const getLanguageName = () => {
      return database.languages.find(l => l.id === parseInt(language_id)).name
  }

  const getFeatureName = () => {
    return database.features.find(x => x.id === parseInt(feature_id)).name
  };

  const getLanguageFeatureEntries = () => {
      return database.code_samples
        .filter(x => x.feature_id === parseInt(feature_id))
        .filter(x => x.language_id === parseInt(language_id))
        .map(x => x.content)[0]
  }

  return (
    <div className="pa3">
      <h3>{getLanguageName()} {getFeatureName()}</h3>
      <pre><code>
        {
          getLanguageFeatureEntries()
        }
      </code></pre>
    </div>
  )
};

export default CodeSample;
