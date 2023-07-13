import React from 'react'
import { useState } from 'react'
import Diseño from '../pages/Diseño'
import Informatica from '../pages/Informatica'
import Marketing from '../pages/Marketing'
import Service from '../pages/Service'
import I8 from '../../img/8.png'
import I9 from '../../img/9.png'
import I10 from '../../img/10.png'


 

const Servicios = () => {

  const [state, setState ]= useState({
     marketingVisible: false, 
     diseñoVisible: false,
    informaticaVisible: false
});

  

  const handleClick = (currentKey) => {
    Object.keys(state).forEach((key)=> {
      setState({
        [key]: true
      });
    })


    setState({

      [currentKey]: !state[currentKey]
    })
    console.log(state);
  }


  
  
 
  return (
<div  id='servicios'>
    <div className='flex bg-gray-100'>
<Service/>
</div>

    <div className='servicios' id='servicios' >

<div className='caja block bg-white shadow-2xl md:w-3/5 w-11/12 m-auto justify-center mb-10 p-5 rounded-md'>
<div className='flex text-orange-600 font-bold md:text-2xl text-lg m-auto   space-x-5 '>

<div className='items-center text-center' onClick={handleClick.bind(this, "marketingVisible")}>
  <h2 >Marketing</h2>
  <a className='hover: cursor-pointer'><img className='hover:w-full w-11/12 m-auto' src={I10} alt='imagen marketing'/></a>
</div>

<div className='items-center text-center' onClick={handleClick.bind(this, "diseñoVisible")}>
  <h2>Diseño</h2>
  <a  className='hover: cursor-pointer'><img className='hover:w-full w-11/12 m-auto' src={I9} alt='imagen marketing'/></a>
</div>



<div className='items-center text-center' onClick={handleClick.bind(this, "informaticaVisible")}>
  <h2>Informatica</h2>
  <a className='hover: cursor-pointer'><img className='hover:w-full w-11/12 m-auto' src={I8} alt='imagen marketing'/></a>
</div>



</div>

</div>


<div>
<Marketing props={state}/>
</div>

<div>
<Diseño props={state}/>
</div>

<div>
  <Informatica props={state}/>
</div>





    </div>
    </div>
  )
}


export default Servicios

