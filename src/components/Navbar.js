import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import { NavLink } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => setOpenLinks(!openLinks);

  return (
    <div className="navbar" id={openLinks ? 'openNav' : 'closeNav'}>
      <div className="leftSide" id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
