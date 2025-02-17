import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1> 

      <section className='services'>
        <article className='service'>
          <h2>Desarrollo Backend</h2>
          <p>Estoy listo para aportar mis conocimientos y habilidades en el desarrollo 
            backend dentro de un equipo de trabajo. Tengo experiencia en Java, Python, y 
            Spring Boot, así como en la implementación y gestión de bases de 
            datos MySQL y PostgreSQL. Me especializo en desarrollar plataformas seguras, 
            eficientes y optimizadas, garantizando un alto rendimiento y una experiencia 
            fluida para los usuarios. Estoy comprometido con la mejora continua y listo 
            para asumir nuevos desafíos en un entorno profesional.</p>
          <section className='iconos'>
            <img src="/images/java.png" width="120" height="120" alt="Java" />
            <img src="/images/python.png" width="120" height="120" alt="Python" />
            <img src="/images/springboot.png" width="120" height="120" alt="Springboot" />
            
            <img src="/images/mysql.png" width="120" height="120" alt="Mysql" />
            <img src="/images/postgresql.png" width="120" height="120" alt="Postgresql" />
            
          </section>
            
        </article>

        <article className='service'>
          <h2>Desarrollo Frontend</h2>
          <p>Estoy listo para formar parte de un equipo de desarrollo, aportando mis 
            habilidades en HTML, CSS, JavaScript y React para crear interfaces atractivas,
            dinámicas y funcionales. Tengo experiencia en la implementación de 
            diseños responsivos y optimizados para una experiencia de usuario fluida. 
            Además, entiendo la importancia de una comunicación eficiente con el backend, 
            asegurando una integración sin problemas entre ambas partes.</p>
            <section className='iconosback'>
            <img src="/images/html.png" width="120" height="120"/>
            <img src="/images/css.png" width="120" height="120"/>
            <img src="/images/javascript.png" width="120" height="120"/>
            <img src="/images/react.png" width="120" height="120"/>
            </section>

        </article>

        {/*<article className='service'>
          <h2>Desarrollo backend</h2>
          <p>funcionamiento a tu web</p>
        </article>*/}
      </section>

    </div>
  )
}
