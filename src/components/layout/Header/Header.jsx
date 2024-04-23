import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Header.css";
import Navbar from "../Navbar";
//Properties ---> props
const Header = ({totalQty}) => {
  return (
    <header className="header">
      <div className="logo-box">
        <a href="index.html">
          <img src={logo} alt="" height="70px" width="70px" />
        </a>
      </div>
       <Navbar/>
      <div className="icons">
        <div className="register">
          <i className="bi bi-person"></i>
        </div>
        <div className="cart">
          <i className="bi bi-bag"></i>
          <span className="qty-total">{totalQty}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const sum=(x,y)=> {
//   return x+y
// }
