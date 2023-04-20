import React from 'react'
import Foto1 from '../../img/g1.png'
import Foto2 from '../../img/g2.png'
import Foto3 from '../../img/g3.png'
import Foto4 from '../../img/g4.png'
import Foto5 from '../../img/g5.png'
import Foto6 from '../../img/g6.png'


const Galeria = () => {



  return (
    <div className='galeria' id='galeria'>

    <h2 className='uppercase text-5xl text-orange-600 text-center font-semibold'>Galeria</h2>
<div className='md:block flex items-center mt-10 md:mt-2'>
    <div className='md:flex grid-cols-2 m-2 justify-center '>
<img className='shadow-lg m-3 md:w-1/4 md:h-1/3 w-full h-11/12' src={Foto1} alt='Foto 1'/>
<img className='shadow-lg m-3 md:w-1/4 md:h-1/3 w-full h-11/12' src={Foto2} alt='Foto 2'/>
<img className='shadow-lg m-3 md:w-1/4 md:h-1/3 w-full h-11/12'src={Foto3} alt='Foto 3'/>

    </div>

    <div className='md:flex grid-cols-2  m-2 justify-center '>
<img className='shadow-lg m-3 md:w-1/4 md:h-1/3 w-full h-11/12' src={Foto4} alt='Foto 4'/>
<img className='shadow-lg md:w-1/4 md:h-1/3 w-full h-11/12' src={Foto5} alt='Foto 5'/>
<img className='shadow-lg md:w-1/4 md:h-1/3 w-full h-11/12' src={Foto6} alt='Foto 6'/>
    </div>

    </div>    
    </div>
  )
}

export default Galeria
