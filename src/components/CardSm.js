import React, {useEffect} from 'react';
import './CardSm.scss';
import AOS from 'aos';

export default function CardSm({date, title, description, subtitle}) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='card-sm' data-aos="fade-up" data-aos-duration="1500" >
      <div className='d-flex align-items-start date'>
        <span><i className="bi bi-calendar"></i></span>
        <span><p>{date}</p></span>
      </div>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='subtitle'>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
