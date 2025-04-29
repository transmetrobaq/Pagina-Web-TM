import React from 'react';
import Acordeon from '../components/Acordeon';
import '../styles/components/Acordeon.css';

const Transparecia = () => (
  <div className="container transp">
    <div className="row">
      <h2 id="transparencia" className="text-center">
        Transparencia
      </h2>
      <h3 className="text-center">Acceso a la información pública</h3>
      <Acordeon />
      <div className="container" style={{ padding: '20px' }}>
        {/* <!-- Button trigger modal --> */}
        <center>
          <button
            type="button"
            className="btn btn-transparencia"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              marginTop: '20px',
              fontSize: '18px',
              width: 'AUTO',
              backgroundColor: '#163e64',
              color: 'white',
            }}
          >
            Encuesta de Transparencia 
          </button>
        </center>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Encuesta Transmetro
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div
                className="modal-body "
                style={{ width: '150wh', height: '3209px' }}
              >
                <iframe
                  title="Encuesta Participa "
                  src="https://forms.office.com/r/5xLFhJRrch?origin=lprLink"
                  style={{ width: '100%', height: '3209px' }}
                  
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Transparecia;
