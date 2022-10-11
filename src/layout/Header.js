import React from 'react';
import './Header.scss';
import { useState } from 'react';

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [menu, setMenu] = useState(false)

  const background = () =>{
    if(window.scrollY >= 150){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', background)
  return (
    <div className={`header ${navbar?"active":""}`}>
      <ul className='header-nav'>
        <li><a href="#">home</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#resume">curriculum</a></li>
        <li><a href="#about-me">sobre mi</a></li>
        <li><a href="#contact">contacto</a></li>
      </ul>
      <span className='menu' onClick={()=>setMenu(!menu)}><i className="bi bi-list"></i></span>
      {menu &&
        <div className='menu-nav'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#resume">curriculum</a></li>
            <li><a href="#about-me">sobre mi</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      }
    </div>
  )
}
