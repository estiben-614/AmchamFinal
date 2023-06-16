import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Recuperamos el estado de inicioSesión y su función cambio de App.js
export const PaginaIniciarSesion = ({inicioSesion, setInicioSesion}) => {
    const navigation=useNavigate()
    const [backend, setBackend] = useState(null)

    const [nuevoInicioSesion , setNuevoInicioSesion] = useState({
        correo:null,
        contrasena:null
    })

    //Recuperemos la info del localStorage
    useEffect(() => {
      const back=JSON.parse(localStorage.getItem('backend'))
      //Si existe
      if(back){
        //Reemplazamos el valor de back en backend
        setBackend(back)
      }
      
    }, [])
    

  //Recuperamos la info que el usuario introduzca en los input 
    const manejarEntrada=(evento)=>{
      //Hacemos una copia de nuevoInicioSesion y le pasamos las propiedades correo, contrasena y sus valores
      setNuevoInicioSesion({...nuevoInicioSesion,[evento.target.name]:evento.target.value})
    //Ahora nuevoInicioSesion tiene todos los datos del login 
    
    }
    const manejarInicioSesion=(evento)=>{
      evento.preventDefault()
      
      //Validemos con la info del backend
      if(backend!==null){
        //Si pasa, los datos del back son iguales a los del user, inicia sesión
        if(nuevoInicioSesion.correo===backend.correo && nuevoInicioSesion.contrasena===backend.contrasena){
          //Recibimos respuesta del backend
          localStorage.setItem('token',JSON.stringify({name:backend.nombre}))
          setInicioSesion(true)
          navigation('/panelControl')
        }
        else{
          alert('Contraseña y/o correo incorrectos')
        }
      }
    }

    
  return (
    <div>

      <div className="contenedorTitulo">

        <h1 className='titulo'>Inicio de Sesión</h1>
        <p>En caso de no estar registrado, por favor hagalo.</p>

      </div>
        <form className='registro' onSubmit={manejarInicioSesion}>
            <input type="email" name="correo" id="" placeholder='Correo' onInput={manejarEntrada} required/>
            <input type="password" name="contrasena" placeholder='Contraseña' onInput={manejarEntrada} required/> 
            <button type='submit' className="boton">Iniciar Sesión</button>
        </form>

    </div>
  )
}

