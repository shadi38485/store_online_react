// function Header() {
//   return(
//     <header>
//         <h1>Header</h1>
//     </header>
//   )  
// }

// // function sum(x,y) {
// //   return x+y
// // }


// // export  {Header, sum}
// export default Header


import React from 'react'
import logo from "../assests/images/logo.svg"

const Header = () => {

  return (
    <header>
      <div class="logo-box">
        <a href="index.html">
          <img
            src={logo}
            alt=""
            height="100px"
            width="100px"
          />
        </a>
      </div>

      <nav class="top-nav">
        <a class="nav-link" href="">Store</a>
        <a class="nav-link" href="">Mac</a>
        <a class="nav-link" href="">iPad</a>
        <a class="nav-link" href="">iPhone</a>
        <a class="nav-link" href="">Watch</a>
        <a class="nav-link" href="">Vision</a>
        <a class="nav-link" href="">Airpod</a>
        <a class="nav-link" href="">tv&home</a>
        <a class="nav-link" href="">Entertaiment</a>
        <a class="nav-link" href=""> suport</a>
      </nav>
      {/* <div class="grand-parents"> */}
      <div class="icons">
        {/* <img src="assets/images/icons/search.svg" alt="" height="40px" />  */}

        <i class="fa-solid fa-magnifying-glass"></i>

        <div class="cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="totall">1</span>
        </div>
      </div>
    </header>
  )
}

export default Header


