export const obtenerOrdenes=async(ordenes,setDetallePedidos,setTotal,detallePedidos,setPromedio,totalPedidos)=>{
    let suma=0
    await ordenes.forEach(({orden})=>{
      //SubOrden tiene el detalle de cada pedido
      orden.forEach(subOrden=>{
          suma+=subOrden.price
          setTotal(suma)  
      })
      
      
      //Guarda todos los pedidos
      setDetallePedidos([...detallePedidos, orden]);
      // console.log({detallePedidos})
     
  })
  
  //Obtenemos el promedio como la suma de los productos sobre la cantidad de pedidos multiplicada por 2 
  setPromedio(suma/(totalPedidos*2))
  }