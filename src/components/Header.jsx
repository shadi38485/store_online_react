import React from "react";
import logo from "../assets/images/logo.svg";

//Properties ---> props
const Header = ({ x, y }) => {

  return (
    <header>
      <div className="logo-box">
        <a href="index.html">
          <img src={logo} alt="" height="100px" width="100px" />
        </a>
      </div>
      <h1>{x+y}</h1>
      <nav className="top-nav">
        <a className="nav-link" href="">
          Store
        </a>
        <a className="nav-link" href="">
          Mac
        </a>
        <a className="nav-link" href="">
          iPad
        </a>
        <a className="nav-link" href="">
          iPhone
        </a>
        <a className="nav-link" href="">
          Watch
        </a>
        <a className="nav-link" href="">
          Vision
        </a>
        <a className="nav-link" href="">
          Airpod
        </a>
        <a className="nav-link" href="">
          tv&home
        </a>
        <a className="nav-link" href="">
          Entertaiment
        </a>
        <a className="nav-link" href="">
          {" "}
          suport
        </a>
      </nav>
      {/* <div className="grand-parents"> */}
      <div className="icons">
        {/* <img src="assets/images/icons/search.svg" alt="" height="40px" />  */}

        <i className="fa-solid fa-magnifying-glass"></i>

        <div className="cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className="totall">1</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const sum=(x,y)=> {
//   return x+y
// }
