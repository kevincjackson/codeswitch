import React, { Component } from "react";
const server = "http://localhost:3000";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirm: "",
      username: ""
    };
  }

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onPasswordConfirmChange = event => {
    this.setState({ password_confirm: event.target.value });
  };

  onSubmit = () => {
    // Client Validation
    const { email, password, password_confirm, username } = this.state
    // Validates non-blanks
    if (!email || !password || !password_confirm || !username) {
      return;
    }
    // Validate passwords match
    const errors = [];
    if (password !== password_confirm) {
      errors.push("Ooops! Passwords don't match.")
    }
    if (errors.length !== 0) {
      alert(errors);
      return;
    }

    // Request object
    const req = {
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
      method: "post"
    };

    // Server validation
    fetch(server + "/signup", req)
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.setUser(user);
        } else {
          alert("Doh!\n" + user.join("\n"));
        }
        return;
      })
      .catch(err => alert("Doh! Network error."));
  };

  render() {
    return (
      <div>
        <main className="pa4 black-80">
          <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <h1 className="night">sign up</h1>
              <div className="mt3 night">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Username
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  id="username"
                  onChange={this.onUsernameChange}
                  name="username"
                  placeholder='"john"'
                  type="text"
                />
              </div>
              <div className="mt3 night">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  id="email"
                  name="email"
                  onChange={this.onEmailChange}
                  placeholder='"john@example.com"'
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
              <div className="mv3 night">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password Confirmation
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  id="password-confirm"
                  name="password-confirm"
                  onChange={this.onPasswordConfirmChange}
                  type="password"
                />
              </div>
            </fieldset>
            <div>
              <input
                className="b ba bw0 bg-white day f4 dib grow input-reset ph3 pointer pv2"
                onClick={this.onSubmit}
                type="submit"
                value="sign up"
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default SignUp;
