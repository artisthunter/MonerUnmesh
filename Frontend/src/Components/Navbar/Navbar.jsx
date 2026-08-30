import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Who we are</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/member">Member</Link>
        <Link to="/query">Query</Link>
        <Link to="/collaboration">Collaboration</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/recruitment">Recruitment</Link>
        <Link to="/donation">Donation</Link>
      </div>

      <div className="lang-switch-container" onClick={handleLanguageToggle}>
        <div
          className={`lang-slider ${language === "bn" ? "slide-right" : ""}`}
        >
          <div className="slider-circle"></div>
        </div>
        <span className={`lang-label ${language === "en" ? "active" : ""}`}>
          ENG
        </span>
        <span className={`lang-label ${language === "bn" ? "active" : ""}`}>
          বাংলা
        </span>
      </div>

      <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        ref={mobileMenuRef}
      >
        <Link to="/" onClick={closeMenu}>
          Who we are
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/member" onClick={closeMenu}>
          Member
        </Link>
        <Link to="/query" onClick={closeMenu}>
          Query
        </Link>
        <Link to="/collaboration" onClick={closeMenu}>
          Collaboration
        </Link>
        <Link to="/admission" onClick={closeMenu}>
          Admission
        </Link>
        <Link to="/recruitment" onClick={closeMenu}>
          Recruitment
        </Link>
        <Link to="/donation" onClick={closeMenu}>
          Donation
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
