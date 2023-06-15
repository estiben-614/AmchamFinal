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