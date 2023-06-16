import React, { useEffect, useState } from 'react';
import { obtenerCombinaciones } from './helpers/combinations';
import { MostrarOrdenes } from './MostrarOrdenes';
import { obtenerOrdenes } from './helpers/obtenerOrdenes';



export const Orders = ({ productos }) => {
  const [ordenes, setOrdenes] = useState([]);
  const [total, setTotal] = useState(0)
  const [totalPedidos, setTotalPedidos] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const [detallePedidos, setDetallePedidos] = useState([])
  const [mostrarDetalleOrden, setMostrarDetalleOrden] = useState(false)
  
  
 
//Función para mostrar pedidos
  const mostrarPedidos=()=>{

    setMostrarDetalleOrden(true)
      
  }
    

  useEffect(() => {
    const cantidadCombinaciones = Math.floor(Math.random() * 50) + 1; // Genera N combinaciones entre 1 y 50 de 2 pedidos
    // console.log({ cantidadCombinaciones });

  const obtenerCombinacionesAsync = async () => {
    const combinations = await obtenerCombinaciones(cantidadCombinaciones, productos);
    setOrdenes(combinations);
    // console.log({combinations})
    
    setTotalPedidos(cantidadCombinaciones);
  };

  obtenerCombinacionesAsync();
  }, [productos]);

  useEffect(() => {
       const obtenerOrdenesAsync=async()=>{
          await obtenerOrdenes(ordenes,setDetallePedidos,setTotal,detallePedidos,setPromedio,totalPedidos)
          
          
       }
       
       obtenerOrdenesAsync()
       
    
  }, [ordenes]);

  

  return (
    <>
      <div className='infoOrdenes'>
        <p><strong>Ingresos Totales:</strong> <strong>$</strong>{total}</p>
        <p><strong>Pedidos Totales:</strong>  {totalPedidos}</p>
        <p><strong>Cantidad de productos:</strong>  {totalPedidos * 2}</p>
        <p><strong>Promedio por producto:</strong> <strong>$</strong> {promedio}</p>

        <div className='mostrarBotones'>
        <br /> <br /> <br /> <br /> <br /> 
        {/* Mostramos la info de cada Orden y ocultamos el boton siempre y cuando su estado sea diferente de false */}
        { !mostrarDetalleOrden && (<button className='boton' onClick={()=>mostrarPedidos()}>Mostrar Pedidos</button>)}
        {mostrarDetalleOrden && <MostrarOrdenes ordenes={ordenes} setMostrarDetalleOrden={setMostrarDetalleOrden}></MostrarOrdenes>}

        </div>
        
        
      </div>
    </>
  );
};
