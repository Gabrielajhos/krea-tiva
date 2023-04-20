import React from 'react'
import Imagen5 from '../../img/imagen5.png'


const Nosotros = () => {
  return (
    <div className='nosotros block md:flex p-4 mt-20' id='nosotros'>

    <div className='bg-white items-center text-justify md:h-2/3 p-6 shadow-2xl md:mt-20   md:ml-6 ml-2 mr-2 rounded-md'>
    <h2 className='text-violet-900 md:text-6xl text-4xl font-bold font-sans mt-1'>¿Quienes somos?</h2>

    <p className='text-gray-800 md:text-2xl text-lg w-full mt-8  '>    Somos una empresa joven,  dedicada a las soluciones en tecnología, reunimos
    dentro de nuestra organización a profesionales calificados, dedicados y apasionados la labor que realizamos. En este lugar queremos brindarte 
    todas las soluciones posibles a nuestro alcance, y estaremos para tenderte la mano siempre que lo necesites!</p>
    </div>

  <img className='md:w-1/2 md:h-5/6' src={Imagen5} alt='Foto de la compañia'/>


    </div>
  )
}

export default Nosotros

