import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-title'>
        <p>Copyright © 2022 All rights reserved | This template is made with <i className="bi bi-suit-heart-fill heart"></i> by <a className='name' href="#">Fermin Pacheco Zapiola</a> </p>
      </div>
      <div className='footer-icons'>
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-twitter"></i></a>
        <a href="https://www.instagram.com/ferchopacheco/" target="_blank"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/fermin-pacheco-zapiola" target="_blank"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  )
}
