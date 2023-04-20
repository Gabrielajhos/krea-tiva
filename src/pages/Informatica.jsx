import React from 'react'
import Informatic from '../../img/informatica.png'
import Mantenimiento from '../../img/mantenimiento.png'
import Sistema from '../../img/sistemas.png'
import Program from '../../img/program.png'
import DB from '../../img/db.png'
import Host from '../../img/host.png'


const Informatica = () => {
  return (
    <div className='p-4 block bg-white'>

<h2 className='text-orange-600 mt-10 m-auto  font-sans font-bold  md:w-2/5 text-center text-5xl'>Nuestros servicios  <span className='text-3xl text-gray-700'>Informaticos </span></h2>


      <div className='md:flex block p-8' >
      <img className='md:w-full' src={Informatic} alt='Imagen marketing'/>

      <div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Mantenimiento} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Asistencia técnica en remoto</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Asistencia para instalaciones de programas, formateo de equipos y mucho más.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Sistema} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Mantenimiento de sistemas</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Profesionales en el area para actualización o cambio de sistemas.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Program} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Programacion de softwares</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>desarrollo y actualización de softwares y programas a medida. Desarrollo web y apps de escritorio con JavaScript, react, php, html, css.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={DB} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Bases de datos</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Creación, mantenimiento y Asistencia de bases de datos.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Host} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Alojamiento web</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Servicio de alojamiento web, migraciones, etc.</p>
        </div>
      </div>


      </div>

      </div>
      <div>

      </div>
      </div>
    
  )
}

export default Informatica
