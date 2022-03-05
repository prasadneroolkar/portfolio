import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {motion} from 'framer-motion';

function Navbar() {
    const [click, setClick] = useState(false);

    const onhamburger = () => {
        setClick(!click);
    }

    return (
        <>
          <motion.nav className="navbar_custom"
          initial={{y:-120}}
          animate={{y:0}}
          transition={{ duration:0.2, type:'spring', stiffness:120}}>
              <div className="navbar_container">
              <NavLink to="/" className="navbar_title">Prasad Neroolkar</NavLink>
                  <div className="menu_icon" onClick={onhamburger}>
                     {click ?  <CloseIcon/> : <MenuIcon/> }
                  </div>
                  <div className={click ? "ul_content" : null}>
                  <ul className={click ? "nav_menu_mobile" : "nav_menu"}>
                      <li className="nav-item">
                      <NavLink exact to="/" className="nav_links">Home</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink exact to="/about" className="nav_links">About</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink to="/resume" className="nav_links">Resume</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink to="/porfolio" className="nav_links">Portfolio</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink to="/contact" className="nav_links">Contact</NavLink>
                      </li>
                  </ul>
                  </div>
              </div>
          </motion.nav>  
        </>
    )
}

export default Navbar
