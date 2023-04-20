
import Logo from '../../img/logo2.png'




const Header = () => {
  return (
    <>

    <div className='fondo '>

    <nav className='md:flex block space-x-8 items-center p-4 md:ml-4 text-violet-900 md:text-lg text-sm font-bold font-sans '>
    <img className='w-28' src={Logo} alt="Logo de Krea-tiva"/>

    <div className='flex md:space-x-8 space-x-4'>
      <a className='hover:text-orange-500 block hover:text-2xl' href='#home'>Home</a>
      <a className='hover:text-orange-500 block hover:text-2xl' href='#nosotros'>Nosotros</a>
      <a className='hover:text-orange-500 block hover:text-2xl'  href='#servicios'>Servicios</a>
      <a className='hover:text-orange-500 block hover:text-2xl'  href='#contactos'>Contacto</a>
      <a className='hover:text-orange-500 block hover:text-2xl'  href='#galeria'>Portafolio</a>
      </div>
    </nav>

    <div className='mt-32' id='home'>
    <h3 className='text-orange-600 text-4xl ml-5' >Bienvenido a </h3>
      <h1 className='text-violet-900 md:text-8xl text-6xl ml-2 font-sans mt-4 font-bold'>Krea-<span>Tiva</span></h1>
    </div>
    <h2 className='text-violet-900 font-bold mt-16 mb-32 md:text-5xl text-4xl w-1/3 ml-6'>Soluciones tecnologícas a tu alcance.</h2>

    <a href='#contactos' className='bg-orange-600 ml-6 shadow-2xl mt-16 p-4 text-2xl hover:p-6 text-white font-bold'>Contatanos</a>

    </div>
   
   </>

   
  )
}

export default Header
