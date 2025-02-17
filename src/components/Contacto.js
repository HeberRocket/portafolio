import React from 'react'

const numero = "524922510600"; // Número en formato internacional sin "+"
const mensaje = "Hola, me gustaría agendar una entrevista para saber mas sobre tu trayectoria y ofrecerte un trabajo!";

const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;



export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <section className='contactou'>
      <a href="https://www.linkedin.com/in/heber-acevedo/" target="_blank" rel="noopener noreferrer">
        <img src="/images/linkedin.png" width="120" height="120" alt="LinkedIn" />
      </a>
      <a href="https://github.com/HeberRocket/" target="_blank" rel="noopener noreferrer">
        <img src="/images/github.png" width="120" height="120" alt="Github" />
      </a>
      
      <a href="mailto:elmasivo5@gmail.com?subject=Contacto&body=Hola, quiero saber mas de ti en una 
       entrevista para un puesto de trabajo" 
         target="_blank" rel="noopener noreferrer">
        <img src="/images/gmail.png" width="120" height="120" alt="Github" />
      </a>

      <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
        <img src="/images/whatsapp.png" width="110" height="110" alt="whatsapp" />
      </a>


      </section>

      
      
    </div>
  )
}
