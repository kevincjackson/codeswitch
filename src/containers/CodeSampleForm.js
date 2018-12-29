import React from "react";
const server = "http://localhost:3000";

class CodeSampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      feature_id: "",
      language_id: "",
      source: "",
      user: this.props.user
    };
  }

  onCancel = event => {
    this.props.setRoute("start");
  };

  onContentChange = event => {
    this.setState({ content: event.target.value });
  };

  onFeatureChange = event => {
    const element = document.getElementsByName("featureSelector")[0];
    const value = Array.from(element.selectedOptions).map(v => v.value)[0];
    this.setState({ feature_id: value });
  };

  onLanguageChange = event => {
    const element = document.getElementsByName("languageSelector")[0];
    const value = Array.from(element.selectedOptions).map(v => v.value)[0];
    this.setState({ language_id: value });
  };

  onSourceChange = event => {
    this.setState({ source: event.target.value });
  };

  onSubmit = event => {
    const { content, feature_id, language_id, user, source } = this.state;

    // Client Validation
    // Validates non-blanks
    if (!content || !feature_id || !language_id) {
      return;
    }

    // Validate user
    if (!user) {
      alert("Ooop! Please sign in or sign up first.")
      return;
    }

    // Server submit
    fetch(server + "/code_samples", {
      body: JSON.stringify({
        content: content,
        feature_id: feature_id,
        language_id: language_id,
        source: source,
        user_id: user.id
      }),
      headers: { 'Content-Type': 'application/json' },
      method: "post"
    })
      .then(res => {
        if (res.ok) {
          this.props.setRoute("start");
          return;
        } else {
          alert("Server couldn't add code sample.");
        }
      })
      .catch(err => alert("Server can't be reached."));

  };

  render() {
    const language_options = this.props.languages.map(lang => {
      return (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      );
    });

    const feature_options = this.props.features.map(feat => {
      return (
        <option key={feat.id} value={feat.id}>
          {feat.name}
        </option>
      );
    });

    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure-wide center">
            <fieldset id="code-sample-form" className="ba b--transparent ph0 mh0">
              <h1 className="night">new code sample</h1>
              <div className="mt3 night">
                <textarea
                  autoFocus={true}
                  className="pa2 input-reset bn w-100"
                  id="content"
                  name="content"
                  onChange={this.onContentChange}
                  placeholder="your awesome code"
                  rows="20"
                />
              </div>
              <div>
                <label
                  className="di fw6 lh-copy f6 pa2 white"
                  htmlFor="language"
                >
                  Language
                </label>
                <select
                  className="mv1 ph1 pv2 dib v-mid"
                  name="languageSelector"
                  onChange={this.onLanguageChange}
                  value={this.state.language_id}
                >
                  <option disabled value="" />
                  {language_options}
                </select>
              </div>
              <div>
                <label
                  className="di fw6 lh-copy f6 pa2 white"
                  htmlFor="feature"
                >
                  Feature
                </label>
                <select
                  className="mv1 ph1 pv2 dib v-mid"
                  name="featureSelector"
                  onChange={this.onFeatureChange}
                  value={this.state.feature_id}
                >
                  <option disabled value="" />
                  {feature_options}
                </select>
              </div>
              <div className="mt3 night">
                <label
                  className="di fw6 lh-copy f6 pa2 white"
                  htmlFor="source"
                >
                  Source
                </label>
                <input
                  autoFocus={true}
                  className="pa2 input-reset bn measure w-100"
                  id="source"
                  name="source"
                  onChange={this.onSourceChange}
                  placeholder="credit or source if you didn't write this code"
                />
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

export default CodeSampleForm;
