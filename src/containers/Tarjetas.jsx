import React from 'react';
import '../styles/components/Tarjetas.css';
// eslint-disable-next-line arrow-body-style
const Tarjetas = () => {
  return (
    <div className="container tarjetas__tm">
      <h1 className="text-center mx-auto">Tarjetas del Sistema</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Persona_Sonteniendo_Chancletas_0a2ece4127.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Descripción: </h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Persona sosteniendo en sus manos
                chancletas de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Persona_Sonteniendo_Flotadores_396d105336.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Persona sosteniendo en sus manos
                flotadores de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Vendedor_Flotadores_b152e00da6.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico. Vendedor ambulante con flotadores
                de diversos colores.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://apiwebtm.com/uploads/Futbol_nos_une_81b8691d64.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Descripción:</h5>
              <p className="card-text">
                Tarjeta con diseño artístico de tres futbolistas colombianos e
                infraestructura del Estadio Metropolitano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
