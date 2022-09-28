import React from 'react';
import './Modal.scss';

export default function Modal({display}) {
  return (
    <div className='modal-container'>
      <div className='container'>
        <span className='close-icon' onClick={display}><i className="bi bi-x"></i></span>
        <p>Se ha enviado exitosamente!</p>
      </div>
    </div>
  )
}
