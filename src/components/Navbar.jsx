import React from "react";

const Navbar = ({title, age}) => {
  return (
    <>
      <h2>{title} {age}</h2>
      <a href="">Home</a>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
    </>
  );
};

export default Navbar;
