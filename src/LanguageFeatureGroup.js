import React from "react";
import CodeSample from "./CodeSample";

const LanguageFeatureGroup = ({ feature, language, code_samples }) => {
  const feature_name = feature ? feature.name : "Unknown Feature";
  const language_name = language ? language.name : "Unknown Language";
  let body;

  if (code_samples.length) {
    body = code_samples.map(cs => <CodeSample key={cs.id} codeSample={cs} />);
  } else {
    body = <div>No results.</div>;
  }

  return (
    <div>
      <h2>
        {language_name} {feature_name}
      </h2>
      {body}
    </div>
  );
};

export default LanguageFeatureGroup;
