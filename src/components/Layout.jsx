import React from 'react';
/* import Header from './Header'; */
import Footer from './Footer';
import Navbar from './Navbar';
import Breadcrumb from './Breadcrumb';
import Publicarrusel from './Publicarrusel';

// import '../styles/components/Layout.css';

const Layout = ({ children }) => (
  <>
    <div className="container-xxl">
      <Navbar />
    </div>
    {/* <Header /> */}
    <div style={{ marginTop: '100px', marginLeft: '150px' }}>
      <Breadcrumb />
    </div>

    {children}

    <Publicarrusel />

    <Footer />
  </>
);

export default Layout;
