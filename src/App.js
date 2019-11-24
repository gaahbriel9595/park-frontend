import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/template/Header';
import SideBar2 from './components/template/SideBar2';
import Footer from './components/template/Footer';
import Routes from './components/Routes';



function App() {
  return (
    <div className="App">
      <Header />
      <SideBar2 />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
