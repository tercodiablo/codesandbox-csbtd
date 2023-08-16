import React, { useState, useEffect } from "react";
import "../styles.css";

const Emend = () => {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmNewPin, setConfirmNewPin] = useState("");
  const [message, setMessage] = useState("");

  //from localStorage
  useEffect(() => {
    const storedPin = localStorage.getItem("pin");
    if (storedPin) {
      setOldPin(storedPin);
    }
  }, []);

  const handleOldPinEmend = (e) => {
    setOldPin(e.target.value);
  };

  const handleNewPinEmend = (e) => {
    setNewPin(e.target.value);
  };

  const handleConfirmNewPinEmend = (e) => {
    setConfirmNewPin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldPin === "1932" && newPin === confirmNewPin) {
      try {
        localStorage.setItem("pin", newPin);
        alert("Tu PIN ha cambiado");
      } catch (error) {
        alert("Error al cambiar el PIN.");
      }
    } else {
      alert("Asegurate de que los nuevos PIN coincidan");
    }
  };

  return (
    <>
      <p>Para cambiar el PIN, ingresa el antiguo PIN y elige uno nuevo:</p>
      <div className="container">
      <form onSubmit={handleSubmit}>
          <label>Antiguo PIN:</label>
          <input type="password"  onChange={handleOldPinEmend} />
          <label>Nuevo PIN:</label>
          <input type="password" value={newPin} onChange={handleNewPinEmend} />
          <label>Confirmar nuevo PIN:</label>
          <input
            type="password"
            value={confirmNewPin}
            onChange={handleConfirmNewPinEmend}
          />
        <button type="submit">Cambiar PIN</button>
      </form>
      </div>
      <p>{message}</p>
    </>
  );
};

export default Emend;
