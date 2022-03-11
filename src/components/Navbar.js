import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button.js';
import './Navbar.css';


function Navbar() {
    /* what will update the state */
    const [click, setClick] = useState(false);

    /* sets click to opposite of click so it swtiches back */
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    return(
        <>
           <nav className='navbar'>
               <div className='navbarContainer'>
                   <div className='navLogoContainer'>
                        <Link to='/' className='navbarLogo' onClick={closeMobileMenu}>
                             Whose House?
                        </Link>
                    </div>
                   <div className='menuIcon' onClick={handleClick}>
                       {/* not clicked will be hamburger menu, when clicked will be bars */}
                       <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   {/* make nav meny disappear when on mobile */}
                   <ul className={click ? 'navMenu active' : 'navMenu'}>
                       <li className='navItem'>
                           <Link to='/about' className='navLinks' onClick={closeMobileMenu}>
                               About
                           </Link>
                       </li>
                       <li className='navItem'>
                           <Link to='/music' className='navLinks' onClick={closeMobileMenu}>
                               Music
                           </Link>
                       </li>
                       <li className='navItem'>
                           <Link to='/gallery' className='navLinks' onClick={closeMobileMenu}>
                               Gallery
                           </Link>
                       </li>
                       <li className='navItem'>
                           <Link to='/contact' className='navLinks' onClick={closeMobileMenu}>
                               Contact Us
                           </Link>
                       </li>
                   </ul>
               </div>
           </nav>
        </>
    )
}

export default Navbar;