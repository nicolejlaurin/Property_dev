import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Img_logo from '../images/waveLogo.jpeg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { useLocation } from "react-router";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};


function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);
  return (

  <nav className='navbar' id="navbar">
      <div class="navbar-left">
         <a href="/" aria-current="page" class="w-inline-block w--current">
         <img class="logo" src={Img_logo} href='/' alt="Image"></img>
         </a>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fa fa-times':'fa fa-bars'}></i>
      </div>
      <div class="navbar-right">

        <ScrollToTop>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
        <li>
          <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutpage" className='nav-links' onClick={closeMobileMenu}>About</NavLink>
        </li>
        <li>
          <NavLink  to="/service" className='nav-links' onClick={closeMobileMenu}>Services</NavLink>
        </li>

        <li>
          <NavLink to="/contactpage" className='nav-links' onClick={closeMobileMenu}>Contact</NavLink>
        </li>

        </ul>
      </ScrollToTop>
      </div>

</nav>




  );
}

export default Navigation;
