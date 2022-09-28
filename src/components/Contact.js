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
        <p className='text1'>Get</p>
        <p className='text2'>In Touch</p>
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6 get-in-touch' data-aos="fade-right" data-aos-duration="1500">
          <div className='title-sm'><p>Get In Touch</p></div>
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-container'>
              <input type="text" placeholder='Your Name' name='name' />
            </div>
            <div className='input-container'>
              <input type="text" placeholder='Your Email' name='email' />
            </div>
            <div className='input-container'>
              <input type="text" placeholder='Your Phone' name='phone' />
            </div>
            <div className='input-container'>
              <textarea name='message' cols="30" rows="10" placeholder='Write a Message' />
            </div>
            <div className='d-flex justify-content-center my-4 button-container'>
              <button type='submit' className='button-send'>Send Message</button>
            </div>
          </form>
        </div>
        <div className='col-12 col-md-6 contact-details' data-aos="fade-left" data-aos-duration="1500">
          <div className='title-sm'><p>My Contact Details</p></div>
          <div className='content'>
            <div>
              <p className='label'>Email</p>
              <p className='text'>ferminpacheco87@gmail.com</p>
            </div>
            <div>
              <p className='label'>Phone</p>
              <p className='text'>11-6110-7112</p>
            </div>
            <div>
              <p className='label'>Fax</p>
              <p className='text'>+30 976 1382 9922</p>
            </div>
            <div>
              <p className='label'>Adress</p>
              <p className='text'>Argentina</p>
              <p className='text'>Provincia de Buenos Aires</p>
              <p className='text'>Tigre, Escalada 1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
