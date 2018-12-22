import React from "react";

const CodeSample = ({ codeSample, feature, language }) => {
  const getCorrectnessVotes = () => {
    return (
      codeSample.correctness_upvotes.length -
      codeSample.correctness_downvotes.length
    );
  };

  const getDesignVotes = () => {
    return (
      codeSample.design_upvotes.length -
      codeSample.design_downvotes.length
    );
  };

  const getStyleVotes = () => {
    return (
      codeSample.style_upvotes.length -
      codeSample.style_downvotes.length
    );
  };

  const getUpvotes = () => {
    return (
      codeSample.correctness_upvotes.length +
      codeSample.design_upvotes.length +
      codeSample.style_upvotes.length
    );
  };

  const getDownvotes = () => {
    return (
      codeSample.correctness_downvotes.length +
      codeSample.design_downvotes.length +
      codeSample.style_downvotes.length
    );
  };

  return (
    <div className="pa3">
      <pre>
        <code>{codeSample.content}</code>
      </pre>
      <div className="flex justify-between">
        <div className="measure-narrow">
          <div className="flex justify-between">
            <span aria-label="upvote" role="img" title="upvote">
              &#9650;
            </span>
            <span>{getUpvotes()}</span>
            <span aria-label="downvote" role="img" title="downvote">
              &#9660;
            </span>
            <span>{getDownvotes()}</span>
            <div>
              <span aria-label="Correctness" role="img" title="Correctness">
                &#10003;
              </span>
              <sup>{getCorrectnessVotes()}</sup>
            </div>
            <div>
              <span aria-label="Design" role="img" title="Design">
                &#128208;
              </span>
              <sup>{getDesignVotes()}</sup>
            </div>
            <div>
              <span className="stylized-cursive" title="Style">
                S
              </span>
              <sup>{getStyleVotes()}</sup>
            </div>
          </div>
        </div>
        <div>w00tw00t</div>
      </div>
    </div>
  );
};

export default CodeSample;
