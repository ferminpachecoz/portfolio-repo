import React from 'react';
import CardSm from './CardSm';
import './ResumeSection.scss';

export default function ResumeSection() {
  let education = [
    {
      date: "Marzo 2023 - Actual",
      title: "Licenciatura en Negocios Digitales",
      description: "Carrera que combina finanzas, economia, programacion y marketing con el fin de gestionar productos digitales.",
      subtitle: "Universidad San Andrés"
    },
    {
      date: "Junio 2021 - Diciembre 2021",
      title: "Desarrollador Web Full Stack",
      description: "Curso de Desarrollo Web Full Stack que abarca tecnologias dentro del Front-End y Back-End.",
      subtitle: "Digital House"
    },
    {
      date: "Agosto 2020 - Noviembre 2020",
      title: "Robótica Arduino",
      description: "Curso de electrónica y programación con Arduino.",
      subtitle: "Inteligencia Educativa"
    }
  ]
  let experience = [
    {
      date: "Abril 2022 - Present",
      title: "Diseñador Web",
      subtitle: "Freelance",
      description: "Trabajo en el mundo del freelance desde principios de 2022 en el area de desarrollo de E-Commerce aportando diseño y funcionalidad."
    },
    {
      date: "Diciembre 2021 - March 2022",
      title: "Desarrollador Web",
      subtitle: "Rednet Corp",
      description: "Desarrollador de sistema de gestion inmobiliario con el fin de acelerar los procesos de registro, mantenimiento y control."
    }
  ]

  return (
    <div className='resume-section' id='resume'>
      <div className='title'>
        <p className='text1'>Mi</p>
        <p className='text2'>Curriculum</p>
      </div>
      <div className='content d-flex flex-column flex-md-row'>
        <div className='col-12 col-md-6 education'>
          <span><p>Educación</p></span>
          <div className='d-flex flex-column'>
            {
              education.map((item, i)=>
                <CardSm 
                  key={i}
                  date={item.date} 
                  title={item.title} 
                  description={item.description} 
                  subtitle={item.subtitle}
                />
              )
            }
          </div>
        </div>
        <div className='col-12 col-md-6 experience'>
          <span><p>Experiencia</p></span>
          <div className='d-flex flex-column'>
            {
              experience.map((item, i)=>
                <CardSm 
                  key={i}
                  date={item.date} 
                  title={item.title} 
                  description={item.description} 
                  subtitle={item.subtitle}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
