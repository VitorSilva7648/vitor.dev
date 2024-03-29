import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavbar from './components/NavBar_Page.jsx';
import CustomJumbotron from './components/Inicial_Page.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import About1 from './components/About1.jsx';

function App() {

  return (
    <>
      <CustomNavbar/>
      <CustomJumbotron/>
      <About/>
      <About1/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
