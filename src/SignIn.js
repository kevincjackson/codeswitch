import React from "react";
import database from "./database";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSignInSubmit = event => {
    event.preventDefault();

    // Validate the user entered email, password
    const submitIsEnabled =
      this.state.email && this.state.password ? true : false;
    if (!submitIsEnabled) {
      return;
    }

    const user = database.users.find(
      user =>
        user.email === this.state.email && user.hash === this.state.password
    );
    if (user) {
      this.props.setUser(user);
    } else {
      alert("Oops. Incorrect login or password.");
    }
  };

  render() {
    const { setRoute } = this.props;
    return (
      <div>
        <main className="pa4 black-80">
          <form className="measure center" onChange={this.onFormChange}>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <h1 className="night">sign in</h1>
              <div className="mt3 night">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  id="email"
                  name="email"
                  onChange={this.onEmailChange}
                  type="email"
                />
              </div>
              <div className="mv3 night">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  id="password"
                  name="password"
                  onChange={this.onPasswordChange}
                  type="password"
                />
              </div>
            </fieldset>
            <div>
              <input
                className="b ba bw0 bg-white day f4 dib grow input-reset ph3 pointer pv2"
                onClick={this.onSignInSubmit}
                value="sign in"
                type="submit"
              />
            </div>
            <div className="mt4 tc">
              <button
                onClick={() => {
                  setRoute("signup");
                }}
                className="bn center db dim f6 mt3 grow link night underline white-50"
              >
                sign up
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default SignIn;
