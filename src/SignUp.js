import React from "react";

const SignUp = () => {
  return (
    <div>
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <h1 className="night">sign up</h1>
            <div className="mt3 night">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Username
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="username"
                name="username"
                type="text"
              />
            </div>
            <div className="mt3 night">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                id="email-address"
                name="email-address"
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
                type="password"
              />
            </div>
            <div className="mv3 night">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password Confirmation
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password-confirmation"
                id="password-confirmation"
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ba bw0 bg-white day f4 dib grow input-reset ph3 pointer pv2"
              onClick={event => {
                event.preventDefault();
                alert("TODO");
              }}
              type="submit"
              value="sign up"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignUp;
