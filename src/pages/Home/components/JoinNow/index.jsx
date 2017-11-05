import React from 'react';

import './index.css';

const JoinNow = () => {
  return (
    <div className="JoinNow container">
      <div className="JoinNow-content">
        <h2 className="JoinNow-title">Gracias por escuchar, ahora unete</h2>
        <p className="JoinNow-text">
          Guarda pistas, sigue a artistas y crea tus listas. Y todo, gratis
        </p>
        <div className="JoinNow-login">
          <button className="JoinNow-signup btn btn-normal">
            Crea tu cuenta
          </button>
          <div className="JoinNow-signin">
            <span className="JoinNow-signinText">¿Ya tienes una cuenta?</span>
            <button className="JoinNow-signinButton btn btn-flat">
              Inicia sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
