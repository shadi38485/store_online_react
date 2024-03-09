import React from 'react'
import "./Footer.css"

const Footer = () => {

 const pStyle={background:"black", color:"white"}

  return (
    <footer>
      <p className="fs-3 pt-6 " style={pStyle}>
        Footer
      </p>
      <p className="copy-right" style={pStyle}>
        copyright 2024
      </p>
    </footer>
  );
}

export default Footer