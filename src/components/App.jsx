import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import Layout from './Layout';
// eslint-disable-next-line arrow-body-style
const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
