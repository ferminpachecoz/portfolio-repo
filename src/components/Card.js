import React, {useEffect} from 'react';
import './Card.scss';
import AOS from 'aos';

export default function Card({img, title, category, url}) {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='col card-container' data-aos="fade-up" data-aos-duration="1500" >
      <a href={url} target="_blank">
        <div className='wrapper'>
          <div className='image-container'>
            <div className='image' style={{backgroundImage: `url(${img})`}}></div>
          </div>
          <div className='content'>
            <span className='title'>{title}</span>
            <span className='category'>{category}</span>
          </div>
        </div>
      </a>
    </div>
  )
}
