import React from "react";

class LanguageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user: this.props.user
    };
  }

  onCancel = event => {
    this.props.setRoute("start");
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = () =>
    this.props.onLanguageSubmit(this.state.name, this.state.user);

  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure-wide center">
            <fieldset
              id="code-sample-form"
              className="ba b--transparent ph0 mh0"
            >
              <h1 className="night">new language</h1>
              <div className="mt3 night">
                <input
                  autoFocus={true}
                  className="pa2 input-reset bn w-100"
                  id="name"
                  name="name"
                  onChange={this.onNameChange}
                  placeholder="name of new language"
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

export default LanguageForm;
