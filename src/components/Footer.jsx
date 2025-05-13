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
                    <li>Lunes a viernes:</li>
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
                    <li>5:00 - 21:30</li>
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
                      <span>3206359257</span> Línea de atención
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
                    <li>Cra. 46 No. 82 - 225 piso 3</li>
                    <li>Barranquilla, Atlántico</li>
                    {/* <li>- Torre Sur Piso 15</li> */}
                    <li>350 2849625 Ofic. Adm.</li>
                    <li>
                      <span>info@transmetro.gov.co</span>
                    </li>
                  </ul>

                  <ul className="preguntas">
                    <li>
                      <a
                        href="/ciudadano/#preguntas-frecuentes"
                        role="button"
                        alt="Preguntas frecuentes"
                      >
                        Preguntas frecuentes
                      </a>
                    </li>

                    <li>
                      <p>-</p>
                    </li>
                    <li>
                      <a
                        href="https://apiwebtm.com/uploads/Terminos_condiciones_6837969eeb.pdf"
                        alt=" Términos y condiciones"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Términos y condiciones
                      </a>
                    </li>
                    <li>
                      <p>-</p>
                    </li>
                    <li>
                      <a
                        href="https://apiwebtm.com/uploads/Politica_de_Proteccion_de_Datos_Personales_Transmetro_ok_2_bfccd2b09a.pdf"
                        alt="Política de privacidad"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Política de privacidad
                      </a>
                    </li>
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
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4949322696375!2d-74.81869815119148!3d11.00144401647615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da9d4583d01%3A0xcdb3799b860f9336!2sHotel%20Standford%2C%20Cra.%2046%20%23%2082-225%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1743695197008!5m2!1ses!2sco"
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
            <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer">
              <img
                className="gobiIcon_Pres img-fluid"
                src="https://apiwebtm.com/uploads/icosn_20_8b497e7f22.png"
                alt="Logo Presidencia"
              />
              </a>
            </div>
            <div className="col">
            <a href="https://www.barranquilla.gov.co/" target="_blank" rel="noopener noreferrer">
              <img
                className="gobiIcon_Alcal img-fluid"
                src="https://apiwebtm.com/uploads/logo_alcaldia_c6054f4065.svg"
                alt="Logo Alcaldia de Barranquilla"
              />
              </a>
            </div>
            <div className="col-md-2">
            <a href="https://mintransporte.gov.co/" target="_blank" rel="noopener noreferrer">
              <img
                className="gobiIcon_MinTrans img-fluid"
                src="https://apiwebtm.com/uploads/Mintransporte_39c7a45771.png"
                alt="Logo Mintransporte"
              />
              </a>
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
            <a href="https://www.ambq.gov.co/" target="_blank" rel="noopener noreferrer">
              <img
                className="gobiIcon_AreaMetro img-fluid"
                src="https://apiwebtm.com/uploads/AREA_METROPOLITANA_BARRANQUILLA_LOGO_ab49e2fe6d.png"
                alt="Logo Area Metropolitana de Barranquilla"
              />
              </a>
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
