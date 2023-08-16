import React, { useState } from "react";
import Menu from "./Menu"; // Importar componente
import "../styles.css";

function Login() {
  const [login, setLogin] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [pin, setPin] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();

    if (
      nombre.length === 0 ||
      apellido.length === 0 ||
      usuario.length === 0 ||
      pin.length === 0
    ) {
      alert("Complete los datos faltantes!");
    } else {
      if (usuario === "naiatapex" && pin === "1932") {
        localStorage.setItem("nombre", nombre); //Guarda
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("pin", pin);
        setLogin(true);
        document.getElementById("form_login").style.display = "none"; //ocultar el formulario
      } else {
        setLogin(false);
        alert("Error de usuario y/o PIN");
        setUsuario("");
        setPin("");
        document.getElementById("usuario").focus();
      }
    }
  }

  return (
    <div className="container">
      <form id="form_login" action="">
        <h1>NaiatApex</h1>
        <label htmlFor="nombre">Nombre(s):</label>
        <input
          type="text"
          id="nombre"
          placeholder="Escribe tu nombre"
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="apellido">Apellido(s):</label>
        <input
          type="text"
          id="apellido"
          placeholder="Escribe tu(s) apellido(s)"
          onChange={(e) => setApellido(e.target.value)}
          required
        />

        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          id="usuario"
          placeholder="Escribe tu usuario"
          onChange={(e) => setUsuario(e.target.value)}
          required
        />

        <label htmlFor="pin">PIN:</label>
        <input
          type="password"
          id="pin"
          placeholder="Escribe tu PIN"
          onChange={(e) => setPin(e.target.value)}
          required
        />
          <button type="submit" onClick={iniciarSesion}>
            Iniciar Sesión
          </button>
      </form>
      {/* cuando inicie sesion muestra componente Menu */}
      {login && <Menu nombre={nombre} />}
    </div>
  );
}

export default Login;
