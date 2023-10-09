import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine  } from 'react-icons/ri'
import './navbar.css';
import logo from'../../assets/logowhite.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='medic__navbar'>
      <div className='medic__navbar-links'>
        <div className='medic__navbar-links_logo'>

          <img src={logo} alt='logo' />

        </div>

        <div className='medic__navbar-links_container'>
        <p><a href="#home">Home</a></p>
          <p><a href="#whatMedic">What is Medic?</a></p>
          <p><a href="#possibility">CURE Corp</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>

        </div>
        </div>
        <div className='medic__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
        </div>
        <div className="medic__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="medic__navbar-menu_container scale-up-center">
          <div className="medic__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
         
          <div className="medic__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        </div>
        
        
        )}

     </div>
     </div>
     
  
  
  );
 
 
}

export default Navbar;
