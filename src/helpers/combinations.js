import _ from 'lodash';

export const obtenerCombinaciones=async(cantidadCombinaciones,productos)=>{
    const combinations = await _.chain(productos)
        .flatMap((obj, index) =>
          _.flatMap(_.slice(productos, index + 1), otherObj => ({
            orden: [obj, otherObj],
          }))
        )
        .take(cantidadCombinaciones) //Cantidad de combinaciones
        .value();
  
        return combinations
  }

  export  const numeroCombinaciones =()=>{
    const numero=Math.floor(Math.random() * 100) + 1; // Genera N combinaciones entre 1 y 50 de 2 pedidos

    return numero
  } 
