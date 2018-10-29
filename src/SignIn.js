import React from "react";

const SignIn = () => {
  return (
    <div>
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <h1 className="night">sign in</h1>
            <div className="mt3 night">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3 night">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div>
            <input
              className="b ba bw0 bg-white day f4 dib grow input-reset ph3 pointer pv2"
              type="submit"
              value="sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim white db grow">
              sign up
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
// className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib"
