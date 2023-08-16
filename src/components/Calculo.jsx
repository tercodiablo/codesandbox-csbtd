import React, { useState, useEffect } from 'react';

const Calculo = () => {
  const [numAcciones, setNumAcciones] = useState(0);
  const valorAccion = 300;
  const valorTotal = numAcciones * valorAccion;

  const handleNumAccionesChange = (event) => {
    const value = parseInt(event.target.value);
    setNumAcciones(isNaN(value) ? 0 : value);
  };

  useEffect(() => {
    localStorage.setItem('numAcciones', numAcciones);
  }, [numAcciones]);

  // Cargar el número de acciones desde el local storage al montar el componente
  useEffect(() => {
    const storedNumAcciones = parseInt(localStorage.getItem('numAcciones'));
    if (!isNaN(storedNumAcciones)) {
      setNumAcciones(storedNumAcciones);
    }
  }, []);

  return (
    <>
      <form>
        <label htmlFor="numAcciones">Cantidad de Acciones:</label>
        <input
          type="text"
          id="numAcciones"
          name="numAcciones"
          min="1"
          max="100"
          value={numAcciones}
          onChange={handleNumAccionesChange}
        />
        <br />
        <label>Valor Monetario por Acción: <span className="txt-sal">${valorAccion}</span></label>
        <label>Valor Total en el Mercado: <span className="txt-sal">${valorTotal.toLocaleString()}</span></label>
      </form>
    </>
  );
};

export default Calculo;
