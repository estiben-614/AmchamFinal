import React, { useEffect, useState } from 'react';
import { numeroCombinaciones, obtenerCombinaciones } from './helpers/combinations';
import { MostrarOrdenes } from './MostrarOrdenes';
import { obtenerOrdenes } from './helpers/obtenerOrdenes';



export const Orders = ({ productos }) => {
  const [ordenes, setOrdenes] = useState([]);
  const [total, setTotal] = useState(0)
  const [totalPedidos, setTotalPedidos] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const [detallePedidos, setDetallePedidos] = useState([])
  const [mostrarDetalleOrden, setMostrarDetalleOrden] = useState(false)
  const [combinaciones, setCombinaciones] = useState(0)
  
  
 
//Función para mostrar pedidos
  const mostrarPedidos=()=>{

    setMostrarDetalleOrden(true)
      
  }

  //Funcion para cambiar la cantidad de ordenes
  const masOrdenes=()=>{
    const cantidadCombinaciones=numeroCombinaciones()
    setCombinaciones(cantidadCombinaciones)
    const obtenerCombinacionesAsync = async () => {
      const combinations = await obtenerCombinaciones(combinaciones, productos);
      setOrdenes(combinations);
      // console.log({combinations})
      
      setTotalPedidos(combinaciones);
    };
  
    obtenerCombinacionesAsync();


  }
    

  useEffect(() => {
    // const cantidadCombinaciones = Math.floor(Math.random() * 50) + 1; // Genera N combinaciones entre 1 y 50 de 2 pedidos
    // console.log({ cantidadCombinaciones });
  const cantidadCombinaciones=numeroCombinaciones()
  setCombinaciones(cantidadCombinaciones)
  const obtenerCombinacionesAsync = async () => {
    const combinations = await obtenerCombinaciones(combinaciones, productos);
    setOrdenes(combinations);
    // console.log({combinations})
    
    setTotalPedidos(combinaciones);
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
        <p><strong>Total productos en tienda:</strong> {productos.length}</p>



        <div className='mostrarBotones'>
        <br /> <br /> <br /> <br /> <br /> 
        { combinaciones>0 && (<button className='boton' onClick={()=>masOrdenes()}>Más combinaciones </button>)}

        {/* Mostramos la info de cada Orden y ocultamos el boton siempre y cuando su estado sea diferente de false */}
        { !mostrarDetalleOrden && (<button className='boton' onClick={()=>mostrarPedidos()}>Mostrar Pedidos</button>)}
        {mostrarDetalleOrden && <MostrarOrdenes ordenes={ordenes} setMostrarDetalleOrden={setMostrarDetalleOrden}></MostrarOrdenes>}

        </div>
        
        
      </div>
    </>
  );
};
