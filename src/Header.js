import React from "react";

const Header = ({ onHomeClick }) => {
  return (
    <div className="flex justify-between items-center">
      <a onClick={onHomeClick} className="link dim dib grow night" href="./#">
        <span className="f3 night">code</span>
        <span className="f3 day">⇆</span>
      </a>
      <div className="f4">sign in</div>
    </div>
  );
};

export default Header;
