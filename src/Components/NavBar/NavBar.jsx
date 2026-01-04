import React, { useState } from 'react';
import './NavBar.css';
import underline from '../../assets/mainpic.jpeg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavBar = () => {
  const [menu, setMenu] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = (menuItem) => {
    setMenu(menuItem);
    setIsMenuOpen(false); // Close the hamburger menu
  };

  return (
    <div className="navbar">
      <h1>Think academies</h1>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={() => handleLinkClick('home')}>
            <p>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={() => handleLinkClick('about')}>
            <p>About</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" onClick={() => handleLinkClick('services')}>
            <p>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={() => handleLinkClick('work')}>
            <p>Work</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt="" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => handleLinkClick('contact')}>
            <p>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt="" /> : null}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={() => setIsMenuOpen(false)}>
          Connect with Us
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
