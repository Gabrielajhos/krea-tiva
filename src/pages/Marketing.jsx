import React from 'react'
import SocialMedia from '../../img/sm.png'
import Media from '../../img/1.png'
import Marca from '../../img/2.png'
import Seo from '../../img/3.png'


const Marketing = () => {
  return (
    <div className='p-4 block bg-white'>

<h2 className='text-orange-600 mt-10  m-auto  font-sans font-bold  md:w-2/5 text-center text-5xl'>Nuestros servicios de <span className='text-3xl text-gray-700'> marketing digital </span></h2>


      <div className='md:flex block p-8 ' >
      <img src={SocialMedia} alt='Imagen marketing'/>

      <div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Media} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Community Manager</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Mantendremos activas tus redes sociales, utilizando las estrategias mas actuales en el mundo digital.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Marca} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Creación de marca</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Nos dedicamos a la Creación de tu figura comercial, desde tu logo, eslogan, pagina web y todo lo que te diferenciará en el mercado.</p>
        </div>
      </div>

      <div className='flex items-start mt-4'>
      <img className='w-26 h-26 mt-6' src={Seo} alt='icono media'/>
      <div>
        <h3 className='text-3xl font-sans font-bold  text-gray-700 mt-8'>Posicionamiento SEO</h3>
        <p className='w-4/5 text-gray-700 text-lg font-semibold text-left'>Posicionamiento en los motores de busqueda mas importantes, ten presencia en internet.</p>
        </div>
      </div>


      </div>

      </div>
      <div>

      </div>
      </div>
    
  )
}

export default Marketing
