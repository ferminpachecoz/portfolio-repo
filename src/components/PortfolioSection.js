import React, {useEffect} from 'react';
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
            img="/preview/ferminpacheco.site/images/lv-min-web.png" 
            title="louis vuitton" 
            category="e-commerce" 
            url="https://my-tienda-online.herokuapp.com/"  
            />

            <Card 
            img="/preview/ferminpacheco.site/images/ds-min-web.png" 
            title="service." 
            category="landing page" 
            url="https://dental-landing-page.herokuapp.com/"  
            />

            <Card 
            img="/preview/ferminpacheco.site/images/lm-min-web.png" 
            title="Le Marche" 
            category="e-commerce" 
            url="https://le-marche.herokuapp.com/"  
            />

            <Card 
            img="/preview/ferminpacheco.site/images/cb-min-web.png" 
            title="CloB" 
            category="e-commerce" 
            url="https://clob-tienda.herokuapp.com/"  
            />

          </div>
        </div>
      </div>
    </div>
  )
}
