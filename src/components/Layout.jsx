import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

// import '../styles/components/Layout.css';

const Layout = ({ children }) => (
  <div className="Main">
    <Navbar />
    <Header />

    {children}
    <Footer />
  </div>
);

export default Layout;
