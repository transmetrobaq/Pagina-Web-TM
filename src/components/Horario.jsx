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
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    {/* Lunes a Viernes */}
                    <TabPane tabId="1">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_HABILES_10_DE_ENE_2023_d3c9bc5343.pdf"
                          className="list-group-item list-group-item-action "
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_HABILES_10_DE_ENE_2023_6882e4b44f.pdf"
                          className="list-group-item list-group-item-action"
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane>
                    {/* Sabados */}
                    <TabPane tabId="2">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_SABADO_14_DE_ENE_2023pptx_1bc812fb75.pdf  "
                          className="list-group-item list-group-item-action"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_SABADO_14_DE_ENE_2023_95865fef57.pdf"
                          className="list-group-item list-group-item-action"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane>
                    {/* Domingos */}
                    <TabPane tabId="3">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_15_DE_ENE_2023_613ca9c764.pdf  "
                          className="list-group-item list-group-item-action"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_DOM_Y_FES_15_DE_ENE_2023_ef1d6874ea.pdf  "
                          className="list-group-item list-group-item-action"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane>
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
