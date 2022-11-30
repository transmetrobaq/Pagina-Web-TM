/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../styles/components/Footer.css';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <>
      <footer className="container-xxl" style={{ marginTop: '50px' }}>
        <div className="row">
          <div
            id="cardBlue"
            className="col-md-9"
            style={{
              backgroundColor: '#0D4F9E',
              border: '1px solid #0D4F9E',
              borderRadius: '0 5px 0 0',
            }}
          >
            <div className="row">
              <div className="col-md-4">
                <div className="contact__us">
                  <h5>HORARIOS</h5>
                  <ul>
                    <li>
                      <i className="fa-regular fa-building" />
                      OFICINAS
                    </li>
                    <li>8:00 - 12:00</li>
                    <li>13:00-17:00</li>
                  </ul>
                </div>
                <div className="contact__us">
                  <ul>
                    <li>
                      <i className="fa-solid fa-bus" />
                      OPERACIÓN DEL SISTEMA
                    </li>
                    <li>Lunes a viernes:</li>
                    <li>05:00 - 22:00</li>
                    <li>Sábados</li>
                    <li>05:00 - 22:00</li>
                    <li>Domingos y festivos:</li>
                    <li>05:30 - 21:00</li>
                    <li>* Sujeto a modificación</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact__us">
                  <h5>ATENCIÓN AL CIUDADANO</h5>
                  <ul>
                    <li>atencionalcliente@transmetro.gov.co</li>
                    <li>
                      <span>605 3712222</span> Línea de atención
                    </li>
                  </ul>
                  <ul>
                    <li>Peticiones, quejas y reclamos</li>
                    <li>Notificaciones judiciales:</li>
                    <li>
                      <span>info@transmetro.gov.co</span>
                    </li>
                  </ul>
                  <h5 style={{ marginTop: '40px' }}>CONTACTO</h5>
                  <ul>
                    <li>Cra. 57 No. 99A - 65 Ed. Torres del Atlántico</li>
                    <li>- Torre Sur Piso 15</li>
                    <li>350 2849625 Ofic. Adm.</li>
                    <li>
                      <span>info@transmetro.gov.co</span>
                    </li>
                  </ul>

                  <ul className="preguntas">
                    <li>Preguntas frecuentes</li>
                    <li>
                      <p>-</p>
                    </li>
                    <li>Términos y condiciones</li>
                    <li>
                      <p>-</p>
                    </li>
                    <li>Política de privacidad</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-3"
            style={{
              backgroundColor: '#fff',
            }}
          >
            <div
              className="row row-cols-4"
              style={{
                backgroundColor: '#fff',
              }}
            >
              <div
                id="gridBlanco"
                className="col-md-12"
                style={{
                  backgroundColor: '#fff',
                  height: '272px',
                  border: '1px solid #fff',
                }}
              >
                <div className="google__Maps">
                  <div className="card">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.295896701137!2d-74.83027838597417!3d11.01641165773227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c4cc84719e7%3A0x982044cbfabf3060!2sTorres%20Del%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1645041789301!5m2!1ses!2sco"
                      loading="lazy"
                      style={{
                        border: '0',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                style={{
                  backgroundColor: '#E22414',
                  height: '272px',
                  border: '1px solid #E22414',
                }}
              />
              <div
                className="col-md-3"
                style={{
                  backgroundColor: '#FEDC2A',
                  height: '272px',
                  border: '1px solid #FEDC2A',
                }}
              />
              <div
                className="col-md-6"
                style={{
                  backgroundColor: '#25A03A',
                  height: '272px',
                  border: '1px solid #25A03A',
                }}
              />
            </div>
          </div>
        </div>
        {/* <div className="row gobiIcon">
          <div className="row row-cols-3 row-cols-md-5  justify-content-center">
            <div className="col">
              <picture>
                <img
                  className="gobiIcon_Pres"
                  src="https://apiwebtm.com/uploads/icosn_20_8b497e7f22.png"
                  alt="Logo Presidencia"
                />
              </picture>
            </div>
            <div className="col">
              <picture>
                <img
                  className="gobiIcon_Alcal"
                  src="https://apiwebtm.com/uploads/logo_alcaldia_c6054f4065.svg"
                  alt="Logo Alcaldia de Barranquilla"
                />
              </picture>
            </div>
            <div className="col">
              {' '}
              <picture>
                <img
                  className="gobiIcon_MinTrans"
                  src="https://apiwebtm.com/uploads/Mintransporte_39c7a45771.png"
                  alt="Logo Mintransporte"
                />
              </picture>
            </div>
            <div className="col">
              <picture>
                <img
                  className="gobiIcon_MinComer"
                  src="https://apiwebtm.com/uploads/icosn_21_e329fc7483.png"
                  alt="Logo Colombia.co"
                />
              </picture>
            </div>
            <div className="col">
              <picture>
                <img
                  className="gobiIcon_AreaMetro"
                  src="https://apiwebtm.com/uploads/AREA_METROPOLITANA_BARRANQUILLA_LOGO_ab49e2fe6d.png"
                  alt="Logo Area Metropolitana de Barranquilla"
                />
              </picture>
            </div>
          </div>
          <div className="row  ">
            <div className="copyright" style={{ marginLeft: '50px' }}>
              Copyright © 2022, All rights reserved{' '}
              <span>Transmetro S.A.S.</span>
            </div>
          </div>
        </div> */}
        {/*  <div className="container-grid align-items-center ">
          <div>
            {' '}
            <img
              className="gobiIcon_Pres"
              src="https://apiwebtm.com/uploads/icosn_20_8b497e7f22.png"
              alt="Logo Presidencia"
            />
          </div>
          <div>
            <img
              className="gobiIcon_Alcal"
              src="https://apiwebtm.com/uploads/logo_alcaldia_c6054f4065.svg"
              alt="Logo Alcaldia de Barranquilla"
            />
          </div>
          <div>
            {' '}
            <img
              className="gobiIcon_MinTrans"
              src="https://apiwebtm.com/uploads/Mintransporte_39c7a45771.png"
              alt="Logo Mintransporte"
            />
          </div>
          <div>
            {' '}
            <img
              className="gobiIcon_MinComer"
              src="https://apiwebtm.com/uploads/icosn_21_e329fc7483.png"
              alt="Logo Colombia.co"
            />
          </div>
          <div>
            {' '}
            <img
              className="gobiIcon_AreaMetro"
              src="https://apiwebtm.com/uploads/AREA_METROPOLITANA_BARRANQUILLA_LOGO_ab49e2fe6d.png"
              alt="Logo Area Metropolitana de Barranquilla"
            />
          </div>

          <div>
            <div className="copyright" style={{ marginLeft: '50px' }}>
              Copyright © 2022, All rights reserved{' '}
              <span>Transmetro S.A.S.</span>
            </div>
          </div>
        </div> */}
        <div className="container text-center gobiIcon">
          <div className="row g-2 align-items-center justify-content-evenly ">
            <div className="col">
              {' '}
              <img
                className="gobiIcon_Pres img-fluid"
                src="https://apiwebtm.com/uploads/icosn_20_8b497e7f22.png"
                alt="Logo Presidencia"
              />
            </div>
            <div className="col">
              {' '}
              <img
                className="gobiIcon_Alcal img-fluid"
                src="https://apiwebtm.com/uploads/logo_alcaldia_c6054f4065.svg"
                alt="Logo Alcaldia de Barranquilla"
              />
            </div>
            <div className="col-md-2">
              {' '}
              <img
                className="gobiIcon_MinTrans img-fluid"
                src="https://apiwebtm.com/uploads/Mintransporte_39c7a45771.png"
                alt="Logo Mintransporte"
              />
            </div>
            <div className="col">
              {' '}
              <img
                className="gobiIcon_MinComer img-fluid"
                src="https://apiwebtm.com/uploads/icosn_21_e329fc7483.png"
                alt="Logo Colombia.co"
              />
            </div>
            <div className="col">
              <img
                className="gobiIcon_AreaMetro img-fluid"
                src="https://apiwebtm.com/uploads/AREA_METROPOLITANA_BARRANQUILLA_LOGO_ab49e2fe6d.png"
                alt="Logo Area Metropolitana de Barranquilla"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="copyright">
              Copyright © 2022, All rights reserved{' '}
              <span>Transmetro S.A.S.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
