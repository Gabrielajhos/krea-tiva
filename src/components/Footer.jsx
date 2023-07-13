import React from 'react'
import logo from '../../img/logo2.png'

const Footer = () => {
  return (
    <div className='bg-gray-100 p-8'>

<div className='shadow-2xl  p-4 bg-white block md:flex md:space-x-10'>

<nav className='block md:space-x-8 space-x-6 text-center items-center p-4 md:ml-16 text-violet-900 md:text-2xl text-lg font-bold font-sans '>
      <a className='hover:text-orange-500' href='#home'>Home</a>
      <a className='hover:text-orange-500' href='#nosotros'>Nosotros</a>
      <a className='hover:text-orange-500' href='#servicios'>Servicios</a>
      <a className='hover:text-orange-500' href='#contactos'>Contacto</a>
    </nav>

<div>
    <img className='w-32 m-auto ' src={logo} alt='logo krea-tiva'/>
    <h2 className='text-violet-900 text-3xl text-center font-semibold'>Soluciones tecnologicas</h2>
</div>
    <div>
      <h3 className='block space-x-10 items-center p-4 ml-4 text-violet-900 text-2xl font-bold font-sans text-center '>Terminos y condiciones</h3>
      <h3></h3>
    </div>
</div>      
    </div>
  )
}

export default Footer
