import { useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { Productos } from './Productos'
import { Orders } from './Orders'



function PanelControl() {
  
  const {productos,loading}=useFetch()
  // console.log(productos)

  
  return (<>
          <h1>Panel de control</h1>
          {/* Indicador de carga */}
          {loading && (<h3>Cargando...</h3>)}

          {productos.map(producto=>{
            return (
              <Productos key={producto.id} {...producto}></Productos>
            )
          })}

          <Orders productos={productos}></Orders>
      </>
  )
  }

export default PanelControl
