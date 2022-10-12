import React from 'react';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className='main-banner' style={{backgroundImage: "url('images/fermin-banner.JPG')"}}>
      <div className='shadow'>
        <span className='subtitle'><p>Hola soy</p></span>
        <span className='title'><h1>Fermin Pacheco Zapiola</h1></span>
        <span className='description'><p>y este es mi portfolio</p></span>
      </div>
    </div>
  )
}
