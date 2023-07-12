import React from 'react';
import {RViewerTrigger, RViewer} from 'react-viewerjs' ;
import Foto1 from '../../img/g1.png';
import Foto2 from '../../img/g2.png';
import Foto3 from '../../img/g3.png';
import Foto4 from '../../img/g4.png';
import Foto5 from '../../img/g5.png';
import Foto6 from '../../img/g6.png';


let imagenes = [
 Foto1,
 Foto2,
 Foto3,
 Foto4,
 Foto5,
 Foto6 
]

const Galeria = () => {


  return (
    <div className='galeria' id='galeria'>

    <h2 className='uppercase text-5xl text-orange-600 text-center font-semibold'>Portafolio</h2>
<div className='md:block flex items-center mt-10 md:mt-2'>
   
   <RViewer imageUrls={imagenes}>
   <div className='display-galeria s-flex mt-4'>
   {imagenes.map((imagen, index)=>{

    return(
      <RViewerTrigger index={index}>


<img src={imagen} className="galeria-img"></img>

    

      </RViewerTrigger>
    )
   })}

   </div>

   </RViewer>
   
    </div>    
    </div>
  )
}

export default Galeria
