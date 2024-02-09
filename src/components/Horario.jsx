import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import '../styles/components/Horario.css';

const Horario = () => {
  const [activeTab, setActiveTab] = useState('1');

  const cambiarTab = (numeroTab) => {
    if (activeTab !== numeroTab) {
      setActiveTab(numeroTab);
    }
  };
  return (
    <div>
      {/* Horario */}
      <div className="container-xxl" id="horarios">
        <div className="card__horario">
          <div className="card mb-3 border border-0">
            <div className="row g-0 justify-content-end ">
              <div className="col-md-5" id="horario_img">
                {/*  <img
                  src="https://apiwebtm.com/uploads/Acerca_de_4f7942ad24.jpg"
                  className="img-fluid rounded-start"
                  alt="Foto Aerea Buses TM "
                /> */}
              </div>
              <div className="col-md-6 ">
                <div className="card-body" style={{ marginLeft: '50px' }}>
                  <h2 className="card-title">Horarios</h2>
                  <Nav tabs style={{ border: 'none' }}>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '1' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('1')}
                      >
                        Lunes a Viernes
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '2' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('2')}
                      >
                        Sábado
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          activeTab === '3' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('3')}
                      >
                        Domingo
                      </NavLink>
                    </NavItem>
                     {/* <NavItem>
                      <NavLink
                        className={
                          activeTab === '4' ? 'activeTab baseTab' : 'baseTab'
                        }
                        onClick={() => cambiarTab('4')}
                      >
                        Semana santa
                      </NavLink>
                    </NavItem> */}
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    {/* Lunes a Viernes */}
                    <TabPane tabId="1">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                      <a
                          href="https://apiwebtm.com/uploads/HORARIO_DIAS_HABILES_9d41cf8642.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Horario días hábiles

                        </a>
                        {/* <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_HABILES_10_DE_ENE_2023_d3c9bc5343.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_HABILES_10_DE_ENE_2023_6882e4b44f.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a> */}
                      </div>
                    </TabPane>
                    {/* Sabados */}
                    <TabPane tabId="2">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                      <a
                          href="https://apiwebtm.com/uploads/HORARIO_SABADOS_ab6f770aca.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Horario sábados
                        </a>
                        {/* <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_SABADO_14_DE_ENE_2023pptx_1bc812fb75.pdf  "
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_SABADO_14_DE_ENE_2023_95865fef57.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a> */}
                      </div>
                    </TabPane>
                    {/* Domingos */}
                    <TabPane tabId="3">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                      <a
                          href="https://apiwebtm.com/uploads/HORARIOS_DOMINGOS_Y_FESTIVOS_6ccaa04dc0.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Horario domingos
                        </a>
                        {/* <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf  "
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_DOM_Y_FES_15_DE_ENE_2023_ef1d6874ea.pdf  "
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a> */}
                      </div>
                    </TabPane>
                    {/* Semana santa */}
                    {/* <TabPane tabId="4">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <p>Lunes a Miércoles</p>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_HABILES_03_DE_ABR_SEMANA_SANTA_2023_6d86b5bce3.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_HABILES_03_DE_ABR_SEMANA_SANTA_2023_7c0aa9e200.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                        <p>Sábado</p>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_SABADO_SANTO_08_DE_ABR_2023_ptx_08ffccae22.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_SABADO_SANTO_08_DE_ABR_2023_14bfa6f7c0.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                         <p>Martes</p>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_MARTES_CARNAVAL_21_DE_FEB_2023_UNICO_DIA_b936797789.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_MARTES_CARNAVAL_21_DE_FEB_2023_UNICO_DIA_a069125ede.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane> */}
                  </TabContent>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horario;
