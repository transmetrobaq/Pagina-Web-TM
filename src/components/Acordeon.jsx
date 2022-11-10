import React from 'react';

// eslint-disable-next-line arrow-body-style
const Acordeon = () => {
  return (
    <div className=" container transparencia" style={{ maxWidth: '720px' }}>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
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
                        href="https://apiwebtm.com/uploads/MISION_VISION_d441bce90a.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.1.1 Misión y visión
                      </a>
                      <a
                        href="https://apiwebtm.com/uploads/Funciones_y_Deberes_TM_S_A_S_4d82095412.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.1.2 Funciones y deberes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneTwo"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneTwo"
                  >
                    1.2 Estructura orgánica
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneTwo"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/Organigrama_TM_3c82f936b9.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.2.1 Organigrama
                      </a>
                    </div>
                  </div>
                </div>
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
                    href="https://apiwebtm.com/uploads/Directorio_Institucional_incluyendo_oficinas_y_dependencias_1_4_9413d3cd2a.docx"
                    className="accordion-button collapsed text-decoration-none"
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
                    href="https://apiwebtm.com/uploads/1_5_Directorio_de_servidores_publicos_empleados_o_contratista_1_5_fcfbeb1b04.xlsx"
                    className="accordion-button collapsed text-decoration-none"
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
                    href="https://apiwebtm.com/uploads/1_6_Directorio_de_entidades_sector_Transporte_5073395581.xlsx"
                    className="accordion-button collapsed text-decoration-none"
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
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneFourteen"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneFourteen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneFourteen"
                  >
                    1.14 Publicación de hojas de vida
                  </button>
                </h2>

                <div
                  id="panelsStayOpen-collapseOneFourteen"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneFourteen"
                >
                  <div className="accordion-body">
                    <div className="accordion-item">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-heading2021"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapse2021"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapse2021"
                          >
                            2021
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapse2021"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-heading2021"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Control_Interno_6444c056f8.rar"
                                className="list-group-item list-group-item-action "
                              >
                                Control interno
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
                        <li className="list-group-item  ">
                          2.1.5 Políticas
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/DECRETO_0151_2010_RESTRICCION_TRANSMETRO_1_9254e0b42c.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Decreto No. 0151 de 2010
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Conpes_ea31ee619e.zip"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Conpes
                            </a>
                          </div>
                        </li>
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
                          href="https://www.suin-juriscol.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2.2.1 Sistema Único de Información Normativa
                        </a>
                        <a
                          href="/"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
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
                      <div className="list-group">
                        <a
                          href="https://www.colombiacompra.gov.co/"
                          className="list-group-item list-group-item-action "
                        >
                          SECOP
                        </a>
                      </div>
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
        {/* 4. Planeación */}
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
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2021
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Ppto_vigencia_2021_5174ee205d.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Estado_Financiero_2021_658497eaa2.7z"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2022
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Ppto_vigencia_2022_b1eaf21bfe.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Presupuesto
                            </a>
                            {/*    <a
                              href="https://apiwebtm.com/uploads/Estado_Financiero_2021_658497eaa2.7z"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
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
                      <div className="list-group">
                        <li className="list-group-item list-group-item-action ">
                          2015
                          <div className="list-group">
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
                          2021
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Pptal_corte_Diciembre_2021_63f8b98457.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2022
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Ejec_Pptal_corte_Junio_2022_5290ab6d6c.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Ejecución Presupuestal
                            </a>
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
                  <div
                    id="panelsStayOpen-collapseFourThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourThree"
                  >
                    <div className="accordion-body">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeOne"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeOne"
                          >
                            Plan Estratégico de Gestión de TI (PETI)
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeOne"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/PETI_TM_2019_eba000134b.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PETI_TM_V2_2020_0db4b7ded7.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PETI_TM_2021_3f6c5adc66.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PETI_TM_V3_c815e527a7.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeTwo"
                          >
                            Plan de Tratamiento de Riesgos de Seguridad y
                            Privacidad de la Información
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeTwo"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Tratamiento_de_riesgos_de_seguridad_y_privacidad_de_la_informacion_2019_eef50969cd.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Tratamiento_de_riesgos_de_seguridad_y_privacidad_de_la_informacion_2020_98abb6812c.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Tratamiento_de_riesgos_de_seguridad_y_privacidad_de_la_informacion_TM_2021_d75ae051cf.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Tratamiento_de_riesgos_de_seguridad_y_privacidad_de_la_informacion_TM_2022_396431b4fe.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeThree"
                          >
                            Plan de Seguridad y Privacidad de la Información
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeThree"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Seguridad_y_Privacidad_de_la_Informacion_57d0d16c4f.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Seguridad_y_Privacidad_de_la_Informacion_2020_d52f4a334e.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Seguridad_y_Privacidad_de_la_Informacion_2021_d490004a48.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Seguridad_y_Privacidad_de_la_Informacion_2022_812356b358.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeFour"
                          >
                            Plan Anticorrupción y de Atención al Ciudadano
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeFour"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2019_51b41126c7.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2020_c3219a628f.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2021_674c09de45.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Plan de Accion */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeFive"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeFive"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeFive"
                          >
                            Plan de Acción
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeFive"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/EVALUACION_PLAN_DE_ACCION_2014_TRANSMETRO_S_A_S_b5a9da6a41.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2014
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_accion_2015_5434533149.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2015
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_accion_Transmetro_2017_bc01dc64c1.XLS"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/2019_ae36fd9baa.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/2020_a4d2e0dd88.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/2021_74156714ba.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_accion_compilado_2022_44a12831a1.xls"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Plan estrategico talento humano */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeSix"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeSix"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeSix"
                          >
                            Plan estratégico de talento humano
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeSix"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_ESTRATRATEGICO_DE_TALENTO_HUMANO_2019_d45112595e.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Estrategico_Talento_Humano_2020_5b3c6537cb.zip"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_ESTRATEGICO_DE_TALENTO_HUMANO_2021_f25e42d1e2.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_ESTRATEGICO_DE_TALENTO_HUMANO_2022_1_31c86e8820.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Plan de seguridad y salud en el trabajo */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeSeven"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeSeven"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeSeven"
                          >
                            Plan de seguridad y salud en el trabajo
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeSeven"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_TRABAJO_SGSST_2019_7c39a8fdb0.xlsx"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_SGSST_2020_ae2c19b402.zip"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_SEGURIDAD_Y_SALUD_EN_EL_TRABAJO_2021_TRANSMETRO_0cba4dcb1d.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_SEGURIDAD_Y_SALUD_EN_EL_TRABAJO_2022_TRANSMETRO_V4_1_bea677cb5b.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Plan institucional de capacitación  */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeEigth"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeEigth"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeEigth"
                          >
                            Plan institucional de capacitación
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeEigth"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeEigth"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/PIC_2016_139fe065f7.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2016
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_2017_398432ac8f.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_2018_3e28089613.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_2019_ceb13beda0.doc"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_2020_6eccefd266.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_Plan_Institucional_de_Capacitacion_2021_8a74c1e35c.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_Plan_Institucional_de_Capacitacion_2022_1_dd4a7cd852.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  Plan de bienestar laboral, social y de incentivos */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeNine"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeNine"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeNine"
                          >
                            Plan de bienestar laboral, social y de incentivos
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeNine"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeNine"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Bienestar_Social_y_De_Incentivos_2015_2016_713f4848bd.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2015 - 2016
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Bienestar_Laboral_Social_y_de_Incentivos_2017_479316a0fb.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Bienestar_Laboral_Social_y_de_Incentivos_2018_33d0f02cda.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Bienestar_Laboral_Social_y_de_Incentivos_2019_6a2be0a5b7.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/plan_institucional_de_bienestar_social_y_de_Incentivos_2020_8b5b4328c7.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Bienestar_Laboral_Social_y_de_Incentivos_2021_98424ab2ed.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PIC_Plan_Institucional_de_Capacitacion_2022_1_2442c07bc0.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Programa de gestión doumental */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeTen"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeTen"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeTen"
                          >
                            Programa de gestión doumental
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeTen"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeTen"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Programa_de_Gestion_Documental_0787f86fdf.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                Programa de gestión doumental
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tablas de retención doumental */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeEleven"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeEleven"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeEleven"
                          >
                            Tablas de retención documental
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeEleven"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeEleven"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Tablas_de_Retencion_Documental_Transmetro_SAS_2021_8f64676cc8.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/TABLAS_DE_RETENCION_TRANSMETRO_SAS_2022_b1f3ef5950.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Cuadro de clasificación documental */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeTwelve"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeTwelve"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeTwelve"
                          >
                            Cuadro de clasificación documental
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeTwelve"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeTwelve"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/CUADRO_DE_CLASIFICACION_DOCUMENTAL_TRANSMETRO_S_A_S_1_2b319c4ec3.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                Cuadro de clasificación documental
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Plan institucional de archivos - PINAR */}
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeThirteen"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeThirteen"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeThirteen"
                          >
                            Plan institucional de archivos - PINAR
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeThirteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeThirteen"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Institucional_de_Archivos_PINAR_2020_5d8a9606a3.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Institucional_de_Archivos_PINAR_2021_34cbe32ec3.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Pinar_2022_1_compressed_2ffe5c77fa.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  */}

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourThreeFourteen"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourThreeFourteen"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourThreeFourteen"
                          >
                            Sistema integrado de conservacion
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourThreeFourteen"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourThreeFourteen"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/SISTEMA_INTEGRADO_DE_CONSERVACION_TRANSMETRO_1_40c02fcdca.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                Sistema integrado de conservación
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                {/* 4.7 Informes de gestión, evaluación y auditoria */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourSeven"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourSeven"
                    >
                      4.7 Informes de gestión, evaluación y auditoria
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourSeven"
                  >
                    <div className="accordion-body">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourSevenOne"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourSevenOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourSevenOne"
                          >
                            4.7.1 Informes de gestión
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourSevenOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourSevenOne"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/INFORME_DE_GESTION_OCI_VIG_2018_3db400b623.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/INFORME_DE_GESTION_OCI_vig_2020_52ac1481e9.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/INFORME_DE_GESTION_OCI_VIG_2021_059baee754.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingThreeSevenTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThreeSevenTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThreeSevenTwo"
                          >
                            4.7.2 Informe de rendición de cuentas ante la
                            Contraloría General de la República, o a los
                            organismos de Contraloría o Control territoriales
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseThreeSevenTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingThreeSevenTwo"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/REND_CTAS_CGN_VIG_2017_b177b4c477.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/REND_CTAS_CGN_VIG_2018_7018798702.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/REND_CTAS_CGN_VIG_2019_32faec516a.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/REND_CTAS_CGN_VIG_2020_46bef8eb0f.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Reporte_Rend_Ctas_2021_b174d5a737.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourSevenThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourSevenThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourSevenThree"
                          >
                            4.7.3 Informe de rendición de cuentas a la
                            ciudadanía sobre resultados, avances de la gestión y
                            garantía de derecho de rendición de cuentas
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourSevenThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourSevenThree"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201702_341a636672.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201802_640e4a32bc.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201902_b4752f9a44.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_202002_8a4faf5cce.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_202102_d2c0743eb4.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourSevenFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourSevenFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourSevenFour"
                          >
                            4.7.4 DNDA{' '}
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourSevenFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourSevenFour"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/CUMPLIMIENTO_DNDA_VIG_2018_d7cba0336f.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/CUMPLIMIENTO_DNDA_VIG_2019_c56055d3e6.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Certificado_DNDA_VIG_2020_d1ac06377d.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Certificado_DNDA_VIG_2021_021707f355.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourSevenFive"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourSevenFive"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourSevenFive"
                          >
                            4.7.5 Planes de mejoramiento
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourSevenFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourSevenFive"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_MEJORA_CDB_vig_2018_c1392f476d.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_MEJORA_CDB_vig_2019_26ca60beb6.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_MEJORA_CDB_vig_2020_279383ab40.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_MEJORA_CDB_vig_2021_a0ff3e1d41.pdf"
                                className="list-group-item list-group-item-action "
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
                  </div>
                </div>

                {/* 4.8 Informes pormenorizados */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourEight"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourEight"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourEight"
                    >
                      4.8 Informes pormenorizados
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourEight"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/Informe_Pormenorizado_Noviembre_Diciembre_2019_95f9fe4522.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2019
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/INFORMES_PORMENORIZADOS_2020_7166a59965.rar"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2020
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/INFORMES_PORMENORIZADOS_2021_94fb76e67d.rar"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2021
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/Informe_Pormenorizado_Conclusiones_Ene_Jun_2022_ed0781a6b3.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2022
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4.10 Informes  sobre acceso a información, quejas y reclamos */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingFourTen"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFourTen"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFourTen"
                    >
                      4.10 Informes sobre acceso a información, quejas y
                      reclamos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourTen"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/INFORME_DE_AUDITORIA_SEMESTRE_2_2019_PQR_S_3856bd257a.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2019
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/INFORME_AUDITORIA_PQRS_SEMESTRE_2020_f86e9df152.rar"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2020
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/INFORME_AUDITORIA_PQRS_SEMESTRE_2021_2a662476c3.rar"
                          className="list-group-item list-group-item-action "
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
            </div>
          </div>
        </div>
        {/* 5. Tramites */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              5. Trámites
            </button>
          </h2>
          {/* <div
            id="panelsStayOpen-collapseEigth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEigth"
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
                      7.1 Instrumentos de gestión de la información
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenTwo"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://datos.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Datos abiertos (datos.gov.co)
                        </a>
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
          </div> */}
        </div>
        {/* 6. Participa */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              6. Participa
            </button>
          </h2>
          {/* <div
            id="panelsStayOpen-collapseEigth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEigth"
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
                      7.1 Instrumentos de gestión de la información
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenTwo"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://datos.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Datos abiertos (datos.gov.co)
                        </a>
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
          </div> */}
        </div>
        {/* 7. Datos Abiertos */}
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
                      7.1 Instrumentos de gestión de la información
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenTwo"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://datos.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Datos abiertos (datos.gov.co)
                        </a>
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
        {/* 8. Informacion Especifica */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingEigth">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseEigth"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseEigth"
            >
              8. Información específica
            </button>
          </h2>
          {/* <div
            id="panelsStayOpen-collapseEigth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEigth"
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
                      7.1 Instrumentos de gestión de la información
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenTwo"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://datos.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Datos abiertos (datos.gov.co)
                        </a>
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
          </div> */}
        </div>
        {/* 9. Obligación de reportes */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseNine"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseNine"
            >
              9. Obligación de reporte de información
            </button>
          </h2>
          {/* <div
            id="panelsStayOpen-collapseEigth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEigth"
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
                      7.1 Instrumentos de gestión de la información
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingSevenTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSevenTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSevenTwo"
                    >
                      7.2 Sección de Datos Abiertos
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSevenTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenTwo"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://datos.gov.co/"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Link Datos abiertos (datos.gov.co)
                        </a>
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
          </div> */}
        </div>
      </div>

      {/* <div className="accordion accordion-total" id="accordionExample">
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
      </div> */}
    </div>
  );
};

export default Acordeon;
