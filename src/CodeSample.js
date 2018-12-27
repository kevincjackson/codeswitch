import React, { Component } from "react";
import VoteForm from "./VoteForm";
const server = "http://localhost:3000";

class CodeSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cs_id: this.props.initialCodeSample.id,
      codeSample: this.props.initialCodeSample,
      voteFormIsVisible: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.codeSample) {
      fetch(server + "/code_samples/" + this.state.cs_id)
        .then(resp => resp.json())
        .then(cs => this.setState({ codeSample: cs }))
        .catch(err => alert("Server error: couldn't reload code sample."));
    }
  }

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

  onVoteClick = () => {
    const new_state = !this.state.voteFormIsVisible;
    const { user } = this.props;
    if (new_state === false) {
      this.setState({ voteFormIsVisible: false });
    } else {
      if (user) {
        this.setState({ voteFormIsVisible: true });
      } else {
        alert("Please sign in to vote.");
        this.setState({ voteFormIsVisible: false });
      }
    }
  };

  resetCodeSample = () => {
    this.setState({ codeSample: null });
  };

  render() {
    const { user, username } = this.props;
    const { codeSample, voteFormIsVisible } = this.state;
    let maybeVoteForm;
    if (voteFormIsVisible && codeSample) {
      maybeVoteForm = (
        <VoteForm
          user_id={user.id}
          cs_id={codeSample.id}
          hideVoteForm={this.hideVoteForm}
          resetCodeSample={this.resetCodeSample}
        />
      );
    } else {
      maybeVoteForm = null;
    }
    if (codeSample) {
      return (
        <div className="pa3">
          <pre>
            <code>{codeSample.content}</code>
          </pre>
          <div className="flex justify-between">
            <div className="measure-narrow">
              <div className="flex justify-between">
                <div className="dib mr3">
                  <span aria-label="upvote" role="img" title="upvote">
                    &#9650;
                  </span>
                  <span>{this.getUpvotes()}</span>
                </div>
                <div className="dib mr3">
                  <span aria-label="downvote" role="img" title="downvote">
                    &#9660;
                  </span>
                  <span>{this.getDownvotes()}</span>
                </div>
                <div className="mr3">
                  <span aria-label="Correctness" role="img" title="Correctness">
                    &#10003;
                  </span>
                  <span>{this.getCorrectnessVotes()}</span>
                </div>
                <div className="mr3">
                  <span aria-label="Design" role="img" title="Design">
                    &#128208;
                  </span>
                  <span>{this.getDesignVotes()}</span>
                </div>
                <div className="mr3">
                  <span className="stylized-cursive" title="Style">
                    S
                  </span>
                  <span>{this.getStyleVotes()}</span>
                </div>
                <div className="mr3">
                  <button
                    className="bn dim dib f6 link grow night underline"
                    onClick={this.onVoteClick}
                  >
                    vote
                  </button>
                </div>
              </div>
            </div>
            <div>{username}</div>
          </div>
          {maybeVoteForm}
        </div>
      );
    } else {
      return <div>Reloading code sample.</div>;
    }
  }
}

export default CodeSample;
