import React from "react";
import CodeSample from "./CodeSample";

const LanguageFeatureGroup = ({
  code_samples,
  feature,
  language,
  setRoute,
  user,
  usernames
}) => {
  const feature_name = feature ? feature.name : "Unknown Feature";
  const language_name = language ? language.name : "Unknown Language";
  let body;

  if (code_samples.length) {
    body = code_samples.map(cs => {
      const cs_user = usernames.find(user => user.id === cs.user_id);
      const cs_username = cs_user ? cs_user.username : "Unknown User";
      return (
        <CodeSample
          key={cs.id}
          initialCodeSample={cs}
          setRoute={setRoute}
          user={user}
          username={cs_username}
        />
      );
    });
  } else {
    body = <div>No results.</div>;
  }

  return (
    <div className="mb5">
      <h2>
        {language_name} {feature_name}
      </h2>
      {body}
    </div>
  );
};

export default LanguageFeatureGroup;
