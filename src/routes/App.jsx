import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Transmetro from '../containers/Transmetro';
import Sistema from '../containers/Sistema';
import Transbordos from '../containers/Transbordos';
import RutasTroncales from '../containers/RutasTroncales';
import TroncalesDetails from '../containers/TroncalesDetails';
import RutasAlimentadoras from '../containers/RutasAlimentadoras';
import Estaciones from '../containers/Estaciones';
import AlimentadorasDetails from '../containers/AlimentadorasDetails';
import EstacionesDetails from '../containers/EstacionesDetails';
import Tarjetas from '../containers/Tarjetas';
import Ciudadano from '../containers/Ciudadano';
import NoticiasDetails from '../containers/NoticiasDetails';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';
import Noticias from '../containers/Noticias';
import Transparencia from '../containers/Transparencia';
import Accesibilidad from '../containers/Accesibilidad';
import Directorio from '../containers/Directorio';
import Infantil from '../containers/Infantil';

// eslint-disable-next-line arrow-body-style
const App = () => {
  const initialState = useFetch();
  /* const isEmpty = Object.keys(initialState.preguntas); */
  /*  const [crumbs] = useState([]); */

  /*  const selected = (crumb) => {
    console.log(crumb);
  }; */

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/transmetro" component={Transmetro} />
            <Route exact path="/sistema" component={Sistema} />
            <Route exact path="/sistema/transbordos" component={Transbordos} />

            <Route
              exact
              path="/sistema/rutas_troncales"
              component={RutasTroncales}
            />
            <Route
              exact
              path="/sistema/rutas_troncales/:troncalId"
              component={TroncalesDetails}
            />

            <Route
              exact
              path="/sistema/rutas_alimentadoras"
              component={RutasAlimentadoras}
            />
            <Route
              exact
              path="/sistema/rutas_alimentadoras/:alimentadorId"
              component={AlimentadorasDetails}
            />

            <Route exact path="/sistema/estaciones" component={Estaciones} />
            <Route
              exact
              path="/sistema/estaciones/:estacionesId"
              component={EstacionesDetails}
            />
            <Route exact path="/sistema/tarjetas" component={Tarjetas} />
            <Route exact path="/ciudadano" component={Ciudadano} />
            <Route exact path="/noticias" component={Noticias} />
            <Route
              exact
              path="/noticias/:noticiasId"
              component={NoticiasDetails}
            />
            <Route exact path="/transparencia" component={Transparencia} />
            <Route exact path="/accesibilidad" component={Accesibilidad} />
            <Route
              exact
              path="/transparencia/directorio"
              component={Directorio}
            />
            <Route exact path="/infantil" component={Infantil} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
