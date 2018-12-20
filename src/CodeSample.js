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

  const codeSample = database.code_samples
    .filter(cs => cs.feature_id === parseInt(feature_id))
    .filter(cs => cs.language_id === parseInt(language_id))[0];

  return (
    <div className="pa3">
      <h3>
        {getLanguageName()} {getFeatureName()}
      </h3>
      <pre>
        <code>{codeSample.content}</code>
      </pre>
      <div className="flex justify-between">
        <div className="measure-narrow">
          <div className="flex justify-between">
            <span
              aria-label="vote"
              role="img"
              title="vote">&#9650;
            </span>
            <span
              aria-label="vote"
              role="img"
              title="vote">&#9660;
            </span>
            <span>
              6
            </span>
            <div>
              <span
                aria-label="Correctness"
                role="img"
                title="Correctness">&#10003;
              </span>
              <sup>
                {codeSample.correctness_upvotes.length -
                  codeSample.correctness_downvotes.length}
              </sup>
            </div>
            <div>
              <span
                aria-label="Design"
                role="img"
                title="Design">&#128208;</span>
              <sup>
                {codeSample.design_upvotes.length -
                  codeSample.design_downvotes.length}
              </sup>
            </div>
            <div>
              <span
                className="stylized-cursive"
                title="Style">
                S
              </span>
              <sup>
                {codeSample.style_upvotes.length -
                  codeSample.style_downvotes.length}
              </sup>
            </div>
          </div>
        </div>
        <div>w00tw00t</div>
      </div>
    </div>
  );
};

export default CodeSample;
