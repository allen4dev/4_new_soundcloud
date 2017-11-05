import React from 'react';

import './index.css';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <h1 className="Hero-title">Conectar en Soundcloud</h1>
        <p className="Hero-text">
          Descubre, escucha y comparte un catalogo de musica que no deja de
          crecer con artistas emergentes y consolidados de todo el mundo.
        </p>
        <button className="Hero-button btn btn-normal">
          Registrate gratis
        </button>
      </div>
    </div>
  );
};

export default Hero;
