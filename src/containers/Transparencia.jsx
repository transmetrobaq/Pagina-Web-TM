import React from 'react';
import Acordeon from '../components/Acordeon';
import '../styles/components/Acordeon.css';

const Transparecia = () => (
  <div className="container transp">
    <div className="row">
      <h2 id="transparencia" className="text-center">
        Transparecia
      </h2>
      <h3 className="text-center">Acceso a la información pública</h3>
      <Acordeon />
    </div>
  </div>
);

export default Transparecia;
