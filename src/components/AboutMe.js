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
          <p>Full Stack Web Developer y estudiante de la licenciatura Negocios Digitales en la Universidad San Andrés</p>
        </div>
        <div className='alternative-text'>
          <p>Soy Fermín Pacheco Zapiola, un apasionado desarrollador web con experiencia en diseño y desarrollo de sitios modernos y funcionales. Me especializo en crear soluciones digitales personalizadas que combinan tecnología y creatividad, ayudando a marcas y negocios a destacar en el mundo online. Mi objetivo es brindar un servicio profesional con un enfoque en la calidad y la accesibilidad.</p>
        </div>
        <div className='button-container'>
          <button className='hire-me'><a href="#contact">contratarme</a></button>
          <button className='download'><a href="Curriculum3.pdf" download="FerminPachecoCV">descargar cv</a></button>
        </div>
      </div>
    </div>
  )
}
