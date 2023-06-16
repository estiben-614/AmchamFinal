import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Recuperamos el estado de inicioSesión y su función cambio de App.js
export const PaginaRegistro = ({inicioSesion, setInicioSesion}) => {
    const navigation=useNavigate()
    const [nuevoUsuario, setnuevoUsuario] = useState({
        nombre:null,
        correo:null,
        contrasena:null
    })

    //Guarda la info en el objeto nuevo usuario
    const manejarEntrada=(evento)=>{
        //Hace una copia de nuevoUsuario, name guarda la propiedad del objeto, y value su valor
        setnuevoUsuario({...nuevoUsuario,[evento.target.name]:evento.target.value})
        // console.log(nuevoUsuario)
    }
    
    //Muestra los datos del usuario
    const manejarEnvio=(evento)=>{
        evento.preventDefault()

        //Si viene un campo vacio
        if(!nuevoUsuario.nombre || !nuevoUsuario.correo  || !nuevoUsuario.contrasena){
            alert('Todos los campos son obligatorios')
            //return hace que no continue el programa
            return
        }
        else{
            
            //Enviamos al backend
            localStorage.setItem('backend',JSON.stringify(nuevoUsuario))
    
            //Recibimos respuesta del backend
            localStorage.setItem('token',JSON.stringify({name:nuevoUsuario.nombre}))
            
            //Cambiamos el estado del inicio de sesión
            setInicioSesion(true)
            //Redirigimos a la pagina privada
            navigation('/panelControl')

        }
    }
  return (
    <div>
        <div className="contenedorTitulo">

            <h1 className='titulo'>Registro</h1>
        </div>
        <form className='registro' onSubmit={manejarEnvio}>
            <input type="text" name="nombre" id="" placeholder='Nombre' onInput={manejarEntrada} required/>
            <input type="email" name="correo" id="" placeholder='Correo' onInput={manejarEntrada} required/>
            <input type="password" name="contrasena" placeholder='Contraseña' onInput={manejarEntrada} required/> 
            <button type='submit' className="boton">Registrarse</button>
        </form>

    </div>
  )
}

