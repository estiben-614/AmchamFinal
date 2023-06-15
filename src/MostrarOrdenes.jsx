import React, { useState } from 'react';

export const MostrarOrdenes = ({ ordenes }) => {
  const [numeroPedido, setNumeroPedido] = useState(0);

  const productos = ordenes.map(({ orden },indice) =>
    orden.map(subOrden => (
      <li key={subOrden.title}>{subOrden.title}</li>
    ))
  );

  return (
    <div>
      <p>{numeroPedido}</p>
      <div>{productos}</div>
    </div>
  );
};
