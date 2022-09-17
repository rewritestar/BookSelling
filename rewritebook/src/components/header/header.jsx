import React from "react";
const Header = (props) => {
  return (
    <div>
      <img className="logo" src="images/logo_title.png" alt="logo" />
      <input type="text" className="search"></input>
      <button className="like"></button>
      <button className="cart"></button>
      <span className="cart_count"></span>
    </div>
  );
};

export default Header;
