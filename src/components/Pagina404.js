import React from 'react'
import { Link } from 'react-router-dom'

export const Pagina404 = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Error 404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/inicio">Volver al inicio</Link>
    </div>
  )
}
