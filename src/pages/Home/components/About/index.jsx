import React from 'react';

import './index.css';

const About = () => {
  return (
    <div className="About container">
      <div className="About-content">
        <h2 className="About-title">Llamada a todos los creadores</h2>
        <p className="About-text">
          Hazte con SoundCloud para estar en contacto con tus seguidores,
          compartir tus canciones y aumentar tu publico. ¿A que esperas?
        </p>

        <button className="About-button btn btn-flat">Mas informacion</button>
      </div>
    </div>
  );
};

export default About;
