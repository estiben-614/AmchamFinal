import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { Productos } from './Productos'
import { Orders } from './Orders'
import { useNavigate } from 'react-router-dom'



function PanelControl({inicioSesion,setInicioSesion}) {
  
  const {productos,loading}=useFetch()
  // console.log(productos)
  const navigation=useNavigate()
  

  //Recuperemos la info del token
  useEffect(() => {
    const token=JSON.parse(localStorage.getItem('token'))
    //Si existe el token y inicioSesion es true
    // if(token && inicioSesion==true)
    if(token && inicioSesion==true){
      //Imprimimos el nombre para verificar 
      console.log(token.name)
      
    }
    //Si no lo redirigimos 
    else{
      navigation('/') 
    }
    
  }, [])
  
  return (<>

          <body className='bodyPrivado'>
            
            <h1>Panel de control</h1>
            {/* Indicador de carga */}
            {loading && (<h3>Cargando...</h3>)}

            {productos.map(producto=>{
              return (
                <Productos key={producto.id} {...producto}></Productos>
              )
            })}

            <Orders productos={productos}></Orders>
          </body>
      </>
  )
  }

export default PanelControl
