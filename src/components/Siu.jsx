import React from 'react';
import '../styles/components/Siu.css';


const Siu = () => (
  <div className="card mb-3 border border-0" style={{ marginTop: '50px' }}>
    <div className="row g-0 justify-content-center ">
      <div className="col-md-7">
        <div className="card-body" style={{ marginTop: '-20px' }}>
          
          <div className="card mb-6">
            <div className="row g-0 cardSiu">
              <div className="col-md-4">
                <img
                  src="https://apiwebtm.com/uploads/SIU_para_pagina_web_732f3dd6ec.png"
                  className=" img-Siu img-fluid rounded-start"
                  alt="logo transmetro"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body " id="organiTM">
                  <h4 className="Text-Siu">Consulta tu saldo en el Sistema de Información al Usuario – SIU </h4>
                  <p
                    className="card-text"
                    style={{
                      marginLeft: '20px',
                    }}
                  >
                    Consulta tu saldo disponible y visualiza tu historial de recargas desde cualquier lugar en que te encuentres. Registra tus datos y personaliza tu Tarjeta
                     Transmetro para estar siempre al tanto de tus movimientos en el Sistema. 
                  </p>
                  <div className=" siu-btn-group d-flex justify-content-center">
                    <a
                      href="https://siu.transmetro.gov.co/auth/realms/PIS/protocol/openid-connect/auth?client_id=PIS&redirect_uri=https%3A%2F%2Fsiu.transmetro.gov.co%2Fsiu%2Fsign-up&state=ba60aa39-6eb7-4c02-896b-55257dc654a5&response_mode=fragment&response_type=code&scope=openid&nonce=e08eea92-7518-4ab6-853e-f50b48511e71"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                      aria-label="Inicia sesión"
                      className="btn-Siu btn btn-outline-warning btn-rounded"
                      data-mdb-ripple-init
                      data-mdb-ripple-color="dark"

                    >
                      Inicia sesión 
                    </a>
                    <a
                      href="https://siu.transmetro.gov.co/siu/sign-up"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                      aria-label="Regístrate "
                      className="btn-Siu btn btn-outline-warning btn-rounded"
                      data-mdb-ripple-init
                      data-mdb-ripple-color="dark"

                    >
                      Regístrate 
                    </a>
                    <a
                      href="https://forms.office.com/pages/responsepage.aspx?id=SEG3lKY8wUejpoDbLhALDim3VBlIiyROn5TANJAFNDxUNEQ3U1ZEVFNWTURGSkJQTjYyTktTNURWVi4u&origin=lprLink&route=shorturl"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="button"
                      aria-label="Personaliza"
                      className="btn-Siu btn btn-outline-warning btn-rounded"
                      data-mdb-ripple-init
                      data-mdb-ripple-color="dark"
                      
                    >
                      Personaliza
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Siu;
