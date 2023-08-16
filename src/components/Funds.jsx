import React, { useState, useEffect } from "react";
import "../styles.css";

const Funds = () => {
  const [registrofondos, setRegistroFondos] = useState([]);
  const [fechaDeposito, setFechaDeposito] = useState("");
  const [cantidadDepositar, setCantidadDepositar] = useState("");
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    // Recuperar registrofondos al cargar el componente
    const storedRegistroFondos = JSON.parse(
      localStorage.getItem("registrofondos")
    );
    if (storedRegistroFondos) {
      setRegistroFondos(storedRegistroFondos);
    }

    const storedSaldo = localStorage.getItem("saldo");
    if (storedSaldo) {
      setSaldo(parseFloat(storedSaldo)); // Convertir a número
    }
  }, []);

  const botonDepositar = (e) => {
    e.preventDefault();
    const nuevoDeposito = {
      fecha: fechaDeposito,
      cantidad: parseFloat(cantidadDepositar)
    };

    // Actualizar
    const updatedRegistroFondos = [...registrofondos, nuevoDeposito];
    setSaldo(saldo + nuevoDeposito.cantidad);
    setRegistroFondos(updatedRegistroFondos);

    // Guarda en el Local Storage
    localStorage.setItem(
      "registrofondos",
      JSON.stringify(updatedRegistroFondos)
    );
    localStorage.setItem("saldo", (saldo + nuevoDeposito.cantidad).toString());
    setFechaDeposito("");
    setCantidadDepositar("");
  };

  return (
    <div>
      <p className="txt-sal">
        Saldo actual: <span className="txt-cant">${saldo}.00</span>
      </p>
      <h3>Registro de fondos:</h3>
      <ul>
        {/*Aplica operacion a c/elemento. 
        (elemento actual, indice de elemento actual)
        key da seguimiento de elementos lista para actualizar */}
        {registrofondos.map((dep, index) => (
          <li key={index} >
            {dep.fecha} <span class="cant-li">Monto: $ {dep.cantidad}.00</span>
          </li>
        ))}
      </ul>
      <br />
      <form onSubmit={botonDepositar}>
        <label>Fecha del depósito:</label>
        <input
          type="date"
          value={fechaDeposito}
          onChange={(e) => setFechaDeposito(e.target.value)}
        />
        <label>Cantidad a depositar:</label>
        <input
          type="text"
          value={cantidadDepositar}
          onChange={(e) => setCantidadDepositar(e.target.value)}
        />
        <button type="submit">Depositar</button>
      </form>
    </div>
  );
};

export default Funds;
