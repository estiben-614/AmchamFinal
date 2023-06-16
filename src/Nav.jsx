import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


//Recibimos el inicioSesion y su función de cambio de estado desde App.jsx
export const Nav = ({inicioSesion, setInicioSesion}) => {

  const navigation=useNavigate()
  let salida=''

  //Función para cerrarSesión
  const cerrarSesión=()=>{
    //Eliminamos el token de inicio de sesión
    localStorage.removeItem('token')

    //Cambiamos el estado a no logueado
    setInicioSesion(false)

    //Redirigimos al inicio
    navigation('/')
  }

  //Si no hay un inicio de sesión
  if(!inicioSesion){
    salida= <>
          <li><Link to='/'>Iniciar Sesión</Link></li>
          <li><Link to='/registro'>Registrarse</Link></li>
    </>

  }
  else{
    salida=<>
      <li><Link to='/panelControl'>Panel de control</Link></li>
      <li><button  className='cerrarSesion'onClick={cerrarSesión}> Cerrar sesión </button></li>
    </>

  }
  return (

    <>
    <nav className='menu'> 
        
        <label htmlFor="check" class="checkbtn">
        </label>
    
        {/* Va a la ruta que se creó en App.jsx */}
        <ul>
          {salida}
        </ul>
    </nav>

    
    
    
    
    </>
  )
}
