import React from 'react';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className='main-banner' style={{backgroundImage: "url('images/fermin-banner.jpg')"}}>
      <div className='shadow'>
        <span className='subtitle'><p>Hello I'm</p></span>
        <span className='title'><h1>Fermin Pacheco Zapiola</h1></span>
        <span className='description'><p>and this is my rezume</p></span>
      </div>
    </div>
  )
}
