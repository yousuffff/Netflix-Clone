import React from "react";

const Header = () => {
  return (
    <div className="absolute w-full z-10 bg-gradient-to-b from-black to-transparent">
      <div>
        <img
          className="h-12 my-5 mx-48"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/960px-Netflix_2015_logo.svg.png?20190206123158"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Header;
