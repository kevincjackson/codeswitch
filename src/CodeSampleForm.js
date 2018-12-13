import React from "react";
import database from "./database";

class CodeSampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      feature_id: "",
      language_id: ""
    };
  }

  onContentChange = event => {
    this.setState({ content: event.target.value });
  };

  onFeatureChange = (event) => {
    const element = document.getElementsByName("features")[0];
    const value = Array.from(element.selectedOptions).map(v=>v.value);
    this.setState({ feature_id: value });
  }

  onLanguageChange = (event) => {
    const element = document.getElementsByName("languages")[0];
    const value = Array.from(element.selectedOptions).map(v=>v.value);
    this.setState({ language_id: value });
  }
  // onSignInSubmit = event => {
  //   event.preventDefault();
  //
  //   // Validate the user entered something
  //   const submitIsEnabled = (this.state.email && this.state.password) ? true : false
  //   if (!submitIsEnabled) {
  //     return;
  //   }
  //
  //   const user = database.users.find(
  //     user =>
  //       user.email === this.state.email && user.hash === this.state.password
  //   );
  //   if (user) {
  //     this.props.loadUser(user);
  //   } else {
  //     alert("Oops. Incorrect login or password.");
  //   }
  // };

  render() {

    const { onRouteChange } = this.props;

    const language_options = database.languages.map(lan => {
      return <option key={lan.id} value={lan.id}>{lan.name}</option>
    })

    const feature_options = database.features.map(fea => {
      return <option key={fea.id} value={fea.id}>{fea.name}</option>
    })

    return (
      <div>
        <main className="pa4 black-80">
          <form className="measure center" onChange={this.onFormChange}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <h1 className="night">new code sample</h1>

              <div className="mt3 night">
                <label className="db fw6 lh-copy f6" htmlFor="content">
                  Content
                </label>
                <textarea
                  className="pa2 input-reset ba bg-black white w-100"
                  id="content"
                  autoFocus={true} 
                  onChange={this.onContentChange}
                  name="content"
                  rows="20"
                />
              </div>
              <div>
                <label className="db fw6 lh-copy f6 white" htmlFor="language">
                  Language
                </label>
                <select
                  className="mv1 ph1 pv2 dib v-mid"
                  name="languages"
                  onChange={this.onLanguageChange}
                  value={this.state.language_id}
                >
                  <option disabled value="" />
                  {language_options}
                </select>
              </div>
              <div>
                <label className="db fw6 lh-copy f6 white" htmlFor="feature">
                  Feature
                </label>
                <select
                  className="mv1 ph1 pv2 dib v-mid"
                  name="features"
                  onChange={this.onFeatureChange}
                  value={this.state.feature_id}
                >
                  <option disabled value="" />
                  {feature_options}
                </select>
              </div>
            </fieldset>
            <div>
              <input
                className="b ba bw0 bg-white day f4 dib grow input-reset ph3 pointer pv2"
                onClick={() => alert(this.state.content)}
                value="Done"
                type="submit"
              />
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default CodeSampleForm;
