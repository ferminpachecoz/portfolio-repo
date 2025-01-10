import React, { useRef, useEffect } from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import AOS from 'aos';

export default function Contact({display}) {
  const form = useRef();

  useEffect(()=>{
    AOS.init()
  },[])

  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_9sfhk06', 'template_0erviqx', form.current, 'UQBaW7DPs73e_9TY3')
      .then((result) => {
          display()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='contact' id='contact'>
      <div className='title'>
        <p className='text1'>Póngase</p>
        <p className='text2'>En Contacto</p>
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6 get-in-touch' data-aos="fade-right" data-aos-duration="1500">
          <div className='title-sm'><p>Contactar</p></div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-container'>
              <input type="text" placeholder='Tu Nombre' name='name' />
            </div>
            <div className='input-container'>
              <input type="text" placeholder='Tu Email' name='email' />
            </div>
            <div className='input-container'>
              <input type="text" placeholder='Tu Telefono' name='phone' />
            </div>
            <div className='input-container'>
              <textarea name='message' cols="30" rows="10" placeholder='Escribe un mensaje...' />
            </div>
            <div className='d-flex justify-content-center my-4 button-container'>
              <button type='submit' className='button-send'>Enviar Mensaje</button>
            </div>
          </form>
        </div>
        <div className='col-12 col-md-6 contact-details' data-aos="fade-left" data-aos-duration="1500">
          <div className='title-sm'><p>Detalles de Contacto</p></div>
          <div className='content'>
            <div>
              <p className='label'>Email</p>
              <p className='text'>ferminpachecozapiola@gmail.com</p>
            </div>
            <div>
              <p className='label'>Teléfono</p>
              <p className='text'>+54 11 6110-7112</p>
            </div>
            <div>
              <p className='label'>Fax</p>
              <p className='text'>+30 976 1382 9922</p>
            </div>
            <div>
              <p className='label'>Dirección</p>
              <p className='text'>Argentina</p>
              <p className='text'>Provincia de Buenos Aires</p>
              <p className='text'>Zona Norte, Tigre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
