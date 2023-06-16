import React, { useState } from 'react';

export const MostrarOrdenes = ({ ordenes ,setMostrarDetalleOrden}) => {

  const [sumaPedido, setSumaPedido] = useState(0)
  const hashmap=new Map()
  const productos = ordenes.map(({ orden },indice) =>{

    return (
      <div key={indice}>
          <h3><strong>Pedido {indice+1}</strong></h3>
          {
              orden.map(subOrden => {
                let totalSumaPedido=0
                const idProducto=subOrden.id
                const copiaSuborden={...subOrden}
                // console.log(copiaSuborden)
                hashmap.set(idProducto,copiaSuborden)
                if(!hashmap.get(idProducto).cantidad){
                  hashmap.get(idProducto).cantidad=1
                }
                else{
                  hashmap.get(idProducto).cantidad+=1
                }

                //Total de cada pedido
                totalSumaPedido+= hashmap.get(idProducto).cantidad * hashmap.get(idProducto).price
                // console.log(totalSumaPedido)
                return (
                  (
                    <>
                    <li key={hashmap.get(idProducto)}> {hashmap.get(idProducto).title}  x {hashmap.get(idProducto).cantidad} x $ {hashmap.get(idProducto).price} = $ {hashmap.get(idProducto).cantidad*hashmap.get(idProducto).price}</li>
                    </>
                  )
                )
              })

          }

      </div>
    )

  }

  );
  const cerrar=()=>{
    setMostrarDetalleOrden(false)
  }

  return (
    <div>
      <h3>Detalle pedidos</h3>
      <button onClick={cerrar} className='botonCerrar'>X</button>
      <div>{productos}</div>
      {/* <h3>Total : {sumaPedido}</h3> */}

      
    </div>
  );
};
