import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy <strong>Heber Acevedo</strong> y soy programador con un fuerte enfoque en el area backend.
        Ofrezco mis servicios de <strong>programacion</strong> y <strong>desarrollo </strong> 
         en proyectos web.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, 
        dandole funcionalidad y estilo. <Link to="/contacto"> Contacta conmigo.</Link> 
      </h2>

      <section className='lastworks'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        

        <ListadoTrabajos limite="2" />
      </section>
    </div>
  )
}
