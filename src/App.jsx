import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import CustomNavbar from './components/NavBar_Page.jsx';
import CustomJumbotron from './components/Inicial_Page.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
    <>
      <CustomNavbar/>
      <CustomJumbotron/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
