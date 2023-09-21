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
                      <li className="list-group-item list-group-item-action ">
                        1.1.3 Resoluciones
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/Resolucion_031_2023_Compensacion_Laboral_Semana_Santa_8cd0fe54b7_23e56610a4.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Resolucion Laboral Semana Santa
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Reglamento_Interno_a98b9d5de0.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Reglamento Interno de Trabajo
                          </a>{' '}
                        </div>
                      </li>
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
                      <a
                        href="https://apiwebtm.com/uploads/LISTADO_DE_DIRECTIVOS_2_6c8da5b5e2.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.2.2 Listado de directivos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneThree"
                  >
                    1.3 Mapas y Cartas descriptivas de los procesos
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOOneThree"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/MAPA_DE_PROCESOS_ACTUALIZADO_fa1020e86a.jpeg"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.3.1. Mapa de procesos de Transmetro
                      </a>
                      <li className="list-group-item list-group-item-action ">
                        1.3.2 Procesos y procedimientos
                        <div className="list-group">
                          <a
                            href="https://apiwebtm.com/uploads/CA_MA_001_MANUAL_DE_ATENCION_AL_CIUDADANO_76533f9592.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Manual de Atención al Ciudadano
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_bc7d9a1965.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                            Manual del usuario
                          </a>{' '}
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneFour"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneFour"
                  >
                    1.4 Directorio institucional incluyendo sedes
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneFour"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/Directorio_Institucional_incluyendo_oficinas_y_dependencias_V2_468ec75208.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Directorio institucional incluyendo sedes
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOnefive"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOnefive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOnefive"
                  >
                    1.5 Directorio de servidores públicos, empleados y
                    contratistas
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOnefive"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOnefive"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/1_5_Directorio_de_servidores_publicos_empleados_o_contratistas_94655713ad_ad48fc1467.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Directorio de servidores públicos, empleados y
                        contratistas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneSix"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneSix"
                  >
                    1.6 Directorio de entidades
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneSix"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/1_6_Directorio_de_entidades_sector_Transporte_caf22c39f6.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Directorio de entidades
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneSeven"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneSeven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneSeven"
                  >
                    1.7 Directorio de agremiaciones
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneSeven"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://www.camarabaq.org.co/"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                      <picture>
                      <img
                        src="https://apiwebtm.com/uploads/camara_3d81c2a1d0.png"
                        className="gobiIcon_Pres "
                        alt="Icono Transmetro"
                        style={{ marginBottom: '30px' }}
                      />
                    </picture>
                        
               
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneSix"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneEight"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneEight"
                  >
                    1.8 Servicio al público, normas, formularios y protocolos de
                    atención
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneEight"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/Carta_de_trato_digno_bbb1791e82.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        1.8.1 Servicio al público, normas, formularios
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneNine"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneNine"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneNine"
                  >
                   1.9 Procedimientos que se siguen para tomar decisiones
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneNine"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                   <a
                            href="https://apiwebtm.com/uploads/CA_MA_001_MANUAL_DE_ATENCION_AL_CIUDADANO_76533f9592.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                           1.9.1 Manual de Atención al Ciudadano
                          </a>
                          <a
                            href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_bc7d9a1965.pdf"
                            className="list-group-item list-group-item-action "
                            target="_blank"
                            rel="noreferrer"
                          >
                           1.9.2 Manual del usuario
                          </a>{' '}
                     </div>
                  </div>
                </div>
              </div>
              

              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneOneThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneOneCero"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneOneCero"
                  >
                    1.10 Mecanismo de presentación directa de solicitudes
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneOneCero"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneOneCero"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://transmetro.netsaia.com/ws/pqr/index.html"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Crear o Consultar PQRSDF
                      </a>
                      <a
                        href="https://apiwebtm.com/uploads/Resolucion_Costos_de_reproduccion_TM_1_d8c08f17db.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Costos de Reproducción
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneEleven"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneEleven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneEleven"
                  >
                    1.11 Calendario de actividades y eventos
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneEleven"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <li className="list-group-item list-group-item-action ">
                        <div className="list-group">
                          <a
                            href="/#Eventos"
                            className="list-group-item list-group-item-action"
                            aria-current="true"
                            rel="noreferrer"
                          >
                            Eventos
                          </a>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneTwelve"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneTwelve"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneTwelve"
                  >
                    1.12 Información sobre decisiones que puedan afectar al
                    público
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneTwelve"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneTwelve"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <li className="list-group-item list-group-item-action ">
                        <div className="list-group">
                          <a
                            href="/noticias/#comunicados-prensa"
                            className="list-group-item list-group-item-action"
                            aria-current="true"
                            rel="noreferrer"
                          >
                            Comunicados de prensa
                          </a>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="panelsStayOpen-headingOneOneThree"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOneOneThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOneOneThree"
                  >
                    1.13 Entes y autoridades que lo vigilan
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOneOneThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOneOneThree"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      <a
                        href="https://apiwebtm.com/uploads/1_13_Entes_y_autoridades_que_lo_vigilan_c7f748d797.pdf"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Entes y autoridades que lo vigilan
                      </a>
                    </div>
                  </div>
                </div>
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
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwoOneOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwoOneOne"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwoOneOne"
                            >
                              2.1.1 Leyes
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwoOneOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwoOneOne"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href="https://apiwebtm.com/uploads/2_1_1_Normograma_2022_ff3fb5732a_9259c2f3dd.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Normograma
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwoOneTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwoOneTwo"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwoOneTwo"
                            >
                              2.1.2 Decreto Único Reglamentario
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwoOneTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwoOneTwo"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href="https://apiwebtm.com/uploads/2_1_2_Decreto_Unico_reglamentario_c8438889c5.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Decreto Único Reglamentario
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwoOneThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwoOneThree"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwoOneThree"
                            >
                              2.1.3 Normativa aplicable
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwoOneThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwoOneThree"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href="https://apiwebtm.com/uploads/Resolucion_257_por_la_cual_se_modifica_la_Resolucion_119_2006_parametros_y_proc_para_liquidar_reconocimientos_economicos_a9354518b5.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2016
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Resolusiones_2017_e98915b8db.rar"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2017
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Resolusiones_2019_8c865a2646.rar"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2019
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Resolusiones_2020_45600bfc40.rar"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2020
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Resolusiones_2021_e8bea9ed83.rar"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2021
                                </a>
                                <li className="list-group-item list-group-item-action ">
                                  2023
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/Resolucion_Creacion_Comite_de_Contratacion_1_d8c37d11f7.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Resolución-Creación Comité de Contratación
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/Reglamento_Interno_a98b9d5de0.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Reglamento Interno de Trabajo
                                    </a>{' '}
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwoOneThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwoOneFour"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwoOneFour"
                            >
                              2.1.4 Vínculo al Diario o Gaceta Oficial
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwoOneFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwoOneFour"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href=" https://www.barranquilla.gov.co/transparencia/normatividad/gaceta-distrital"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2.1.4.1 Gaceta distrital
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/gaceta_15_0e38beccc8.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2.1.4.2 Gaceta
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Gaceta_fondo_de_estabilizacion_a2aad75035.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  2.1.4.3 Gaceta fondo de estabilizacion
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTwoOneFive"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTwoOneFive"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTwoOneFive"
                            >
                              2.1.5 Políticas
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTwoOneFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwoOneFive"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href="https://apiwebtm.com/uploads/DECRETO_0151_2010_RESTRICCION_TRANSMETRO_1_9254e0b42c.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Políticas
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Conpes_31c97a5272.rar"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONPES
                                </a>{' '}
                                <a
                                  href="https://apiwebtm.com/uploads/Manual_de_supervision_3ac138faa2.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Manual de supervisión
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/POLITICAS_Y_ESTANDARES_DE_SEGURIDAD_INFORMATICA_V2_e6a3914e4d.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Politicas y estandares de seguridad
                                  informatica V2
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Manual_del_Usuario_Vigente_Diciembre_23_2016_1_bdba5f9c08.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Manual del Usuario Vigente
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Manual_de_Funciones_f47c606dcd.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Manual de funciones
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CA_PO_002_PROTOCOLO_DE_ATENCION_Y_SERVICIO_AL_CIUDADANO_816b1abd5f.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Políticas, lineamientos y manuales
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
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
                        <a
                          href="https://apiwebtm.com/uploads/Planes_anuales_de_adquisiciones_2023_3dcb6450cd.zip"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2023
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
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTreeTwoOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTreeTwoOne"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTreeTwoOne"
                            >
                              Apertura proceso lista corta TM-LC--001-2023
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTreeTwoOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTreeTwoOne"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <ol>
                                  <span>Objeto:</span>
                                  Proceso de contratación bajo la modalidad de
                                  Invitación con Lista Corta, cuyo objeto es
                                  Contratar las pólizas de seguros Todo Riesgo
                                  Daños Materiales, Responsabilidad Civil
                                  Extracontractual y Manejo Global Entidades
                                  Estatales, requeridas para la adecuada
                                  protección de los bienes e intereses
                                  patrimoniales de Transmetro S.A.S, así como
                                  aquellos por los que sea o fuere legalmente
                                  responsable o le corresponda asegurar en
                                  virtud de disposición legal o contractual.
                                </ol>
                                <a
                                  href="https://apiwebtm.com/uploads/1_ANEXO_CARTA_DE_PRESENTACION_DE_LA_OFERTA_e52d503001.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  1 ANEXO CARTA DE PRESENTACIÓN DE LA OFERTA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ANEXO_2_CRONOGRAMA_DEL_PROCESO_b2b2ccbbfe.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ANEXO 2. CRONOGRAMA DEL PROCESO
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/BIENES_Y_VALORES_TRANSMETRO_2023_09701de0fb.xls"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  BIENES Y VALORES TRANSMETRO 2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CARTA_DE_DE_INVITACION_PARA_PRESENTAR_PROPUESTA_123b12aefb.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CARTA DE DE INVITACION PARA PRESENTAR
                                  PROPUESTA
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/CDP_8d38956f41.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CDP
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_DE_SINIESTRALIDAD_AXA_TRANSMETRO_7ad8faa73e.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO DE SINIESTRALIDAD AXA TRANSMETRO
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_DE_SINIESTRALIDAD_EQUIDAD_ab7ae36839.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO DE SINIESTRALIDAD EQUIDAD
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_NO_INHABILIDADES_E_INCOMPATIBILIDADES_1_8a7a040fae.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO NO INHABILIDADES E
                                  INCOMPATIBILIDADES
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_NO_MULTAS_ef66767578.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO NO MULTAS
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_SINIESTRALIDAD_CHUBB_2919206eab.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO SINIESTRALIDAD CHUBB
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONDICIONES_BASICAS_OBLIGATORIAS_2023_62922a12cd.xlsx"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONDICIONES BASICAS OBLIGATORIAS 2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONDICIONES_COMPLEMENTARIAS_2023_e18e4afa7e.xlsx"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONDICIONES COMPLEMENTARIAS 2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONVOCATORIA_PROCESO_TM_LC_001_2023_429165d629.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONVOCATORIA PROCESO TM -LC 001 -2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/DESCRIPCION_DE_LA_INFRAESTRUCTURA_DE_LA_ESTACIONES_DEL_SITM_4de2fb87f9.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  DESCRIPCIÓN DE LA INFRAESTRUCTURA DE LA
                                  ESTACIONES DEL SITM
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ESTUDIOS_PREVIOS_TMLC_001_202302288720230710150741_e7c9bd51bf.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ESTUDIOS PREVIOS TMLC 001
                                  202302288720230710150741
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/MANUAL_DE_CONTRATACION_74b4761067.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  MANUAL DE CONTRATACION
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/MINUTA_CONTRACTUAL_94e3860fe1.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  MINUTA CONTRACTUAL
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/RUT_TRANSMETRO_S_A_S_fa896da6a1.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RUT TRANSMETRO S.A.S.
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ADENDA_1_6ac1e4e908.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ADENDA No 01
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ADENDA_No_2_be8b53f7dd.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ADENDA No 02
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/OBSERVACIONES_PRESENTADAS_POR_SOLIDARIA_Y_EQUIDAD_c508412fd9.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  OBSERVACIONES PRESENTADAS POR SOLIDARIA Y
                                  EQUIDAD
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/RESPUESTAS_A_LAS_OBSERVACIONES_ff53d59678.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RESPUESTAS A LAS OBSERVACIONES
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/DESCRIPCION_DE_LAS_INFRAESTRUCTURA_DE_LAS_ESTACIONES_c6ad214b4a.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  DESCRIPCION DE LAS INFRAESTRUCTURA DE LAS
                                  ESTACIONES
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONDICIONES_COMPLEMENTARIAS_6b279f66fe.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONDICIONES COMPLEMENTARIAS
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONVOCATOIRIA_EDITABLE_028d323f40.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONVOCATOIRIA EDITABLE
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONDICIONES_BASICAS_OBLIGATORIAS_VF_2023_1_26a3ed40c4.xlsx"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONDICIONES BASICAS OBLIGATORIAS VF 2023 - 1
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/RESOLUCION_DE_COMITE_EVALUADOR_PROCESO_TM_LC_001_2022_15309405e8.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RESOLUCION DE COMITE EVALUADOR PROCESO
                                  TM-LC-001-2022
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ACTA_PRESENTA_DE_OFERTA_159e95ce15.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ACTA PRESENTA DE OFERTA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/informe_de_evaluacion_c1ff44f4b6.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INFORME DE EVALUACIÓN
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/evaluacion_financiera03085620230728164009_280ec6ccfa.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN FINANCIERA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/evaluacion_tecnica03085720230728164046_8c4105e8e0.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN TÉCNICA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/EVALUACION_DE_EXPERIENCIA_8593163986.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN DE EXPERIENCIA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/evaluacion_juridica03084520230728144220_c7ba6352c9.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN JURÍDICA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/INFORME_DEFINITIVO_COMITE_EVALUA_03109420230801134737_4257eb7da1.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INFORME DEFINITIVO DEL COMITÉ EVALUADOR
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/POR_LA_CUAL_SE_ADJUDICATM_LC_OO_103109620230801135024_45498ca425.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ACTA DE ADJUDICACIÓN TM-LC-001-2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/PROPUESTA_ECONOMICA_LA_EQUIDAD_SEGUROS_GENERALES_OC_da9ef42f94.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  PROPUESTA ECONÓMICA LA EQUIDAD SEGUROS
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONTRATO_POLIZAS_2023_EQUIDAD_SEGUROS_bb032f0c79.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONTRATO PÓLIZAS 2023 EQUIDAD SEGUROS
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingTreeTwoTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseTreeTwoTwo"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseTreeTwoTwo"
                            >
                              Apertura proceso lista corta TM-LC--002-2023
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseTreeTwoTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTreeTwoTwo"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <ol>
                                  <span> Objeto: </span>
                                  Adquisición de insumos de ferretería y
                                  repuestos, para el mantenimiento de la
                                  infraestructura del sistema integrado de
                                  transporte masivo de Barranquilla y su área
                                  metropolitana, Transmetro
                                </ol>
                                <a
                                  href="https://apiwebtm.com/uploads/CDP_d173942db5.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CDP
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ESTUDIOS_PREVIOS_2e6bac61c2.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ESTUDIOS PREVIOS
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/CARTA_INVITACION_1677b58f0d.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CARTA INVITACION
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CRONOGRAMA_4ea33df50f.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CRONOGRAMA
                                </a>

                                <a
                                  href="https://apiwebtm.com/uploads/CONVOCATORIA_TM_LC_002_2023_de3b1b12cf.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONVOCATORIA TM-LC-002-2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ANEXO_1_aa5b38d832.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ANEXO 1
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ANEXO_2_42fc323c88.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ANEXO 2
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICACION_DE_NO_MULTA_96fc9c3338.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICACION DE NO MULTA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CERTIFICADO_DE_INHABILIDADES_d656af0f0a.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CERTIFICADO DE INHABILIDADES
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/PROYECTO_MINUTA_CONTRACTUAL_5efe96e6ea.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  PROYECTO MINUTA CONTRACTUAL
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/MANUAL_DE_CONTRATACION_TRANSMETRO_651c54ae72.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  MANUAL DE CONTRATACIÓN TRANSMETRO
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/RUT_TRANSMETRO_S_A_S_3edc13612e.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RUT TRANSMETRO S.A.S
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ACTA_DE_VISITA_03109320230801134626_2dd3ccfd31.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ACTA DE VISITA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Invesakk_1_f5f2b08769.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INVESAKK
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Ferreteria_La_roca_19d363cfb8.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  FERRETERIA LA ROCA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Respuesta_Observaciones_TM_LC_002_2023_84c4f03181.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RESPUESTA OBSERVACIONES TM-LC-002-2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ACLARATORIA_ANEXO_CARTA_DE_PRESENTACION_DE_LA_OFERTA_6890002ae7.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ACLARATORIA ANEXO CARTA DE PRESENTACIÓN DE LA
                                  OFERTA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ADENDA_1_2_dc5687a03c.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ADENDA 1
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/ACTA_PRESENTACION_DE_OFERTAS_00203178920230808170040_cc2e10a95e.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  ACTA PRESENTACIÓN DE OFERTAS
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/resolucion_10902570620230809101506_9870d851b3.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  RESOLUCIÓN DESIGNACIÓN COMITÉ EVALUADOR
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/EVALUACION_TECNICA_e0d62c9863.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN TÉCNICA Y EXPERIENCIA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/EVALUACION_JURIDICA_TM_LC_00203194120230809165625_5a34e7d821.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  EVALUACIÓN JURÍDICA
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Evaluacion_Financiera_del_Proceso_de_Contratacion_TM_LC_002_2023_a8eae5a027.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Evaluación Financiera
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/Informe_de_Evaluacion_Consolidado_4275cc89f0.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INFORME DE EVALUACIÓN CONSOLIDADO
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/INFORME_FINAL_DE_EVALUACION_5568cbba42.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INFORME FINAL DE EVALUACIÓN
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/INFORME_COMITE_EVALUADOR_7998faf3d1.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INFORME COMITÉ EVALUADOR
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/POR_LA_CUAL_SE_ADJUDICA_EL_PROCESO_LISTA_CORTA_TM_LC_002_2023_fdd98f5695.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  POR LA CUAL SE ADJUDICA EL PROCESO LISTA CORTA
                                  TM-LC-002-2023
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/CONTRATO_TRANSMETRO_TM_LC_002_2023_752284df02.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONTRATO TRANSMETRO TM-LC-002-2023.
                                </a>
                                <a
                                  href="https://apiwebtm.com/uploads/F_RP_INVERSIONES_LA_ROCA_296474700b.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  F.RP- INVERSIONES LA ROCA
                                </a>
                                <a
                                  href="https://sastransmetro-my.sharepoint.com/:b:/g/personal/scahuana_transmetro_gov_co/EUB-Y1TWqf5IkrNdP5dc62wBnktD6c48o1rejfIUfV6vxw"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  CONTRATO TM-LC-002-2023
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
                        <a
                          href="https://apiwebtm.com/uploads/Resolucion_Creacion_Comite_de_Contratacion_1_d8c37d11f7.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resolución-Creación Comité de Contratación
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
                          href="https://apiwebtm.com/uploads/BASE_DE_DATOS_PROVEEDORES_43ee0d81b7.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Base de datos de proveedores
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/FORMATO_REGISTRO_DE_PROVEEDORES_VERSION_3_2_4_c19285be69.pdf"
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
              4. Planeación, Presupuesto e Informes
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
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_Transmetro_2020_2019_312a544bda.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
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
                            <a
                              href="https://apiwebtm.com/uploads/Estados_Financieros_Transmetro_2022_2021_1_53ee12f1a8.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Estados financieros
                            </a>
                          </div>
                        </li>
                        <li className="list-group-item list-group-item-action ">
                          2023
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/Presupuesto_Ingresos_y_Gastos_2023_1_e6146ecd5e.pdf"
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
                              <a
                                href="https://transmetro.gov.co/transparencia/#transparencia"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_Anticorrupcion_2023_f5b512c841.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                                href="https://apiwebtm.com/uploads/Plan_de_accion_Transmetro_2017_80860e606f.pdf"
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
                                href="https://apiwebtm.com/uploads/Plan_de_accion_2022_209f4a33b2.zip"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_accion_consolidado_de_Gestion_y_MIPG_1cc7758aa3.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_ESTRATEGICO_DE_TALENTO_HUMANO_2023_765fc69e0d.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                              <a
                                href="https://apiwebtm.com/uploads/PLAN_DE_SEGURIDAD_Y_SALUD_EN_EL_TRABAJO_2023_TRANSMETRO_V5_1_f954c6a36a.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                                href="https://apiwebtm.com/uploads/PIC_2019_ceb13beda0_84b9058d53.pdf"
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
                              <a
                                href="https://apiwebtm.com/uploads/PIC_Plan_Institucional_de_Capacitacion_2023_ca4a765400.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                              <a
                                href="https://apiwebtm.com/uploads/Plan_de_Bienestar_Laboral_Social_y_de_Incentivos_2023_ec41052d85.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
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
                            Programa de gestión documental
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
                                Programa de gestión documental
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
                  <div
                    id="panelsStayOpen-collapseFourFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourFive"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <a
                          href="https://apiwebtm.com/uploads/Informe_de_empalme_AOC_deb4a92393.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Agosto 10 de 2010
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/Informe_de_Emplame_MFA_2d3b5f3375.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Noviembre 25 de 2015
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/Informe_de_Empalme_R_R_R_03fe81362b.pdf"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          Febrero 17 de 2020
                        </a>
                      </div>
                    </div>
                  </div>
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
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2015_f5837babb9.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2015
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2016_88dd0b2396.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2016
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2017_f619524e75.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>

                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2018_74b4fda66a.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2019_8e2e40b1a1.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>

                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2020_c2c7aae2e2.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2021_1a1bb95542.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_2022_d0f3fdda11.pdf"
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
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201702_341a636672.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201802_640e4a32bc.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_201902_b4752f9a44.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_202002_8a4faf5cce.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/RADICADO_REND_CTA_CDB_202102_d2c0743eb4.pdf"
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
                                href="https://apiwebtm.com/uploads/Rendicion_de_cuenta_2016_a6443801cf.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2016
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Rendicion_de_cuenta_2017_142d137573.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2017
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Rendicion_de_cuenta_2018_856dffcb26.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Rendicion_de_cuenta_21_84f4aadfa7.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Redincion_de_cuenta_2022_463a33ad75.rar"
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
                            4.7.4 Informe a Organismos de Inspección
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
                      4.8 Informes de la Oficina de Control Interno.
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFourEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFourEight"
                  >
                    <div className="accordion-body">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingFourEight"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourEightOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourEightOne"
                          >
                            4.8.1 Auditoria Derechos de Autor
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourEightOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourEightOne"
                        >
                          <div className="accordion-body">
                            <div className="list-group">
                              <a
                                href="https://apiwebtm.com/uploads/CUMPLIMIENTO_DNDA_VIG_2018_526bb9b744.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/CUMPLIMIENTO_DNDA_VIG_2019_60532cff54.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Certificado_DNDA_VIG_2020_9a870fad8e.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Certificado_DNDA_VIG_2021_731c483d99.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/CERTIFICADO_DNDA_VIG_2022_b7d1675297.pdf"
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
                            4.8.2 Informes Auditoría Contraloría Distrital de
                            Barranquilla
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
                                href="https://apiwebtm.com/uploads/4_8_INFORME_AUDITORIA_CDB_VIG_Y_PLAN_DE_MEJORA_2018_f218470682.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/4_8_2_INFORME_AUDITORIA_CDB_VIG_2019_Y_PLAN_DE_MEJORA_673d35330a.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/4_8_2_INFORME_AUDITORIA_CDB_VIG_2020_Y_PLAN_DE_MEJORA_a62b0ddbcb.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/4_8_2_INFORME_AUDITORIA_VIG_2021_Y_PLAN_DE_MEJORA_b78b3e1f31.rar"
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
                            4.8.3 Informes Auditorías PQR
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
                                href="https://apiwebtm.com/uploads/4_8_3_INFORME_DE_AUDITORIA_SEMESTRE_2_2019_PQR_S_aece24038f.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
                              </a>

                              <a
                                href="https://apiwebtm.com/uploads/4_8_3_INFORME_AUDITORIA_PQRS_SEMESTRE_2020_fac539fcc8.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2020
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/4_8_3_INFORME_AUDITORIA_PQRS_SEMESTRE_2021_9418f139c9.rar"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2021
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/INFORME_AUDITORIA_PQRS_SEMESTRE_2022_425ecff008.rar"
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
                          id="panelsStayOpen-headingFourEightFour"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourEightFour"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourEightFour"
                          >
                            4.8.4 Informes de Auditoría de Gestión de la Oficina
                            de Control Interno
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourEightFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourEightFour"
                        >
                          <div className="accordion-body">
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingFourEightFourOne"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourOne"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourOne"
                                >
                                  4.8.4.1 AUDITORIA AUSTERIDAD
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourOne"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/AUSTERIDAD_2018_ba346d23d9.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/AUSTERIDAD_2019_728721a464.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/AUSTERIDAD_2020_a6db9bce02.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/AUSTERIDAD_2021_dd1751edbb.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2021
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/AUSTERIDAD_2022_bb514db0b6.rar"
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
                                id="panelsStayOpen-headingFourEightFourTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourTwo"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourTwo"
                                >
                                  4.8.4.2 AUDITORIAS FIDUBOGOTA
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourTwo"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FIDUBOGOTA_2018_f80c653f83.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FIDUBOGOTA_2019_1fb880b97a.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FIDUBOGOTA_2020_5954a01d54.rar"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FIDUBOGOTA_2021_fb7cc3a477.rar"
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
                                id="panelsStayOpen-headingFourEightFourThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourThree"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourThree"
                                >
                                  4.8.4.3 AUDITORIAS NOMINA
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourThree"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_NOMINA_Y_PREST_SOCIALES_VIG_2017_8636586916.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2017
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_NOMINA_Y_PREST_SOCIALES_VIG_2018_a6bdd604a6.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_NOMINA_Y_PREST_SOCIALES_VIG_2019_5f43ad396c.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_NOMINA_Y_PREST_SOCIALES_VIG_2020_91237a1aa2.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_AUDIT_NOM_Y_P_SOC_2021_a96210ead7.pdf"
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
                                id="panelsStayOpen-headingFourEightFourFour"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourFour"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourFour"
                                >
                                  4.8.4.4 AUDITORIAS PRESUPUESTO
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourFour"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_PRESUPUESTO_VIG_2017_b45dd90d4c.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2017
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_PRESUPUESTO_VIG_2018_633a538169.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_PRESUPUESTO_VIG_2019_5a939115ff.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_PRESUPUESTO_VIG_2020_bf0c9973aa.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_PRESUPUESTO_VIG_2021_1ff53cec0c.pdf"
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
                                id="panelsStayOpen-headingFourEightFourFive"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourFive"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourFive"
                                >
                                  4.8.4.5 AUDITORIAS PROCESOS CONTABLES
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourFive"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_CONTABILIDAD_VIG_2017_fff81409f5.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2017
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_CONTABILIDAD_VIG_2018_ef024e67d5.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_CONTABILIDAD_VIG_2019_71b67d950b.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_CONTABILIDAD_VIG_2020_052125448a.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_AUDIT_CONTABILIDAD_VIG_2021_2_3094f252ef.pdf"
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
                                id="panelsStayOpen-headingFourEightFourSix"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseFourEightFourSix"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseFourEightFourSix"
                                >
                                  4.8.4.6 AUDITORIAS TESORERIA
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseFourEightFourSix"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFourEightFourSix"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_TESORERIA_VIGENCIA_2017_7b4577865b.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2017
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_TESORERIA_VIGENCIA_2018_ba3909cf3b.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2018
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_TESORERIA_VIGENCIA_2019_fdeec04516.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2019
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INF_FINAL_TESORERIA_VIGENCIA_2020_8e0e809f10.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      2020
                                    </a>
                                    <a
                                      href="https://apiwebtm.com/uploads/INFORME_FINAL_AUDIT_TESORERIA_VIG_2021_0536257757.pdf"
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
                            4.8.5 Informes de Gestión Oficina de Control Interno
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
                                href="https://apiwebtm.com/uploads/INFORME_DE_GESTION_OCI_VIG_2018_3db400b623.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2018
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/INFORME_DE_GESTION_OFICINA_DE_CONTROL_INTERNO_VIG_2019_8d557eb1e6.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2019
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
                              <a
                                href="https://apiwebtm.com/uploads/Informe_de_Gestion_Oficina_Control_Interno_vig_2022_ffe99ae73d.pdf"
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
                          id="panelsStayOpen-headingFourEightSix"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFourEightSix"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseFourEightSix"
                          >
                            4.8.6 Informes Pormenorizados
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseFourEightSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingFourEightSix"
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
                                href="https://apiwebtm.com/uploads/INFORMES_PORMENORIZADOS_2022_a86149cf51.7z"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2022
                              </a>
                              <a
                                href="https://apiwebtm.com/uploads/Informe_pormenorizado_Ene_Jun_2023_fe5d53ca65.pdf"
                                className="list-group-item list-group-item-action "
                                target="_blank"
                                rel="noreferrer"
                              >
                                2023
                              </a>
                            </div>
                          </div>
                        </div>
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
                          href="https://apiwebtm.com/uploads/2015_Informes_PQRS_e863121f7b.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2015
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2016_Informes_PQRS_f71c1afdcf.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2016
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2017_Informes_PQRS_6a127e6313.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2017
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2018_Informes_PQRS_fbc199818d.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2018
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2019_Informes_PQRS_32906b55dd.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2019
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2020_Informes_PQRS_aab05e1872.zip"
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noreferrer"
                        >
                          2020
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2021_Informes_PQRS_e5a190ca0e.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2021
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/2022_Informes_PQRS_bab9c03fc9.zip"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2022
                        </a>
                        <a
                          href="https://apiwebtm.com/uploads/Informe_pqrsdf_trimestre_2023_64ef5b74b8.rar"
                          className="list-group-item list-group-item-action "
                          target="_blank"
                          rel="noreferrer"
                        >
                          2023
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
        </div>
        {/* 6. Participa */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              6. Participa
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix"
          >
            <div className="accordion-item">
              <div className="accordion-body">
                <div className="list-group">
                  {/* <!-- Button trigger modal --> */}

                  <button
                    type="button"
                    className="btn text-start"
                    data-bs-toggle="modal"
                    data-bs-target="#participaModal"
                  >
                    6.1 Encuesta de participación ciudadana
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="participaModal"
                    aria-labelledby="participaModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="participaModalLabel">
                            Encuestas Transmetro
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
                          style={{ width: '150wh', height: '3518px' }}
                        >
                          <iframe
                            title="Encuesta Participa "
                            src="https://docs.google.com/forms/d/e/1FAIpQLSf09BqWz8VMWtDk9bbDc-XMe3IUFznefwpXUmmq4pDRgJv5xg/viewform?embedded=true"
                            style={{
                              width: '100%',
                              height: '3518px',
                            }}
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            style={{ color: 'white' }}
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

            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingSixTwo"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSixTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSixTwo"
                >
                  6.2 Rendición de cuentas
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSixTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingSixTwo"
              >
                <div className="accordion-body">
                  <div className="list-group">
                    <a
                      href="https://apiwebtm.com/uploads/Redincion_de_cuenta_2022_463a33ad75.rar"
                      className="list-group-item list-group-item-action "
                      target="_blank"
                      rel="noreferrer"
                    >
                      2021
                    </a>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingSixTwoOne"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseSixTwoOne"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseSixTwoOne"
                        >
                          2022
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseSixTwoOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingSixTwoOne"
                      >
                        <div className="accordion-body">
                          <div className="list-group">
                            <a
                              href="https://apiwebtm.com/uploads/decreto_0014_de_2023_rendicion_de_cuenta_db64ee93d0.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Decreto
                            </a>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingSixTwoTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseSixTwoTwo"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseSixTwoTwo"
                                >
                                  Informes de Gestión
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseSixTwoTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingSixTwoTwo"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <a
                                      href="https://apiwebtm.com/uploads/Informe_de_Gestion_2022_d0f3fdda11.pdf"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Informe de Gestión 2022.
                                    </a>
                                    <a
                                      href="https://app.powerbi.com/view?r=eyJrIjoiNzA4OTAwMTAtNjU1Yi00YzcwLWIyMmQtZmFhNzQxNWFiM2FhIiwidCI6IjQwMDNhNWU2LTljYmEtNDQzNS1hOGIyLWM3YjVjYjkwYTUzNiIsImMiOjR9"
                                      className="list-group-item list-group-item-action "
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Informe consolidado Rendición de Cuentas
                                      Alcaldía de Barranquilla 2022.
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2
                                className="accordion-header"
                                id="panelsStayOpen-headingSixTwoTwo"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#panelsStayOpen-collapseSixTwoThree"
                                  aria-expanded="false"
                                  aria-controls="panelsStayOpen-collapseSixTwoThree"
                                >
                                  Formularios de Participación
                                </button>
                              </h2>
                              <div
                                id="panelsStayOpen-collapseSixTwoThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingSixTwoThree"
                              >
                                <div className="accordion-body">
                                  <div className="list-group">
                                    <li className="list-group-item list-group-item-action ">
                                      <strong>
                                        {' '}
                                        Rendición de Cuentas Alcaldía de
                                        Barranquilla 2022.
                                      </strong>
                                      <div className="list-group">
                                        Haz preguntas relacionadas con el
                                        cumplimiento de las metas del plan de
                                        desarrollo de la Alcaldía de
                                        Barranquilla durante la vigencia 2022.
                                        <a href="https://survey123.arcgis.com/share/e773483303bb406da1abbfbd852b687d">
                                          <button
                                            type="button"
                                            className="btn text-primary "
                                          >
                                            Formulario aquí
                                          </button>
                                        </a>
                                      </div>
                                    </li>

                                    <li className="list-group-item list-group-item-action ">
                                      <strong>
                                        {' '}
                                        Rendición de Cuentas Transmetro 2022.
                                      </strong>
                                      <div className="list-group">
                                        Haz preguntas relacionadas con el
                                        cumplimiento de las metas del plan de
                                        desarrollo de Transmetro durante la
                                        vigencia 2022.
                                      </div>
                                      <div className="list-group">
                                        <a href="https://forms.gle/aCLUNzQ371orjjXM6">
                                          <button
                                            type="button"
                                            className="btn text-primary "
                                          >
                                            Formulario aquí
                                          </button>
                                        </a>{' '}
                                      </div>
                                    </li>
                                    {/* <li className="list-group-item list-group-item-action ">
                                      Informe consolidado Rendición de Cuentas
                                      Alcaldía de Barranquilla 2022.
                                      <div className="list-group">
                                        <a href="https://app.powerbi.com/view?r=eyJrIjoiNzA4OTAwMTAtNjU1Yi00YzcwLWIyMmQtZmFhNzQxNWFiM2FhIiwidCI6IjQwMDNhNWU2LTljYmEtNDQzNS1hOGIyLWM3YjVjYjkwYTUzNiIsImMiOjR9">
                                          <button
                                            type="button"
                                            className="btn text-primary "
                                          >
                                            Informe aquí
                                          </button>
                                        </a>{' '}
                                      </div>
                                    </li> */}
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
            </div>
            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingSixThree"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseSixThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseSixThree"
                >
                  6.3 Medición de Satisfacción
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSixThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingSixThree"
              >
                <div className="accordion-body">
                  <div className="list-group">
                    <a
                      href="https://apiwebtm.com/uploads/Medicion_de_Satisfaccion_3056ae121c.rar"
                      className="list-group-item list-group-item-action "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Medición de Satisfacción
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <div
                    id="panelsStayOpen-collapseSevenOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSevenOne"
                  >
                    <div className="accordion-body">
                      <div className="list-group">
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingSevenOneOne"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseSevenOneOne"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseSevenOneOne"
                            >
                              Programa de gestión documental
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseSevenOneOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingSevenOneOne"
                          >
                            <div className="accordion-body">
                              <div className="list-group">
                                <a
                                  href="https://apiwebtm.com/uploads/Programa_de_Gestion_Documental_0787f86fdf.pdf"
                                  className="list-group-item list-group-item-action "
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Programa de gestión documental
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Tablas de retención doumental */}
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="panelsStayOpen-headingSevenOneTwo"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseSevenOneTwo"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseSevenOneTwo"
                            >
                              Tablas de retención documental
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseSevenOneTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingSevenOneTwo"
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
                            id="panelsStayOpen-headingSevenOneThree"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseSevenOneThree"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseSevenOneThree"
                            >
                              Cuadro de clasificación documental
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseSevenOneThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingSevenOneThree"
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
                            id="panelsStayOpen-headingSevenOneFour"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseSevenOneFour"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseSevenOneFour"
                            >
                              Plan institucional de archivos - PINAR
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseSevenOneFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingSevenOneFour"
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
                            id="panelsStayOpen-headingSevenOnefive"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#panelsStayOpen-collapseSevenOnefive"
                              aria-expanded="false"
                              aria-controls="panelsStayOpen-collapseSevenOnefive"
                            >
                              Sistema integrado de conservacion
                            </button>
                          </h2>
                          <div
                            id="panelsStayOpen-collapseSevenOnefive"
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingSevenOnefive"
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
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre01_2022_4e7e5af744.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre I
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre02_2022_c33858964a.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre II
                            </a>{' '}
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre03_2022_56f143c7c3.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre III
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/Demanda_Diaria_Trimestre04_2022_da46ad8672.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Demanda diaria Trimestre IV
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
                              href="https://apiwebtm.com/uploads/TABLAS_DE_RETENCION_DOCUMENTAL_5d2e28cc01.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Tablas de retención documental
                            </a>
                            <a
                              href="https://apiwebtm.com/uploads/REGISTRO_DE_ACTIVOS_DE_INFORMACION_TRANSMETRO_SAS_9fa7f4b625.pdf"
                              className="list-group-item list-group-item-action "
                              target="_blank"
                              rel="noreferrer"
                            >
                              Registro de Activos de Información
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
          <div
            id="panelsStayOpen-collapseEigth"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEigth"
          >
            <div className="accordion-body">
              <div className="list-group">
                <a
                  href="/infantil"
                  className="list-group-item list-group-item-action "
                  rel="noreferrer"
                >
                  8.1 Información para población infantil y adolescente
                </a>
                <a
                  href="https://apiwebtm.com/uploads/ALCALDIA_DE_779819a9ac.pdf"
                  className="list-group-item list-group-item-action "
                  target="_blank"
                  rel="noreferrer"
                >
                  8.2 Certificado cumplimiento ITA 2023
                </a>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
