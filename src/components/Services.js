import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.scss';

export default function Services() {
  let services = [
    {
      icon: "icons/website.png",
      title: "Maquetación Web",
      description: "Planificación y estimación de desarrollo de la página a realizar. Traducción del diseño de una página web a componentes web. Manejo de interacciones del usuario y animaciones de la interfaz.",
      descriptionPlus: "Implementar en el desarrollo buenas prácticas (responsive, UX).",
      effect: "fade-right"
    },
    {
      icon: "icons/internet.png",
      title: "Desarrollo Front-End",
      description: "Manejo de conexiones asíncronas con Ajax y/o Fetch. Uso de Session y Cookies para almacenado de información. Implementación de validaciones en JavaScript para formularios. Mantenimiento y resolución de errores de la página.",
      descriptionPlus: "Colaborar con los desarrolladores Backend.",
      effect: "fade-up"
    },
    {
      icon: "icons/video.png",
      title: "Desarrollo Back-End",
      description: "Planificación y estimación del desarrollo del servidor web. Creación y puesta en marcha de un servidor web. Análisis, diseño e implementación de un sistema de base de datos. Mantenimiento y resolución de errores.  Autenticación y manejo de sesiones de usuarios.",
      descriptionPlus: "Manejo de conexiones asíncronas a servicios web. Integración con otras plataformas mediante apis. Uso de Session y Cookies para almacenado de información. Colaborar con los desarrolladores Frontend.",
      effect: "fade-left"
    },
  ]
  return (
    <div className='services' id='services'>
      <div className='title'>
        <p className='text1'>My</p>
        <p className='text2'>Services</p>
      </div>
      <div className='wrapper d-flex justify-content-center'>
        <div className='services-container row row-cols-1 row-cols-md-3 g-4'>
          {
            services.map((item, i)=>  
              <div key={i} className='col'>
                <ServiceCard title={item.title} icon={item.icon} description={item.description} descriptionPlus={item.descriptionPlus} effect={item.effect} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
