import React from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { navLinks } from "../assets";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <h1>ABHINAV.</h1>
        <Navbar />
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <RxDropdownMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  );
};

const Navbar = ({ setMenuOpen }) => {
  const handleClick = () => {
    if (setMenuOpen && typeof setMenuOpen === "function") {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div>
        {navLinks.map((link, index) => (
          <a key={index} onClick={handleClick} href={`#${link.id}`}>
            {link.title}
          </a>
        ))}
      </div>
      <a onClick={handleClick} href="mailto:abhinavmaurya476@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
