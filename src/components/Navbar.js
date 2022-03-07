import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button.js';
import './Navbar.css';


function Navbar() {
    /* what will update the state */
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    /* sets click to opposite of click so it swtiches back */
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // };

    // window.addEventListener('resize', showButton);


    return(
        <>
           <nav className='navbar'>
               <div className='navbarContainer'>
                   <Link to='/' className='navbarLogo' onClick={closeMobileMenu}>
                       OSAN Productions
                   </Link>
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
                           <Link to='/social' className='navLinks' onClick={closeMobileMenu}>
                               Social
                           </Link>
                       </li>
                       <li className='navItem'>
                           <Link to='/gallery' className='navLinks' onClick={closeMobileMenu}>
                               Gallery
                           </Link>
                       </li>
                   </ul>
                 { /* {button && <Button buttonStyle='btn--outline'>Gallery</Button>} */}
               </div>
           </nav>
        </>
    )
}

export default Navbar;