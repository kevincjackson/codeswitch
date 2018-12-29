import React from "react";

const Header = ({ setUser, onHomeClick, setRoute, user }) => {
  const userLink = () => {
    if (!user) {
      return false;
    } else {
      return (
        <div>
          <button
            className="ba br-pill day dib dim f6 grow link ma1 ph2 pv1"
            onClick={() => setRoute("languageForm")}
            title="Add Language"
          >
            +L
          </button>
          <button
            className="ba br-pill day dib dim f6 grow link ma1 ph2 pv1"
            onClick={() => setRoute("featureForm")}
            title="Add Feature"
          >
            +F
          </button>
          <button
            className="ba br-pill day dib dim f6 grow link ma1 ph2 pv1"
            onClick={() => setRoute("codeSampleForm")}
            title="Add Code Sample"
          >
            +C
          </button>
          <span className="f4">{user.username}</span>
          <button
            className="ba dib dim br-pill f6 grow link ma1 night ph2 pv1"
            onClick={() => setUser(null)}
            title="Logout"
          >
            x
          </button>
        </div>
      );
    }
  };

  const signInLink = () => {
    return (
      <button
        className="bn f4 dim dib link grow night underline"
        onClick={() => {
          setRoute("signin");
        }}
      >
        sign in
      </button>
    );
  };

  return (
    <div className="flex justify-between items-center">
      <button
        className="bn link dim dib grow night"
        onClick={onHomeClick}
        title="home"
      >
        <span className="f3 night">c</span>
        <span className="f3 day">s</span>
      </button>
      {userLink() || signInLink()}
    </div>
  );
};

export default Header;
