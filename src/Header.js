import React from "react";

const Header = ({ onHomeClick, onRouteChange }) => {
  return (
    <div className="flex justify-between items-center">
      <a onClick={onHomeClick} className="link dim dib grow night" href="./#">
        <span className="f3 night">code</span>
        <span className="f3 day">⇆</span>
      </a>
      <a
        onClick={() => {
          onRouteChange("signin");
        }}
        className="f4 dim dib link grow night"
        href="./#"
      >
        sign in{" "}
      </a>
    </div>
  );
};

export default Header;
