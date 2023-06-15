import React, { useEffect, useState } from 'react';
import { obtenerCombinaciones } from './helpers/combinations';
import { MostrarOrdenes } from './MostrarOrdenes';


const obtenerOrdenes=async(ordenes,setDetallePedidos,setTotal,detallePedidos,setPromedio,totalPedidos)=>{
  let suma=0
  await ordenes.forEach(({orden})=>{
    //SubOrden tiene el detalle de cada pedido
    orden.forEach(subOrden=>{
        suma+=subOrden.price
        setTotal(suma)  
    })
    
    // console.log({orden})
    //Guarda todos los pedidos
    setDetallePedidos([...detallePedidos, orden]);
    // console.log({detallePedidos})
   
})

//Obtenemos el promedio como la suma de los productos sobre la cantidad de pedidos multiplicada por 2 
setPromedio(suma/(totalPedidos*2))
}

export const Orders = ({ productos }) => {
  const [ordenes, setOrdenes] = useState([]);
  const [total, setTotal] = useState(0)
  const [totalPedidos, setTotalPedidos] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const [detallePedidos, setDetallePedidos] = useState([])
  
  
  const detalle = ordenes.map(({orden})=>{
    orden.map(subOrden=>{
      return <>
        <li>{subOrden.title}</li>
      </>
    })
  })

  const mostrarPedidos=()=>{
    
      <MostrarOrdenes ordenes={ordenes}></MostrarOrdenes>
  }
    

  useEffect(() => {
    const cantidadCombinaciones = Math.floor(Math.random() * 3) + 1; // Genera N combinaciones entre 1 y 10 de 2 pedidos
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
      <div>Orders</div>
      <div className='infoOrdenes'>
        <p>Ingresos Totales: {total}</p>
        <p>Pedidos Totales: {totalPedidos}</p>
        <p>Cantidad de productos: {totalPedidos * 2}</p>
        <p>Promedio por producto: {promedio}</p>
        <button onClick={()=>mostrarPedidos()}>Mostrar Pedidos</button>
        <MostrarOrdenes ordenes={ordenes}></MostrarOrdenes>
        
      </div>
    </>
  );
};
