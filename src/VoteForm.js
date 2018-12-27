import React from "react";
const server = "http://localhost:3000";

class VoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctness: "novote",
      design: "novote",
      style: "novote",
    };
  }

  componentDidMount() {
  };

  onCancel = this.props.hideVoteForm;

  onCorrectnessChange = event => {
    this.setState({ correctness: event.target.value });
  };

  onDesignChange = event => {
    this.setState({ design: event.target.value });
  };

  onStyleChange = event => {
    this.setState({ style: event.target.value });
  };

  onSubmit = event => {
    const { correctness, design, style } = this.state;
    const { cs_id, fetchCodeSample, hideVoteForm, user_id } = this.props;

    // Client Validation
    // Validates non-blanks
    if (!correctness || !cs_id || !design || !style) {
      return;
    }

    // Validate user
    if (!user_id) {
      alert("Ooops! Please sign in or sign up first.");
      return;
    }

    // Server submit
    fetch(server + "/vote", {
      body: JSON.stringify({
        correctness,
        cs_id,
        design,
        style,
        user_id
      }),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(res => {
        if (res.ok) {
          fetchCodeSample();
          hideVoteForm();
        } else {
          alert("Vote submit failed.");
        }
      })
      .catch(err => alert("Server can't be reached."));
  };

  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure-wide center">
            <fieldset id="vote-form" className="ba b--transparent ph0 mh0">
              <h1 className="night">vote</h1>
              <div className="white">
                <h2 className="white">Correctness</h2>
                <label className="db ma3 white-50">
                  The code sample works.
                </label>
                <input
                  name="correctness"
                  onChange={this.onCorrectnessChange}
                  type="radio"
                  value="upvote"
                />
                Upvote
                <br />
                <input
                  name="correctness"
                  onChange={this.onCorrectnessChange}
                  type="radio"
                  value="novote"
                />
                Novote
                <br />
                <input
                  name="correctness"
                  onChange={this.onCorrectnessChange}
                  type="radio"
                  value="downvote"
                />
                Downvote
                <br />
              </div>
              <div className="white">
                <h2 className="white">Design</h2>
                <label className="db ma3 white-50">
                  The code sample indicates when it should be used. It is
                  a good pattern for usage, and contains other good patterns
                  for usage (if appropriate). Symbols or variables (if used) are
                  named well. The majority in the given language community would
                  consider this an ideal implementation for it's stated time
                  and place.
                </label>
                <input
                  name="design"
                  onChange={this.onDesignChange}
                  type="radio"
                  value="upvote"
                />
                Upvote
                <br />
                <input
                  name="design"
                  onChange={this.onDesignChange}
                  type="radio"
                  value="novote"
                />
                Novote
                <br />
                <input
                  name="design"
                  onChange={this.onDesignChange}
                  type="radio"
                  value="downvote"
                />
                Downvote
                <br />
              </div>
              <div className="white">
                <h2 className="white">Style</h2>
                <label className="db ma3 white-50">
                  The code sample shows good punctuation, spacing and syntax. It
                  looks good!   It's what the majority in the given language
                  community would expect to see.
                </label>
                <input
                  name="style"
                  onChange={this.onStyleChange}
                  type="radio"
                  value="upvote"
                />
                Upvote
                <br />
                <input
                  name="style"
                  onChange={this.onStyleChange}
                  type="radio"
                  value="novote"
                />
                Novote
                <br />
                <input
                  name="style"
                  onChange={this.onStyleChange}
                  type="radio"
                  value="downvote"
                />
                Downvote
                <br />
              </div>
            </fieldset>
            <div className="ma1">
              <button
                className="bn dib f5 dim grow link mb2 mr4 night ph2 pv1 underline white-40"
                onClick={this.onCancel}
              >
                cancel
              </button>
              <input
                className="b ba bw0 dib f5 grow input-reset ph3 pointer pv2 bg-green white"
                onClick={this.onSubmit}
                type="submit"
                value="Done"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default VoteForm;
