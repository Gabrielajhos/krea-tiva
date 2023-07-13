
import Logo from '../../img/logo2.png'




const Header = () => {
  return (
    <>

    <div className='fondo '>

    <nav className='md:flex block space-x-8 items-center p-4 md:ml-4 text-violet-900 md:text-2xl text-md font-bold font-sans '>
    <img className='w-28' src={Logo} alt="Logo de Krea-tiva"/>

    <div className='flex md:space-x-8 space-x-4'>
      <a className='hover:text-orange-500 block hover:text-3xl' href='#home'>Home</a>
      <a className='hover:text-orange-500 block hover:text-3xl' href='#nosotros'>Nosotros</a>
      <a className='hover:text-orange-500 block hover:text-3xl'  href='#servicios'>Servicios</a>
      <a className='hover:text-orange-500 block hover:text-3xl'  href='#contactos'>Contacto</a>
      <a className='hover:text-orange-500 block hover:text-3xl'  href='#galeria'>Clientes</a>
      </div>
    </nav>

    <div className='mt-32' id='home'>
    <h3 className='text-orange-600 text-4xl ml-10 md:ml-5 font-bold' >Bienvenido a </h3>
      <h1 className='text-violet-900 md:text-8xl text-6xl ml-12 md:ml-2 font-sans mt-4 font-bold'>Krea-<span className='md:text-violet-900 text-white'>Tiva</span></h1>
    </div>
    <h2 className='text-violet-900 font-bold mt-16 mb-32 md:text-5xl text-4xl w-1/3 ml-6'>Soluciones tecnologícas a tu alcance.</h2>

    <a href='#contactos' className='bg-orange-600 ml-6 shadow-2xl mt-16 p-4 text-2xl hover:p-6 text-white font-bold'>Contatanos</a>



    </div>

    <section>
        <a href="https://wa.me/+5491126383489?text=Hola! quisiera información sobre un producto de su pagina web. " class="whatsapp-button" target="_blank">
                <img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="whatsapp"/>
              </a>
        </section>  

   </>

   
  )
}

export default Header
