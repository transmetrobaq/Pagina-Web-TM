import React from 'react';
import '../styles/components/Info.css';

// eslint-disable-next-line arrow-body-style
const Info = () => {
  return (
    <>
      <div className="container">
        <div className="container bloque2 ">
          <div className="row row-cols-2">
            <div className="col">column</div>
            <div className="col">Column</div>
          </div>
        </div>
        {/* <!--INFO BLOQUE 3---> */}
        <div className=" text-center container bio">
          <div className="card-body">
            <h3 className="  "> TODOS CONTRA EL COVID-19</h3>
            <p className="">Como protegerse y proteger a los demas</p>
            <hr className="dropdown-divider " />
          </div>

          <div className="card-body">
            <div className="card-text">
              <li className=" icono1 align-baseline fas fa-address-book fa-4x">
                <p className="textIcono1"> lavarse las manos </p>
              </li>
              <li className=" icono2 align-baseline fas fas fa-car-side fa-4x">
                <p className="textIcono2">Uso mascarilla </p>
              </li>
              <li className=" icono3 align-baseline fas fa-motorcycle fa-4x">
                <p className="textIcono3">Limpie y desinfecte </p>
              </li>
              <li className=" icono4 align-baseline fas fa-money-bill-alt fa-4x">
                <p className="textIcono4">Mantenga sana distancia </p>
              </li>
            </div>
          </div>
        </div>

        {/*  <!--INFO BLOQUE 4 Mapa---> */}

        <div className="container map ">
          <div className="card-body mapa ">
            <h4 className="tex-mapa text-center">MAPA ESTACIONES</h4>
          </div>

          <div className="card-body">
            <div className="card-text text-center">
              <span>
                {' '}
                <img
                  className="img-mapa"
                  src="https://i.postimg.cc/4dbVfXgp/m1.jpg"
                  alt="troncales"
                />
              </span>
            </div>
          </div>

          <hr className="dropdown-divider " />
          <div className="row">
            <div className="col-4 col-md-4  col-sm-6 text-center">
              <h5>TERMINALES</h5>
            </div>
            <div className=" col-8 col-sm-6 col-md-8 ">
              <div className="text-center">
                <i className="fas fa-square icono-map3 fa-1x">
                  <span className="text-map1">Terminal de soledad</span>
                </i>
                <i className="fas fa-square icono-map3 fa-1x">
                  <span className="text-map2">Terminal de soledad</span>
                </i>
                <i className="fas fa-square icono-map3 fa-1x">
                  <span className="text-map3">Terminal de soledad</span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className="container card1-">
          <div className="row">
            <div className="col text-center ">
              <h3 className="tex">Terminales</h3>
              <i className="fas fa-bus-alt fa-3x cars-ico" />
            </div>
            <div className="col order-5">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
            <div className="col order-1-">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="container card1-">
          <div className="row">
            <div className="col text-center">
              <h3>Terminales</h3>
              <i className="fas fa-bus-alt fa-3x cars-ico" />
            </div>
            <div className="col order-5">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
            <div className="col order-1">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="container card1-">
          <div className="row">
            <div className="col text-center">
              <h3>Terminales</h3>
              <i className="fas fa-bus-alt fa-3x cars-ico" />
            </div>
            <div className="col order-5">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
            <div className="col order-1">
              <ol>
                <li>Primer elemento</li>
                <li>Segundo elemento</li>
                <li>Tercer elemento</li>
                <li>Cuarto elemento</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title-cards">
          <h2>Servicios que Ofrecemos</h2>
        </div>
        <div className="container__card">
          <div className="cards">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"
                alt="..."
              />
            </figure>
            <div className="contenido-card">
              <h3>Diseño Gràfico</h3>
              <p>
                Podemos crear la identidad corporativa de tu empresa. Diseño ,
                Maquetación de folletos, Catálogos, Papelería y mucho más.
              </p>
              <a href="/">Leer Màs</a>
            </div>
          </div>
          <div className="cards">
            <figure>
              <img
                src="https://colmayorbolivar.edu.co/blog/wp-content/uploads/2017/06/imagen-administracion.jpg"
                alt="..."
              />
            </figure>
            <div className="contenido-card">
              <h3>Gestión de Redes</h3>
              <p>
                Nosotros creamos y optimizamos tus perfiles en las Redes
                Sociales. Importantes para que tu presencia online sea completa.
              </p>
              <a href="/">Leer Màs</a>
            </div>
          </div>
          <div className="cards ">
            <figure>
              <img
                src="https://image.freepik.com/foto-gratis/desarrollo-programadores-desarrollo-tecnologias-diseno-codificacion-sitios-web_18497-1090.jpg"
                alt="..."
              />
            </figure>
            <div className="contenido-card">
              <h3>Desarrollo Web</h3>
              <p>
                Creamos tu página web utilizando las últimas tecnologías
                disponibles. Una Web adaptativa a tu móvil o Tablet y con un
                gestor de contenido fácil.
              </p>
              <a href="/">Leer Màs</a>
            </div>
          </div>
          {/* <!--FIN DE INFO BLOQUE 3---> */}
        </div>
      </div>
    </>
  );
};

export default Info;
