
import Im1 from '../../img/face.png'
import Im2 from '../../img/insta.png'
import Im3 from '../../img/link.png'
import Im4 from '../../img/gmail.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtsital', 'template_ajltz9i', form.current, 'jfzFx7gOy8pa3NgF5')
      .then((result) => {
          console.log(result.text);
          swal({
            title: 'Su mensaje fue enviado correctamente',
            icon: 'success',
            buttons: ['ok']
          } )
              (location.href ='/')
           
          
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='bg-gray-100 p-6 md:flex block ' id='contactos'>
      <div className='md:w-1/2'>
        <h2 className='text-4xl  font-semibold font-sans md:w-2/3 text-violet-900 mt-20 ml-8'>Contactate con nosotros y aclara todas tus dudas!</h2>
        <h3 className='text-2xl text-center mt-10 text-gray-900'>Solicita tu presupuesto sin compromisos</h3>

        <div className='flex p-6 justify-center w-full'>
          <a href='https://www.facebook.com/profile.php?id=100090567495604'><img className='m-4 hover:animate-spin hover:cursor-pointer' src={Im1} alt='Imagen facebook'/></a>
          <a href='https://www.instagram.com/krea__tiva/?hl=es'><img  className='m-4 hover:animate-spin hover:cursor-pointer' src={Im2} alt='Imagen instagram'/></a>
          <a><img className='m-4 hover:animate-spin hover:cursor-pointer' src={Im3} alt='Imagen Linkedin'/></a>
          <a><img className='m-4 hover:animate-spin hover:cursor-pointer' src={Im4} alt='Imagen gmail'/></a>
        </div>
      </div>

      <div className='md:w-6/12 w-11/12' >
      <form className='mb-20 mt-16'  ref={form} onSubmit={sendEmail}>

        <fieldset className='' >

            <input  className='border-none p-2 rounded-md m-4 shadow-md responsive-form'  name='nombre' id='nombre' required placeholder='Tu nombre'/>
            <input  className='border-none p-2 rounded-md m-4 shadow-md responsive-form' required name='telefono' id='telefono' placeholder='Tu telefono'/>
       </fieldset>


       <fieldset>
            <input className='border-none p-2 rounded-md m-4 shadow-md responsive-form' required name='email' id='email ' placeholder='Email'/>
            <input className='border-none p-2 rounded-md m-4 shadow-md responsive-form' name='cliente' id='cliente' placeholder='Indique si es empresa'/>

        </fieldset>

        <fieldset>
            <textarea className='border-none m-auto p-2 rounded-md h-64 w-3/4 shadow-md responsive-form' required name='mensaje' id='mensaje' placeholder="Comentanos sobre tu proyecto"></textarea>
        </fieldset>

        <input type='submit' className='bg-violet-900 p-2 rounded-md shadow-md text-white font-semibold hover:p-3'value='Enviar' />

      </form>

      </div>

      
    </div>
  )
}

export default Contacto
