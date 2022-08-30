import React from 'react';
import Acordeon from '../components/Acordeon';
import '../styles/components/Acordeon.css';

const Transparecia = () => (
  <div className="container transp">
    <div className="row">
      <h1 id="transparencia" className="text-center">
        TRANSPARENCIA
      </h1>
      <h2 className="text-center">Acceso a la información pública</h2>
      <Acordeon />
    </div>
  </div>
);

export default Transparecia;
