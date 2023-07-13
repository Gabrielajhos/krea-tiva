import React from 'react'
import Servicio from '../../img/servicios1.png'
import Marketing from '../../img/marketing1.png'
import Informatica from '../../img/informatica1.png'
import Diseño from '../../img/diseño1.png'
import Programacion from '../../img/programacion1.png'

const Service = () => {
  return (
    <div className='block m-auto'>


<h1 className='text-center mt-28 justify-center m-auto md:mt-6  w-4/6 text-violet-900 md:text-4xl text-3xl font-bold font-sans uppercase'>Descubre todos los servicios que ofrecemos para ti</h1>
   
   
    <div className='md:flex p-20 '>
    <div className='md:block grid-cols-2'>
      
    <div className='shadow-xl mt-16 p-4 rounded-md bg-white'>
    <img className='m-auto w-1/2' src={Marketing} alt='Icono marketing link'/>
      <h3 className='text-violet-900 text-center font-semibold text-3xl'>Marketing digital</h3>
      <p className='text-gray-600 text-left text-lg font-semibold'>Servicio de marketing dígital para promoover tu marca y conseguir tus objetivos.</p>
    </div>

    <div className='shadow-xl mt-16 p-4 rounded-md bg-white'>
    <img className='m-auto w-1/2' src={Diseño} alt='Icono diseño link'/>
      <h3 className='text-violet-900 text-center font-semibold text-3xl'>Diseño</h3>
      <p className='text-gray-600 text-left text-lg font-semibold'>Servicio de diseño, diseño web, gráfico y diseño de audio visuales.</p>

    </div>

    </div>

      <img className='w-full m-6' src={Servicio} alt="imagen de servicios"/>

      <div className='md:block grid-cols-2' >

      <div className='shadow-xl mt-16 p-4 rounded-md bg-white'>
      <img className='m-auto  w-1/2' src={Programacion} alt='Icono marketing link'/>
      <h3 className='text-violet-900 text-center font-semibold text-3xl'>Programación</h3>
      <p className='text-gray-600 text-left text-lg font-semibold'>Desarrollo de webs y apps de escritorio, a medida, nos adaptamos a tus necesidades.</p>

    </div>

    <div className='shadow-xl mt-16 p-4 rounded-md bg-white'>
    <img className='m-auto w-1/2' src={Informatica} alt='Icono marketing link'/>
      <h3 className='text-violet-900 text-center font-semibold text-3xl'>Informatica</h3>
      <p className='text-gray-600 text-left text-lg font-semibold'>Diversos servicios de informatica, actualización de sistemas, soporte técnico.</p>

    </div>

</div>
    </div>

    </div>
  )
}

export default Service
