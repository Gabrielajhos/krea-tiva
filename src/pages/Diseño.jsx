import React from 'react'
import Imagen7 from '../../img/7.png'
import Diseñoweb from '../../img/web.png'
import grafico from '../../img/dg.png'
import grafico2 from '../../img/d3d.png'

const Diseño = ({props}) => {

  const togleProps = ()  =>{
    if(props.diseñoVisible === true){

      return(
        <div className='p-4 block bg-white '>

        <h2 className='text-orange-600 mt-10 justify-center font-sans font-bold m-auto md:w-2/5 text-center text-4xl md:text-5xl'>Nuestros servicios de <span className='md:text-3xl text-lg text-gray-700'>Diseño </span></h2>
        
        
              <div className='md:flex block p-8 ' >
              <img className=' md:w-3/5' src={Imagen7}  alt='Imagen marketing'/>
        
              <div>
        
              <div className='flex items-start mt-4'>
              <img className='w-26 h-26 mt-6' src={Diseñoweb} alt='icono media'/>
              <div>
                <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Diseño web</h3>
                <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Diseños web profesionales, adaptados a tu marca, con las tecnologías mas actualizadas del mercado.</p>
                </div>
              </div>
        
              <div className='flex items-start mt-4'>
              <img className='w-26 h-26 mt-6' src={grafico} alt='icono media'/>
              <div>
                <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Diseño gráfico</h3>
                <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Diseño gráfico profesional, contenido exclusivo para ti y para tu marca, el limite es tu imaginación.</p>
                </div>
              </div>
        
              <div className='flex items-start mt-4'>
              <img className='w-26 h-26 mt-6' src={grafico2} alt='icono media'/>
              <div>
                <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Diseño 3D</h3>
                <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>El diseño 3d brinda una experiencia totalmente diferente al usuario, disponemos excelentes profesionales en la materia.</p>
                </div>
              </div>
        
        
              </div>
        
              </div>
              <div>
        
              </div>
              </div>
      )

    }}


  return (
   <div>
    {togleProps()}
   </div>
  )
}

export default Diseño
