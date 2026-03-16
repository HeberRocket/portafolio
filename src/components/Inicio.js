import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>Me presento, soy <span>Heber Acevedo</span>, desarrollador 
      fullstack especializado en backend. He trabajado mayormente con Java, participando 
      en el desarrollo de soluciones robustas y escalables. Además, cuento con experiencia 
      en proyectos con Python y poseo sólidos conocimientos en HTML, CSS y JavaScript, 
      lo que me permite crear aplicaciones web eficientes y bien estructuradas. 
      Ofrezco mis servicios de desarrollo y programación para proyectos tecnológicos que 
 requieran calidad, rendimiento y escalabilidad.
        
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu sitio o aplicacion web, 
        dandole funcionalidad y estilo. <Link to="/contacto"> Contacta conmigo.</Link> 
      </h2>

      <section className='lastworks'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        

        <ListadoTrabajos limite={2} />
      </section>
    </div>
  )
}
