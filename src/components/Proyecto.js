import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

const IMG_BASE = `${process.env.PUBLIC_URL}/img`

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState(undefined)
  const { id } = useParams()

  useEffect(() => {
    const encontrado = trabajos.find(trabajo => trabajo.id === id)
    setProyecto(encontrado ?? null)
  }, [id])

  if (proyecto === undefined) {
    return (
      <div className='page page-work'>
        <p>Cargando...</p>
      </div>
    )
  }

  if (proyecto === null) {
    return (
      <div className='page page-work'>
        <h1 className='heading'>Proyecto no encontrado</h1>
        <p>No existe un proyecto con ese identificador.</p>
        <Link to="/portafolio">Ver portafolio</Link>
      </div>
    )
  }

  return (
    <div className='page page-work'>
      <div className='mask'>
        <img
          src={`${IMG_BASE}/${proyecto.id}.png`}
          alt={proyecto.nombre}
        />
      </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <p>{proyecto.tecnologias}</p>
      <p>{proyecto.descripcion}</p>
      <a
        href={proyecto.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ir al proyecto
      </a>
    </div>
  )
}
