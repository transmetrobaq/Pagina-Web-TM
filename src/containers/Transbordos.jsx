/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/components/Transbordos.css';

// eslint-disable-next-line arrow-body-style
const Transbordos = () => {
  return (
    <div className="container" id="transbordos">
      {/* Transbordo */}

      <div className="row car__transb justify-content-center">
        <div
          className="card"
          style={{ marginBottom: '20px', border: 'none', width: '70rem' }}
        >
          <div className="card-body">
            <h1 className="card-title text-center">TRANSBORDOS</h1>

            <p className="card-text">
              El Sistema de Transporte Masivo de Barranquilla y su área
              metropolitana Transmetro, te permite realizar transferencias entre
              servicios, bien sea de troncal a alimentación, alimentación a
              alimentación, alimentación a troncal{' '}
              <span>totalmente gratis.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
      {/* Como Funciona Bootstrap */}
      <div
        className="container"
        style={{ marginBottom: '100px', marginTop: '100px' }}
      >
        <div className="container" style={{ maxWidth: '750px' }}>
          <div className="row row-cols-1 row-cols-md-2 g-4 ">
            <div className="col">
              <div className="card h-100 funciona-tm align-items-center">
                <img
                  src="https://apiwebtm.com/uploads/Recurso_10_e98f84db95.png"
                  className="card-img-top funciona-tm-img "
                  alt="icono"
                />
                <div className="card-body">
                  <p className="card-text">
                    Al cambiar de bus o al entrar a una estación para hacer el
                    transbordo, tienes que pasar la tarjeta por el sensor de
                    validación.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 funciona-tm align-items-center">
                <img
                  src="https://apiwebtm.com/uploads/Recurso_11_094f440548.png"
                  className="card-img-top"
                  alt="icono"
                />
                <div className="card-body">
                  <p className="card-text">
                    El transbordo no tiene costo adicional. Sólo pagas un
                    trayecto, desde el punto de partida hasta tu destino, aunque
                    hayas utilizado dos o tres servicios.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 funciona-tm align-items-center">
                <img
                  src="https://apiwebtm.com/uploads/Recurso_12_45e5ca814c.png"
                  className="card-img-top"
                  alt="icono"
                />
                <div className="card-body">
                  <p className="card-text">
                    Si viaja con uno o varios acompañantes, cada usuario debe
                    tener su propia tarjeta para realizar su transbordo sin que
                    se cobre otro pasaje.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 funciona-tm align-items-center">
                <img
                  src="https://apiwebtm.com/uploads/Recurso_13_1fc97b6397.png"
                  className="card-img-top"
                  alt="icono"
                />
                <div className="card-body">
                  <p className="card-text">
                    Puedes realizar hasta dos (2) transbordos entre diferentes
                    servicios en 105 minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tenga en cuenta que  */}
      <div className="container">
        <div className="card  mb-3 encuenta-tm ">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://apiwebtm.com/uploads/Recurso_15_c2df59272f.png"
                className="card-img-top"
                alt="icono"
              />
            </div>
            <div className="col-md-8 ">
              <h1>Ten en cuenta que </h1>
            </div>
          </div>
          <div className="card-footer bg-transparent encuentra-tm-li">
            <div style={{ display: 'flex' }}>
              <span>1.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  El transbordo entre servicios troncales sólo aplica si te
                  mantienes dentro del sistema y en un solo sentido.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer bg-transparent ">
            <div style={{ display: 'flex' }}>
              <span>2.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  Sólo puedes realizar transbordo en los paraderos o estaciones
                  autorizados en la Matriz de Transbordo.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer bg-transparent encuentra-tm-li">
            <div style={{ display: 'flex' }}>
              <span>3.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  Cuando cambias de bus o al entrar a una estación para hacer el
                  transbordo, tienes que pasar la tarjeta por la lectora pero no
                  se cobrará un nuevo pasaje.
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer bg-transparent ">
            <div style={{ display: 'flex' }}>
              <span>4.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  Si vas acompañado por una o varias personas, cada una debe
                  tener su propia tarjeta para realizar su transbordo sin que el
                  sistema le cobre otro pasaje.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer bg-transparent encuentra-tm-li">
            <div style={{ display: 'flex' }}>
              <span>5.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  Si hiciste uso del crédito, y vas a hacer transbordo en la
                  Troncal, al llegar a la estación debes pagar el crédito para
                  que te haga efectivo el transbordo.{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer bg-transparent ">
            <div style={{ display: 'flex' }}>
              <span>6.</span>
              <div style={{ margin: '20px' }}>
                <p>
                  Los transbordos con tarjeta débito de bancos aliados funcionan
                  de la misma manera que la tarjeta convencional de Transmetro,
                  es decir, no tienen costo y tiene el mismo tiempo para
                  realizarlos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reloj */}
      <div className="container reloj">
        <div className="row justify-content-center ">
          <div className="card time-tm" style={{ maxWidth: '30rem' }}>
            <div className="reloj-icono text-center  ">
              <i
                className="far fa-clock fa-5x rojo-lt"
                style={{ backgroundColor: 'white' }}
              />
            </div>
            <div className="card-body">
              <h2 className="card-title rojo-lt text-center">
                Tiempo para hacer tu transbordo
              </h2>

              <p className="card-text azul-lt">
                Es un rango de 105 minutos que se mide a partir del momento en
                que validas tu ingreso al Sistema, bien sea desde un servicio
                troncal en estaciones, o un servicio de alimentación. Desde ese
                momento cuentas con este tiempo para realizar hasta dos (2)
                transbordos sin costo adicional. Una vez se agote esta ventana
                de tiempo tiempo, se considera como un nuevo viaje, por lo
                tanto, se te cobrará un nuevo pasaje.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container linea-colores" />
      {/* Matrix de Transbordos */}
      <div className="titulo-plus">
        <h1 className="text-center azul-lt">MATRIZ DE TRANSBORDOS</h1>
        <h4 className="text-center azul-lt">
          Transbordos entre servicios Troncales y rutas Alimentadoras
        </h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck1" />
                <label className="tab-label" for="chck1">
                  Joe Arroyo
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="9">
                          {' '}
                          Joe Arroyo
                        </th>
                        <td className="azul-lt ">A7-1 Miramar</td>
                        <td className="azul-lt " rowspan="9">
                          Estacion Joe Arroyo
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A7-3 Carrera 38</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A7-4 Los Andes</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-1 Paraiso</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-2 Via 40</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A9-3 Buenavista</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A9-4 Carrera 46</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">U-30 Universidades</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-3 Prado</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck2" />
                <label className="tab-label " for="chck2">
                  La Catedral - Barrio Abajo - Parque Cultural del caribe
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className="azul-lt">La Catedral</th>
                        <td className="azul-lt">A8-3 Prado</td>
                        <td className="azul-lt">
                          Estaciones La Catedral, Barrio Abajo y Parque Cultural
                        </td>
                      </tr>
                      <tr>
                        <th className="azul-lt ">Barrio Abajo </th>
                      </tr>
                      <tr>
                        <th className="azul-lt">Parque Cultural del caribe</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck3" />
                <label className="tab-label " for="chck3">
                  Portal de Soledad
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="11">
                          {' '}
                          Portal de Soledad
                        </th>
                        <td className="azul-lt">A3-2 Soledad 2000</td>
                        <td className="azul-lt"> Portal de Soledad</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A3-3 Manuela Beltrán</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A3-4 Villa Sol</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A3-40 Villa Sol</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A3-41 Villa Karla</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A3-5 Ciudadela</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">Metropolitana</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A5-3 La Central</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A5-4 San Antonio</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A5-5 El Manantial</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A5-6 Granabastos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck4" />
                <label className="tab-label " for="chck4">
                  {' '}
                  Pacho Galán{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          Pacho Galán{' '}
                        </th>
                        <td className="azul-lt">A5-2 Las Moras </td>
                        <td className="azul-lt">Carrera 16 con calle 64 Esq</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck5" />
                <label className="tab-label " for="chck5">
                  {' '}
                  Pedro Ramayá
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          Pedro Ramayá{' '}
                        </th>
                        <td className="azul-lt">A3-1 Villa Katanga</td>
                        <td className="azul-lt">Carrera 24 con calle 63</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A5-1 Los Robles</td>
                        <td className="azul-lt">Carrera 23B con calle 63</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck6" />
                <label className="tab-label " for="chck6">
                  Joaquín Barrios Polo{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="3">
                          Joaquín Barrios Polo
                        </th>
                        <td className="azul-lt">A1-3 Galán</td>
                        <td className="azul-lt">
                          Carrera 1H con calle 45 Esq.
                        </td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A2-1 Hipódromo</td>
                        <td className="azul-lt">
                          Troncal Murillo con carrera 1 Metro Centro
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A6-6 Ciudadela</td>
                        <td className="azul-lt">
                          Estación Joaquín Barrios Polo
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck7" />
                <label className="tab-label " for="chck7">
                  Buenos Aires
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          Buenos Aires
                        </th>
                        <td className="azul-lt">A6-5 Carrizal</td>
                        <td className="azul-lt">
                          Troncal Murillo 45 con carrera 5B
                        </td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A1-4 La Magdalena</td>
                        <td className="azul-lt">Carrera 7 con calle 44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck8" />
                <label className="tab-label " for="chck8">
                  La Ocho
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          La Ocho
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A1-2 Las Palmas
                        </td>
                        <td className="azul-lt">Carrera 8 con calle 45</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">
                          Carrera 8 con calle 45 Farmacia Torres
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck9" />
                <label className="tab-label " for="chck9">
                  Atlántico
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt ">Atlántico</th>
                        <td className="azul-lt">A7-4 Los Andes</td>
                        <td className="azul-lt">
                          Troncal Murillo con carrera 27 Éxito
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck10" />
                <label className="tab-label " for="chck10">
                  La Arenosa
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt ">La Arenosa</th>
                        <td className="azul-lt">A7-3 Carrera 38</td>
                        <td className="azul-lt">
                          Troncal Murillo con carrera 43 Ara
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center azul-lt titulo-plus">
        TRANSBORDOS ENTRE SERVICIOS DE ALIMENTACIÓN
      </h1>

      <div className="container" style={{ marginBottom: '50px' }}>
        <div className="row">
          <div className="col">
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck-1" />
                <label className="tab-label" for="chck-1">
                  A1-3 Galán{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt ">A1-3 Galán</th>
                        <td className="azul-lt ">A2-1 Hipódromo</td>
                        <td className="azul-lt ">
                          Troncal Murillo con carrera 1 Metro Centro
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-2" />
                <label className="tab-label " for="chck-2">
                  A1-4 La Magdalena{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className="azul-lt">A1-4 La Magdalena </th>
                        <td className="azul-lt">A6-5 Carrizal </td>
                        <td className="azul-lt">
                          Troncal Murillo con carrera 5
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-3" />
                <label className="tab-label " for="chck-3">
                  A2-1 Hipódromo{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          A2-1 Hipódromo
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A1-3 Galán
                        </td>
                        <td className="azul-lt">
                          Carrera 1H con calle 45 Esq. Palacio del Peluquero
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 2E No. 44B-13</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-4" />
                <label className="tab-label " for="chck-4">
                  {' '}
                  A3-1 Villa Katanga{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt ">A3-1 Villa Katanga </th>
                        <td className="azul-lt">A5-1 Los Robles</td>
                        <td className="azul-lt">Carrera 23B con calle 63</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-5" />
                <label className="tab-label " for="chck-5">
                  A5-1 Los Robles{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="3">
                          A5-1 Los Robles{' '}
                        </th>
                        <td className="azul-lt">A3-1 Villa Katanga</td>
                        <td className="azul-lt">Carrera 24 con calle 63</td>
                      </tr>

                      <tr>
                        <td className="azul-lt" rowspan="2">
                          A6-6 Ciudadela
                        </td>
                        <td className="azul-lt">Calle 49 con carrera 12</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">
                          Av. Circunvalar con calle 51B
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-6" />
                <label className="tab-label " for="chck-6">
                  A5-3 La Central
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          A5-3 La Central
                        </th>
                        <td className="azul-lt">A3-4 Villa Sol</td>
                        <td className="azul-lt">Entrada Granabastos</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A3-41 Villa Karla</td>
                        <td className="azul-lt">Entrada Granabastos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-7" />
                <label className="tab-label " for="chck-7">
                  A5-4 San Antonio
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="2">
                          A5-4 San Antonio
                        </th>
                        <td className="azul-lt">A3-4 Villa Sol</td>
                        <td className="azul-lt">Entrada Granabastos</td>
                      </tr>

                      <tr>
                        <td className="azul-lt">A3-41 Villa Karla</td>
                        <td className="azul-lt">Entrada Granabastos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-8" />
                <label className="tab-label " for="chck-8">
                  A6-5 Carrizal{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt ">A6-5 Carrizal </th>
                        <td className="azul-lt">A1-4 La Magdalena</td>
                        <td className="azul-lt">Carrera 7 con calle 44</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-9" />
                <label className="tab-label " for="chck-9">
                  A6-6 Ciudadela
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="5">
                          A6-6 Ciudadela
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A1-3 Galán
                        </td>
                        <td className="azul-lt">
                          Carrera 1H con calle 45 Esq Palacio del Peluquero
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 2E No. 44B-13</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A2-1 Hipódromo</td>
                        <td className="azul-lt">
                          Troncal Murillo con carrera 1 Metro Centro
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt  sin-border" />

                        <td className="azul-lt">Calle 81 No. 21C-26 Soledad</td>
                      </tr>
                      <tr>
                        <td className="azul-lt" rowspan="2">
                          A5-1 Los Robles
                        </td>
                        <td className="azul-lt">Calle 77 con carrera 23D</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck-10" />
                <label className="tab-label " for="chck-10">
                  A7-1 Miramar
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="6">
                          A7-1 Miramar{' '}
                        </th>
                        <td className="azul-lt" rowspan="3">
                          A8-1 Paraíso
                        </td>
                        <td className="azul-lt">Carrera 46 No. 81-102</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 46 No. 82-100</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 84 No. 47-54</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-2 Vía 40</td>
                        <td className="azul-lt">Carrera 46 No. 76-68</td>
                      </tr>
                      <tr>
                        <td className="azul-lt" rowspan="2">
                          U-30 Universidades
                        </td>

                        <td className="azul-lt">
                          Carrera 46 No. 93-94 El Corra
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 46 con calle 96A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck-11" />
                <label className="tab-label " for="chck-11">
                  A7-3 Carrera 38
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A7-3 Carrera 38{' '}
                        </th>
                        <td className="azul-lt">A7-1 Miramar</td>
                        <td className="azul-lt">Carrera 43 con calle 76</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A7-3 Carrera 38</td>
                        <td className="azul-lt">
                          Calle 76 No. 38A-53 Colegio Betania
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-1 Paraíso</td>
                        <td className="azul-lt" rowspan="4 ">
                          Carrera 46 No. 76-68
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-2 Vía 40</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A9-4 Carrera 46</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">U-30 Universidades</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck-12" />
                <label className="tab-label " for="chck-12">
                  A7-4 Los Andes
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A7-4 Los Andes
                        </th>
                        <td className="azul-lt">A7-1 Miramar</td>
                        <td className="azul-lt">Carrera 43 con calle 76</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A7-3 Carrera 38</td>
                        <td className="azul-lt">
                          Calle 76 No. 38A-53 Colegio Betania
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-1 Paraíso</td>
                        <td className="azul-lt" rowspan="4 ">
                          Carrera 46 No. 76-68
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A8-2 Vía 40</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">A9-4 Carrera 46</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">U-30 Universidades</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-13" />
                <label className="tab-label " for="chck-13">
                  A8-1 Paraíso
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A8-1 Paraíso
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A9-3 Buenavista
                        </td>
                        <td className="azul-lt">Carrera 53 No. 82-268</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">
                          Carrera 53 con calle 82 Ocean Tower
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt sin-border">A9-4 Carrera 46</td>
                        <td className="azul-lt ">Carrera 46 No. 81-102</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">U-30 Universidades</td>
                        <td className="azul-lt">
                          Carrera 46 No. 79-204 Pérez Radiólogos
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-14" />
                <label className="tab-label " for="chck-14">
                  A8-2 Vía 40{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A8-2 Vía 40{' '}
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A8-3 Prado
                        </td>
                        <td className="azul-lt">Calle 75 con carrera 57</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 75 con carrera 55</td>
                      </tr>
                      <tr>
                        <td className="azul-lt " rowspan="2">
                          A9-3 Buenavista
                        </td>
                        <td className="azul-lt ">
                          Carrera 53 con calle 78 Villa Country
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 54 No.75-56</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 54 No. 75-56</td>
                        <td className="azul-lt">Carrera 46 No. 76-68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-15" />
                <label className="tab-label " for="chck-15">
                  A8-3 Prado{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A8-3 Prado{' '}
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A8-2 Vía 40{' '}
                        </td>
                        <td className="azul-lt">
                          Calle 76 con carrera 55 Country Club
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt">
                          Calle 76 con carrera 57 Combarranquilla
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt " rowspan="2">
                          A9-3 Buenavista
                        </td>
                        <td className="azul-lt ">Carrera 54 con calle 74</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 54 No. 75-56</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-16" />
                <label className="tab-label " for="chck-16">
                  A9-3 Buenavista{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A9-3 Buenavista{' '}
                        </th>
                        <td className="azul-lt" rowspan="2">
                          A8-1 Paraíso
                        </td>
                        <td className="azul-lt">Calle 84 No. 51–32</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 84 No. 52-76</td>
                      </tr>
                      <tr>
                        <td className="azul-lt " rowspan="2">
                          A8-2 Vía 40
                        </td>
                        <td className="azul-lt ">Calle 79 con carrera 51B</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 79 No. 53-54</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="tab">
                <input type="checkbox" id="chck-17" />
                <label className="tab-label " for="chck-17">
                  A9-4 Carrera 46{' '}
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          A9-4 Carrera 46
                        </th>
                        <td className="azul-lt" rowspan="3">
                          A8-1 Paraíso
                        </td>
                        <td className="azul-lt">Carrera 46 No. 81-102</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Carrera 46 No. 82-100</td>
                      </tr>
                      <tr>
                        <td className="azul-lt ">Calle 84 No. 47-54</td>
                      </tr>
                      <tr>
                        <td className="azul-lt" rowspan="2">
                          A8-2 Vía 40
                        </td>
                        <td className="azul-lt">Carrera 46 No. 76 - 68</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 79 No. 47-10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck-18" />
                <label className="tab-label " for="chck-18">
                  U-30 Universidades
                </label>
                <div className="tab-content">
                  <table className="table border-danger">
                    <tbody>
                      <tr>
                        <th className="rojo-lt" scope="col">
                          Estacion
                        </th>
                        <th className="rojo-lt" scope="col">
                          Rutas para Transbordo
                        </th>
                        <th className="rojo-lt" scope="col">
                          Punto de Transbordo
                        </th>
                      </tr>

                      <tr>
                        <th className=" azul-lt " rowspan="7">
                          U-30{' '}
                          <span style={{ fontSize: '14px' }}>
                            Universidades
                          </span>
                        </th>
                        <td className="azul-lt">A7-1 Miramar</td>
                        <td className="azul-lt">
                          Carrera 43 No. 90-128 Edificio El Tabor
                        </td>
                      </tr>
                      <tr>
                        <td className="azul-lt" rowspan="3">
                          A8-1 Paraíso
                        </td>
                        <td className="azul-lt">Carrera 46 No. 81-102</td>
                      </tr>
                      <tr>
                        <td className="azul-lt ">Carrera 46 No. 82 -100</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 84 No. 47-54</td>
                      </tr>
                      <tr>
                        <td className="azul-lt" rowspan="2">
                          A8-2 Vía 40
                        </td>
                        <td className="azul-lt">Carrera 46 No. 76-68</td>
                      </tr>
                      <tr>
                        <td className="azul-lt">Calle 79 No. 47-10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transbordos;
