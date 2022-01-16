import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Transmetro from '../containers/Transmetro';
import Sistema from '../containers/Sistema';
import Ciudadano from '../containers/Ciudadano';
import NoticiasDetails from '../containers/NoticiasDetails';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';
import Noticias from '../containers/Noticias';
import Transparencia from '../containers/Transparencia';

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
            <Route exact path="/ciudadano" component={Ciudadano} />
            <Route exact path="/noticias" component={Noticias} />
            <Route
              exact
              path="/noticias/:noticiasId"
              component={NoticiasDetails}
            />
            <Route exact path="/transparencia" component={Transparencia} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
