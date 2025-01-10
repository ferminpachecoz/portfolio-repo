import React from 'react';
import './PortfolioSection.scss';
import Card from './Card';

export default function PortfolioSection() {
  return (
    <div className='portfolio-section' id='portfolio'>
      <div className='title'>
        <p className='text1'>Featured</p>
        <p className='text2'>Portfolio</p>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='wrapper'>
          <div className='row row-cols-1 row-cols-lg-3 gy-5'>
            <Card 
            img="images/fenster-fix-banner.png"
            title="Fenster Fix"
            category="Landing Page"
            url="https://fenster-reparaciones.vercel.app/"
            />
            <Card 
            img="images/pro-build-web.png"
            title="Pro Build"
            category="Landing Page"
            url="https://somosprobuild.com/"
            />
            <Card 
            img="images/bernabe-morixe-web.png"
            title="Bernabé Morixe"
            category="Portfolio"
            url="https://bernabe-morixe.vercel.app/"
            />

          </div>
        </div>
      </div>
    </div>
  )
}
