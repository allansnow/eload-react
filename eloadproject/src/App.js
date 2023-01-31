import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Soluctions from './components/Soluctions';
import DouglasFb from './components/DouglasFb';
import Funcional from './components/Funcional';
import Feedbacks from './components/Feedbacks';
import Banner from './components/Banner';
import Guarantee from './components/Guarantee';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      <Soluctions />
      <DouglasFb />
      <Funcional />
      <Feedbacks />
      <Banner />
      <Guarantee />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
