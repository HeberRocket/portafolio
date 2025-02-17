import React from 'react'
import {Routes, Rout, BrowserRouter, NavLink, Route, Navigate } from "react-router-dom";
import {Inicio} from "../components/Inicio";
import {Portafolio} from "../components/Portafolio";
import {Servicios} from "../components/Servicios";
import {Curriculum} from "../components/Curriculum";
import {Contacto} from "../components/Contacto";
import { HeaderNav } from '../components/layout/HeaderNav';
import { FooterApp } from '../components/layout/FooterApp';
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
    {/*Header y navegacion */}

    <HeaderNav/>

    {/*CONTENIDO CENTRAL*/}
    <section className='content'>
    <Routes>
        <Route path='/' element={<Navigate to="/inicio" />} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/portafolio' element={<Portafolio/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/proyecto/:id' element={<Proyecto />} />
        <Route path='/*' element={
            <div className='page'>

            <h1 className='heading'>Error 404</h1>


            </div>

          } />
        </Routes>
    </section>
   
   
    
    {/*FOOTER*/}
     <FooterApp />
    
    </BrowserRouter>
  )
}
