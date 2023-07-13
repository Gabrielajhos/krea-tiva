import React from 'react'
import Flecha from '../../img/flecha.png'
import Remoto from '../../img/hibrido.png'
import Diseño from '../../img/diseno.png'
import Computadora from '../../img/computadora.png'


const Hero = () => {
  return (
    <div className='hero md:flex w-5/4 grid-cols-2 md:w-full  md:space-x-10 items-start  md:ml-24'>

      <div className='shadow-2xl md:w-60 p-6 m-4 w-3/4 bg-gray-100 rounded-md'>
      <h3 className='text-violet-900 text-2xl font-semibold text-center'>Soluciones</h3>
      <img className='m-auto w-8/12' src={Remoto} alt='icono remoto'/>
      <p className='font-bold text-lg text-gray-700'>Eficaces y 100% remotas</p>

      </div>

      <div className='shadow-2xl md:w-60 w-3/4 p-6 m-4  bg-gray-100 rounded-md'>
      <h3 className='text-violet-900 text-2xl font-semibold text-center'>Flexibilidad</h3>
      <img className='m-auto w-8/12' src={Flecha} alt='icono remoto'/>
      <p className='font-bold md:text-lg text-sm text-gray-700'>Nos adaptamos a tus necesidades.</p>

      </div>

      <div className='shadow-2xl md:w-60 w-3/4 p-6 m-4 bg-gray-100 rounded-md'>
      <h3 className='text-violet-900 text-2xl font-semibold text-center'>Diseño</h3>
      <img className='m-auto w-8/12' src={Diseño} alt='icono remoto'/>
      <p className='font-bold text-lg  text-gray-700'>Diseño unico y exclusivo</p>

      </div>
      <div className='shadow-2xl md:w-60 w-3/4 p-6 m-4 bg-gray-100 rounded-md'>
      <h3 className='text-violet-900 text-2xl font-semibold text-center'>Soporte técnico</h3>
      <img className='m-auto w-8/12' src={Computadora} alt='icono remoto'/>
      <p className='font-bold md:text-lg text-sm text-gray-700'>Te ayudamos con tus dudas y problemas</p>

      </div>

      
      
     

    </div>
  )
}

export default Hero

