import React from 'react';
import './Testing.scss';

export default function Testing({arr}) {
  return (
    <div className='testing-container'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {arr &&
            arr.map((item, i)=>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
