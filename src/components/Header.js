import React from "react";

const Header = () => {
    console.log("Header");
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
      <img
      className="w-44"
        src="https://www.shutterstock.com/image-vector/netflix-logo-popular-american-streaming-260nw-2308205585.jpg"
        alt="header_logo"
      />
    </div>
  );
};

export default Header;
