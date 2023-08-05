import React, { useState } from 'react';
import "./Header.css";
import Logo from "../assets/logo.png";
import Bars from "../assets/bars.png";
import {Link} from "react-scroll"


function Header() {
  const mobile=window.innerWidth<=768 ? true:false;
  const [menuOpened,setMenuOpened]=useState(false);

  return (
    <div className='header'>
      <img src={Logo} alt='' />
      {menuOpened===false && mobile ===true ?(
        <div style={{backgroundColor:"var(--appColor)",
                     padding:"0.5rem",
                     borderRadius:"5px"
                     }}
             onClick={()=>setMenuOpened(true)}
                >
        <img src={Bars} alt='' style={{width:"1.5rem",height:"1.5rem"}} />
        </div>
      ):(
        <ul className='header-menu'>
        <Link spy={true} smooth={true} activeClass='activClass' to='Home'>
        <li onClick={()=>setMenuOpened(false)}>Home</li>
        </Link>
        <Link spy={true} smooth={true} activeClass='activClass' to='Programs'>
        <li onClick={()=>setMenuOpened(false)}>Programs</li>
        </Link>
        <Link spy={true} smooth={true} activeClass='activClass' to='Why us'>
        <li onClick={()=>setMenuOpened(false)}>Why us</li>
        </Link>
        <Link spy={true} smooth={true} activeClass='activClass' to='Plans'>
        <li onClick={()=>setMenuOpened(false)}>Plans</li>
        </Link>
        <Link spy={true} smooth={true} activeClass='activClass' to='Testimonials'>
        <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
        </Link>
      </ul>
      )}
        
      
    </div>
  ) 
}

export default Header
