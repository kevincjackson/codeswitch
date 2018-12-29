import React from "react";
const server = "http://localhost:3000";

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
    // Client Validation
    const valid = this.state.email && this.state.password;
    if (!valid) {
      return;
    }

    // Server Submit
    fetch(server + "/signin", {
      body: JSON.stringify(this.state),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.setUser(user);
        } else {
          alert("Ooops! Login failed.");
        }
        return;
      })
      .catch(err => alert("Doh! Network error."));
  };

  render() {
    const { setRoute } = this.props;
    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure center">
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
          </div>
        </main>
      </div>
    );
  }
}

export default SignIn;
