import React from 'react';
import './ServiceCard.scss';
import { useState, useEffect } from 'react';
import Aos from 'aos';

export default function ServiceCard({icon, title, description, descriptionPlus, effect}) {
  const [display, setDisplay] = useState(false)
  const handleClick = () =>{
    setDisplay(!display)
  }
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='service-card' data-aos={effect} data-aos-duration="1500">
      <div className='title-container d-flex flex-column align-items-center justify-content-center'>
        <span className='icon' style={{backgroundImage: `url(${icon})`}}></span>
        <span className='title'><p>{title}</p></span>
      </div>
      <div className='description'>
        <p>{description} {display?descriptionPlus:""}</p>
      </div>
      <div className='learn-more'>
        <p onClick={handleClick}>Ver Más {">"}</p>
      </div>
    </div>
  )
}
