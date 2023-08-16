import React, { useState } from 'react';

const Statuslist = () => {
  const [transacciones, setTransacciones] = useState([
    { id: 1, numAcciones:3, valorMonetario: 300, valorMercado:900, fondos: 1900 },
    { id: 2, numAcciones:1, valorMonetario: 300, valorMercado:300, fondos: 1900 },
    { id: 2, numAcciones:4, valorMonetario: 300, valorMercado:1200, fondos: 1900 },
    
  ]);

  const imprimirEstadoCuenta = () => {
    // Lógica de impresión aquí
    window.print();
  };

  return (
    <div>
      <h3>Estado de Cuenta</h3>
      <table>
        <thead>
          <tr>
          <th>-ID-</th>
            <th>Cant. Acciones</th>
            <th>Valor monetario</th>
            <th>Valor en el mercado</th>
            <th>Fondos disponibles</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((transaccion) => (
            <tr key={transaccion.id}>
              <td>{transaccion.id}</td>
              <td>{transaccion.numAcciones}</td>
              <td>$ {transaccion.valorMonetario}.00</td>
              <td>$ {transaccion.valorMercado}.00</td>
              <td>$ {transaccion.fondos}.00</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={imprimirEstadoCuenta}>Imprimir
      </button>
      </div>
  );
};

export default Statuslist;
