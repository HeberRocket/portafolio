import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'

const IMG_BASE = `${process.env.PUBLIC_URL}/img`

export const ListadoTrabajos = ({ limite }) => {
  const cantidad = limite != null ? Number(limite) : undefined
  const listado = cantidad != null ? trabajos.slice(0, cantidad) : trabajos

  return (
    <section className='works'>
      {listado.map(trabajo => (
        <article key={trabajo.id} className='work-item'>
          <div className='mask'>
            <img
              src={`${IMG_BASE}/${trabajo.id}.png`}
              alt={trabajo.nombre}
            />
          </div>
          <div className='work-content'>
            <span>{trabajo.categorias}</span>
            <h2>
              <Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link>
            </h2>
            <h3>{trabajo.tecnologias}</h3>
          </div>
        </article>
      ))}
    </section>
  )
}