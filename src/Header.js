import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <span className="f3 night">code</span>
        <span className="f3 day">⇆</span>
      </div>
      <div className="f4">sign in</div>
    </div>
  );
};

export default Header;
