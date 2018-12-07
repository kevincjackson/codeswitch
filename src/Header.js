import React from "react";

const Header = ({ loadUser, onHomeClick, onRouteChange, user }) => {
  const userLink = () => {
    if (!user) {
      return false;
    } else {
      return (
        <div>
          <a
            className="f6 link dim br-pill ba grow ph2 pv1 mb2 mr2 dib white-10"
            href="./#"
            onClick={() => loadUser(null)}
          >
            x
          </a>
          <span className="f4">{user.username}</span>
        </div>
      );
    }
  };

  const signInLink = () => {
    return (
      <a
        className="f4 dim dib link grow night underline"
        href="./#"
        onClick={() => {
          onRouteChange("signin");
        }}
      >
        sign in
      </a>
    );
  };

  return (
    <div className="flex justify-between items-center">
      <a onClick={onHomeClick} className="link dim dib grow night" href="./#">
        <span className="f3 night">code</span>
        <span className="f3 day">switch</span>
      </a>
      {userLink() || signInLink()}
    </div>
  );
};

export default Header;
