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
      {/* Mision -Vision */}
      <div className="container-xxl" id="#mision-vision">
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
                        L-V
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
                    <TabPane tabId="1">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_HABILES_19_DE_ABRIL_10_PM_9c11089511.pdf"
                          className="list-group-item list-group-item-action "
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_HABILES_19_DE_ABRIL_10_PM_f3f095160c.pdf"
                          className="list-group-item list-group-item-action"
                          style={{ color: '#002856' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane>

                    <TabPane tabId="2">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_SABADO_23_DE_ABRIL_10_PM_ptx_b993a25e05.pdf  "
                          className="list-group-item list-group-item-action"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_SABADO_23_DE_ABRIL_10_PM_92cdc0bf1d.pdf"
                          className="list-group-item list-group-item-action"
                          style={{ color: '#00a13a' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas
                          Alimentadoras
                        </a>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <br />
                      <div className="list-group list-group-flush fw-bold">
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_TRONCAL_DOM_Y_FES_24_DE_ABRIL_9_PM_ec69c22c3e.pdf  "
                          className="list-group-item list-group-item-action"
                          style={{ color: '#e30613' }}
                        >
                          <i className="fa-regular fa-file" /> Rutas Troncales
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/HORARIO_FUNCIONAMIENTO_ALIMENTADORAS_DOM_Y_FES_24_DE_ABRIL_9_PM_f9149572d6.pdf  "
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
