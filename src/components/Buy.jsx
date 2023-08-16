import React, { useState } from "react";
import "../styles.css";

const Buy = () => {
  const [accionesCompradas, setAccionesCompradas] = useState([]);
  const [cantidad, setCantidad] = useState(0); // Estado para la cantidad de acciones a comprar

  const comprarAcciones = () => {
    if (cantidad > 0) {
      // Objeto para representar las acciones compradas
      const nuevaAccion = {
        id: accionesCompradas.length + 1,
        cantidad: cantidad,
      };
      
      setAccionesCompradas([...accionesCompradas, nuevaAccion]);
      setCantidad(0);
    }
  };

  return (
    <>
      <h3>Compra de acciones</h3>
      <div className="container">
        <form>
        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          />
        </label>
        </form>
        <button onClick={comprarAcciones}>Comprar</button>
      <div>
        <h4>Acciones compradas</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {accionesCompradas.map((accion) => (
              <tr key={accion.id}>
                <td>{accion.id}</td>
                <td>{accion.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Buy;
