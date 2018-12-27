import React, { Component } from "react";
import VoteForm from "./VoteForm";
const server = "http://localhost:3000";

class CodeSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeSample: this.props.initialCodeSample,
      voteFormIsVisible: false
    };
  }

  fetchCodeSample = () => {
    fetch(server + "/code_samples/" + this.state.codeSample.id)
      .then(resp => resp.json())
      .then(cs => this.setState({ codeSample: cs }))
      .catch(err => alert("Server error: couldn't update code sample."))
  };

  getCorrectnessVotes = () => {
    const { codeSample } = this.state;
    return (
      codeSample.correctness_upvotes.length -
      codeSample.correctness_downvotes.length
    );
  };

  getDesignVotes = () => {
    const { codeSample } = this.state;
    return (
      codeSample.design_upvotes.length - codeSample.design_downvotes.length
    );
  };

  getStyleVotes = () => {
    const { codeSample } = this.state;
    return codeSample.style_upvotes.length - codeSample.style_downvotes.length;
  };

  getUpvotes = () => {
    const { codeSample } = this.state;
    return (
      codeSample.correctness_upvotes.length +
      codeSample.design_upvotes.length +
      codeSample.style_upvotes.length
    );
  };

  getDownvotes = () => {
    const { codeSample } = this.state;
    return (
      codeSample.correctness_downvotes.length +
      codeSample.design_downvotes.length +
      codeSample.style_downvotes.length
    );
  };

  hideVoteForm = () => {
    this.setState({ voteFormIsVisible: false });
  };

  showVoteForm = () => {
    const { user } = this.props;
    if (!user) {
      alert("Please sign in to vote.");
    } else {
      this.setState({ voteFormIsVisible: true });
    }
  };

  render() {
    const { user } = this.props;
    const { codeSample } = this.state;
    let maybeVoteForm;
    if (this.state.voteFormIsVisible) {
      maybeVoteForm = (
        <VoteForm
          user_id={user.id}
          cs_id={codeSample.id}
          fetchCodeSample={this.fetchCodeSample}
          hideVoteForm={this.hideVoteForm}
        />
      );
    } else {
      maybeVoteForm = null;
    }
    return (
      <div className="pa3">
        <pre>
          <code>{codeSample.content}</code>
        </pre>
        <div className="flex justify-between">
          <div className="measure-narrow">
            <div className="flex justify-between">
              <div className="mr1">
                <span
                  aria-label="upvote"
                  className="f5"
                  role="img"
                  title="upvote"
                >
                  &#9650;
                </span>
                <span className="f5">{this.getUpvotes()}</span>
              </div>
              <div className="mr1">
                <span
                  aria-label="downvote"
                  className="f5"
                  role="img"
                  title="downvote"
                >
                  &#9660;
                </span>
                <span className="f5">{this.getDownvotes()}</span>
              </div>
              <div className="mr1">
                <span aria-label="Correctness" role="img" title="Correctness">
                  &#10003;
                </span>
                <span>{this.getCorrectnessVotes()}</span>
              </div>
              <div className="mr1">
                <span aria-label="Design" role="img" title="Design">
                  &#128208;
                </span>
                <span>{this.getDesignVotes()}</span>
              </div>
              <div className="mr1">
                <span className="stylized-cursive" title="Style">
                  S
                </span>
                <span>{this.getStyleVotes()}</span>
              </div>
              <div className="mr1">
                <button
                  className="bn dim dib f6 link grow night underline"
                  onClick={this.showVoteForm}
                >
                  vote
                </button>
              </div>
            </div>
          </div>
          <div>w00tw00t</div>
        </div>
        {maybeVoteForm}
      </div>
    );
  }
}

export default CodeSample;
