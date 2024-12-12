import React from "react";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const navigate = useNavigate();
  return (
    <div className="login-box">
      <h1 className="txt-gra txt-center">Creá una cuenta
      y empezá a disfrutar con tu mascota</h1>
      <div className="input-box">
        <h6>Nombre de usuario</h6>
        <input type="text" />
        <h6>Correo</h6>
        <input type="text" />
        <div className="box-passwords">
          <div>
          <h6>Contraseña</h6>
          <input type="password" />
          </div>
          <div>
          <h6>Confirmar contraseña</h6>
          <input type="password" />
          </div>
        </div>

      </div>
      <button className="btn-1 " onClick={() => navigate("/")}>Crear Usuario</button>
    </div>
  );
};
