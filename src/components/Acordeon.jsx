import React from 'react';

// eslint-disable-next-line arrow-body-style
const Acordeon = () => {
  return (
    <div className=" container " style={{ maxWidth: '720px' }}>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              1. Información de la entidad
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneOne"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneOne"
                  >
                    1.1 Misión, visión, funciones y deberes
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneOne"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/Funciones_y_Deberes_TM_S_A_S_4d82095412.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.1.1 Misión y visión
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        1.1.2 Funciones y deberes
                      </a>
                      <a
                        href="/"
                        className="list-group-item list-group-item-action"
                      >
                        1.1.2 Funciones y deberes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="https://apiwebtm.com/uploads/Funciones_y_Deberes_TM_S_A_S_4d82095412.pdf"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.2 Estructura orgánica
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.3 Mapas y cartas descriptivas
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.4 Directorio institucional incluyendo sedes
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/transparencia/directorio"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.5 Directorio institucional incluyendo sedes
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.6 Directorio de entidades
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.7 Directorio de agremiaciones
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.8 Servicio al público, normas, formularios y protocolos de
                    atención
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.9 Procedimientos que se siguen para tomar decisiones
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.10 Mecanismo de presentación directa de solicitudes
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.11 Calendario de actividades y eventos
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.12 Información sobre decisiones que puede afectar al
                    público
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.13 Entes y autoridades que lo vigilan
                  </a>
                </h2>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <a
                    href="/"
                    className="accordion-button collapsed"
                    type="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    1.14 Publicación de hojas de vida
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              2. Normativa
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOneOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwoOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwoOne"
                    >
                      2.1 Normativa de la entidad o autoridad
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwoOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwoOne"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.1.1 Leyes
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.1.2 Decreto Único Reglamentario
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.1.3 Normativa aplicable
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.1.4 Vínculo al Diario o Gaceta Oficial
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.1.5 Políticas
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.1.6 Agenda Regulatoria
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOneOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwoTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwoTwo"
                    >
                      2.2 Búsqueda de normas
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwoTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwoTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.2.1 Sistema Único de Información Normativa
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.2.2 Sistema de búsquedas de normas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOneOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwoThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwoThree"
                    >
                      2.3 Proyectos de normas para comentarios
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwoThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwoThree"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.3.1 Comentarios y documento de respuesta
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.3.2 Participación ciudadana
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              3. Contratación
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOneOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThreeOne"
                    >
                      3.1 Plan anual de adquisiciones
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThreeOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThreeOne"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/1_Modificacion_Plan_de_Adquisicion_2015_5a8d32bb06.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2015
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2016
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2017
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/Plan_Anual_de_Adquisiciones_2018_7c2f13e9f2.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2018
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/PPA_2019_30_1_2019_1_32272ef090.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2019
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/PAA_2020_Y_MOD_PAA_2020_cd29739aa4.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2020
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/PAA_Y_MOD_PAA_2021_3ca1e7e657.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2021
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThreeTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTrheeTwo"
                    >
                      3.2 Publicación de la información contractual
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThreeTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThreeTwo"
                  >
                    <div className="accordion-body">
                      {/*  <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.2.1 Sistema Único de Información Normativa
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.2.2 Sistema de búsquedas de normas
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThreeThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTrheeThree"
                    >
                      3.3 Publicación de la ejecución de los contratos
                    </button>
                  </h2>
                  {/*  <div
                    id="panelsStayOpen-collapseTwoThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwoThree"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.3.1 Comentarios y documento de respuesta
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.3.2 Participación ciudadana
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThreeFour"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThreeFour"
                    >
                      3.4 Manual de contratación
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThreeFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThreeFour"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/MANUAL_DE_CONTRATACION_acdfa53af4.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Manual de contratación
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThreeFive"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThreeFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThreeFive"
                    >
                      3.5 Formatos o modelos de contratos o pliegos tipo
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThreeFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThreeFive"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/BASE_DE_DATOS_PROVEEDORES_e0f2d2e788.xls"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Base de datos de proveedores
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/FORMATO_REGISTRO_DE_PROVEEDORES_VERSION_3_2_4d6e186961.doc"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Formato registro de proveedores
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              4. Planeación
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourOne"
                    >
                      4.1 Presupuesto general de ingresos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourOne"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <li className="list-group-item list-group-item-action ">
                          2015
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/presupuesto_2015_76f854956f.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2015_2014_Dictaminados_64d68de4e8.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2015_b4413c74d2.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2016
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_de_Ingresos_y_Gastos_Vigencia_Fiscal_2016_b336323fe7.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2016_2015_Dictaminados_a54bc3390a.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2016_d02d8bd0f3.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2017
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_2017_1_3709439ce9.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2017_2016_Dictaminados_d0500802c5.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2017_abe61f2a9d.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2018
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_2018_b92dfec323.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2018_2017_Dictaminados_dde5d222b6.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2018_3acbe6490e.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2019
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_2019_1438463928.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2019_2018_Dictaminados_9ca84f44b9.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2019_29729d3165.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2020
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_TM_Corte_Junio_30_de_2020_3a5e7ea210.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            {/* <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_2019_2018_Dictaminados_9ca84f44b9.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Presupuestal_Diciembre_31_2019_29729d3165.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a> */}
                          </div>
                        </li>
                        {/* <a
                          href="https://apiwebtm.com/uploads/PAA_Y_MOD_PAA_2021_3ca1e7e657.pdf"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2021
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourTwo"
                    >
                      4.2 Ejecución presupuestal
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourTwo"
                  >
                    <div className="accordion-body">
                      {/*  <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.2.1 Sistema Único de Información Normativa
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.2.2 Sistema de búsquedas de normas
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourThree"
                    >
                      4.3 Plan de Acción
                    </button>
                  </h2>
                  {/*  <div
                    id="panelsStayOpen-collapseTwoThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwoThree"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="/"
                          className="list-group-item list-group-item-action "
                        >
                          2.3.1 Comentarios y documento de respuesta
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                        >
                          2.3.2 Participación ciudadana
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourFour"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourFour"
                    >
                      4.4 Proyectos de Inversión
                    </button>
                  </h2>
                  {/* <div
                    id="panelsStayOpen-collapseFourFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourFour"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/MANUAL_DE_CONTRATACION_acdfa53af4.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Manual de contratación
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourFive"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourFive"
                    >
                      4.5 Informes de empalme
                    </button>
                  </h2>
                  {/* <div
                    id="panelsStayOpen-collapseFourFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourFive"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/BASE_DE_DATOS_PROVEEDORES_e0f2d2e788.xls"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Base de datos de proveedores
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/FORMATO_REGISTRO_DE_PROVEEDORES_VERSION_3_2_4d6e186961.doc"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Formato registro de proveedores
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              7. Datos abiertos
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven"
          >
            <div className="accordion-body">
              <div className="accordion-item">
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenOne"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenOne"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenOne"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenOne"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <li className="list-group-item list-group-item-action ">
                          2022
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre01_2022_b2f70343a1.xlsx"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre I
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre02_2022_1a9b31c43f.xlsx"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre II
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre03_2022_ebf5f58f57.xlsx"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre III
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Paraderos_SITM_TM_aea4b7d958.zip"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Archivo geográfico (shapefile) de paraderos del
                              sistema
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Rutas_SITM_TM_c9c6c247da.zip"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Archivo geográfico (shapefile) del sistema de
                              rutas de Transmetro
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Puntos_de_recarga_SITM_9c0b73e7cc.rar"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Archivo geográfico (shapefile) de puntos de
                              recarga activos
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/tablasretencion_2022_297276b3e3.zip"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Tablas de retención documental
                            </a>
                          </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion accordion-total" id="accordionExample">
        <div className="accordion-item">
          <div className="accordion-header" id="headingOne">
            <button
              className="accordion-button  collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>1. Información de la entidad</h5>
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <dd type="button" className="bor ">
                <a
                  href="https://apiwebtm.com/uploads/Funciones_y_Deberes_TM_S_A_S_4d82095412.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p> 1.1 Misión, visión, funciones y deberes</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://apiwebtm.com/uploads/Estructura_Organica_TM_S_A_S_5a902dd5c4.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>1.2 Estructura orgánica</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="/" target="_blank">
                  1.3 Mapas y cartas descriptivas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.4 Directorio institucional incluyendo sedes
                </a>
              </dd>
              <dd className="bor ">
                <a href="/transparencia/directorio">
                  <p>1.5 Directorio de servidores públicos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.6 Directorio de entidades
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.7 Directorio de agremiaciones
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.8 Servicio al público, normas, formularios y protocolos de
                  atención
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.9 Procedimientos que se siguen para tomar decisiones
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.10 Mecanismo de presentación directa de solicitudes
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.11 Calendario de actividades y eventos
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.12 Información sobre decisiones que puede afectar al público
                </a>{' '}
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  1.13 Entes y autoridades que lo vigilan
                </a>
              </dd>
              <dd className="bor ">
                <a href="/" target="_blank" rel="noreferrer">
                  1.14 Publicación de hojas de vida
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <h5>2. Normativa</h5>
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1. Normativa de la entidad o autoridad
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.1 Leyes
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.2 Decreto Único Reglamentario
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.3 Normativa aplicable
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.4 Vínculo al Diario o Gaceta Oficial
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.5 Políticas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.1.6 Agenda Regulatoria
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2. Búsqueda de normas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2.1 Sistema Único de Información Normativa
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.2.2 Sistema de búsquedas de normas
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3 Proyectos de normas para comentarios
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3.2 Comentarios y documento de respuesta
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  2.3.3 Participación ciudadana
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>3. Contratación</h5>
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1pw_dAKyNzz48Dk100iw7gm6VKDO5vdfS?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.1 Plan Anual de Adquisiciones</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://www.contratos.gov.co/consultas/inicioConsulta.do"
                  target="_blank"
                  rel="noreferrer"
                >
                  3.2 Publicación de la información contractual
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1USnQsfDjQESQKinqnxIu6rt1t1I1cCfa?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.3 Publicación de la ejecución de los contratos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1rJRwoQlQzvvAONxtr8Q5J6jwf28uMwT5?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.4 Manual de contratación</p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/12MzzEH1O79uCdYYdr8fkpw9B7UgNtmHE?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>3.5 Formatos o modelos de contratos o pliegos tipo</p>
                </a>
              </dd>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed  fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFor"
              aria-expanded="false"
              aria-controls="collapseFor"
            >
              <h5>4. Planeación</h5>
            </button>
          </div>
          <div
            id="collapseFor"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1RVPZphj9aHxhJjRUHObOI0cJv9lPsHYT?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.1 Presupuesto general de ingresos</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.2 Ejecución presupuestal
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1xfL9EjCQeSgjVoHiW3fuN9QMEWeLofqk?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.3 Plan de Acción</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.4 Proyectos de Inversión
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.5 Informes de empalme
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.6 Información pública
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.7 Informes de gestión
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1WxAsBYZOE1lZmXynnq4mav4_G7Fd7l13?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.8 Informes de la Oficina de Control Interno</p>
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  4.9 Informe sobre Defensa Pública y Prevención del Daño
                  Antijurídico
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1pURjjpOiq66PtRNQZpTAGYt7U7xqUmXW?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    4.10 Informes trimestrales sobre acceso a información,
                    quejas y reclamos
                  </p>
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/13yb9qBlefN2yyszk1tzkrG1_BD9p53Qt?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>4.11 Respuesta a peticiones anónimas o sin dirección</p>
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <h5>5. Trámites</h5>
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed fw-bolder text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              <h5>6. Participa</h5>
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a
                  href="https://drive.google.com/drive/folders/1GXifF3djRYFjw6MGQo5VqkpMkJF8ym2V?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>6.1 Informes</p>
                </a>
              </dd>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingSev">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSev"
              aria-expanded="false"
              aria-controls="collapseSev"
            >
              <h5>7. Datos abiertos</h5>
            </button>
          </div>
          <div
            id="collapseSev"
            className="accordion-collapse collapse  hv"
            aria-labelledby="headingSev"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  7.1 Instrumentos de gestión de la información
                </a>
              </dd>
              <dd className="bor ">
                <a
                  href="https://datos.gov.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>7.2 Sección de Datos Abiertos</p>
                </a>
              </dd>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingEi">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEi"
              aria-expanded="false"
              aria-controls="collapseEi"
            >
              <h5>8. Información específica</h5>
            </button>
          </div>
          <div
            id="collapseEi"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingEi"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>

        <div className="accordion-item">
          <div className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              <h5>9. Obligación de reporte de información</h5>
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" />
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header" id="headingTeen">
            <button
              className="accordion-button collapsed fw-bolder  text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTeen"
              aria-expanded="false"
              aria-controls="collapseTeen"
            >
              <h5> 10. Obligación de reporte de información</h5>
            </button>
          </div>
          <div
            id="collapseTeen"
            className="accordion-collapse collapse hv"
            aria-labelledby="headingNTeen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  10.1 Procesos de recaudo de rentas locales
                </a>
              </dd>
              <dd className="bor ">
                <a href="pagina. html" target="_blank">
                  10.2 Tarifas de liquidación del Impuesto de Industria y
                  Comercio (ICA)
                </a>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
