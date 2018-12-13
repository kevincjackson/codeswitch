import React from "react";
import database from "./database";

const CodeSample = ({ feature_id, language_id }) => {
  const getLanguageName = () => {
    return database.languages.find(lang => lang.id === parseInt(language_id))
      .name;
  };

  const getFeatureName = () => {
    return database.features.find(feat => feat.id === parseInt(feature_id))
      .name;
  };

  const getLanguageFeatureEntries = () => {
    return database.code_samples
      .filter(cs => cs.feature_id === parseInt(feature_id))
      .filter(cs => cs.language_id === parseInt(language_id))
      .map(cs => cs.content)[0];
  };

  return (
    <div className="pa3">
      <h3>
        {getLanguageName()} {getFeatureName()}
      </h3>
      <pre>
        <code>{getLanguageFeatureEntries()}</code>
      </pre>
    </div>
  );
};

export default CodeSample;
