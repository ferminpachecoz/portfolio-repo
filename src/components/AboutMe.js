import React, {useEffect} from 'react';
import './AboutMe.scss';
import AOS from 'aos';

export default function AboutMe() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='about-me d-flex flex-column flex-md-row' id='about-me'>
      <div className='col-12 col-md-7' data-aos="fade-right" data-aos-duration="1500">
        <div className='image' style={{backgroundImage: "url('images/fermin.JPG')"}}>

        </div>
      </div>
      <div className='col-12 col-md-5 content' data-aos="fade-left" data-aos-duration="1500">
        <div className='title'>
          <p className='text1'>Sobre</p>
          <p className='text2'>Mi</p>
        </div>
        <div className='description'>
          <p>Nací en Buenos Aires, Argentina, y estudié en el Colegio San Esteban.</p>
        </div>
        <div className='alternative-text'>
          <p>Desde muy chico me empezó a gustar el mundo de la programacion mas que nada desde el punto de vista de automatización de procesos. Mi ruta de aprendizaje comenzó con tutoriales en YouTube hasta que decidi hacer un curso.</p>
        </div>
        <div className='button-container'>
          <button className='hire-me'><a href="#contact">contratarme</a></button>
          <button className='download'><a href="CurriculumPdf.pdf" download="FerminPachecoCV">descargar cv</a></button>
        </div>
      </div>
    </div>
  )
}
