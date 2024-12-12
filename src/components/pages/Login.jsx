import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-box">
      <h1 className="txt-gra txt-center">Inicia sesión para facilitar tus compras en línea</h1>
      <div className="input-box">
        <h6>Nombre de usuario</h6>
        <input type="text" />
        <h6>Contraseña</h6>
        <input type="password" />
      </div>
      <button className="btn-1 " onClick={() => navigate("/")}>Iniciar sesión</button>
      <button className="btn-3 " onClick={() => navigate("/registro")}>Registrarse</button>
    </div>
  );
};
