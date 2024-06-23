import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";

function Navbar() {
  const navRef = useRef();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="nav-header">
      <nav ref={navRef} className={showNav ? "responsive_nav" : ""}>
        <a href="/#" className="home_nav" style={{ fontSize: "20px" }}>
          Home
        </a>
        <a href="/#" style={{ fontSize: "20px" }}>
          Pets
        </a>
        <a href="/#" style={{ fontSize: "20px" }}>
          About us
        </a>
        <a href="/#" className="contact_nav" style={{ fontSize: "20px" }}>
          Contact
        </a>
      </nav>
      <button className="nav-btn" onClick={toggleNav}>
        {showNav ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
