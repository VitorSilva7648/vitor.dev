import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import about from './imagens/OIP.jfif';
import self from './imagens/SELF.jpeg';
import './styles/my_styles.css'; 

function About1() {
 
  return (

        <div className="container-fluid bg-grey">
      
          <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-6">
              <br/>
                <div className='container-photo'>
                <img src={self} alt="My Image" className="logo-img" width="170" height="220" />
                <br/><br/>
                
              </div>
              </div>
              <div className="col-sm-6">
                <div className='logo-description'>
                <br/>
                <p style={{ textAlign: 'left' }}>Name: Vitor Hugo Silva Gonçalves </p>
                <p style={{ textAlign: 'left' }}>Profile: Developer </p>
                <p style={{ textAlign: 'left' }}>Email: vitor.goncalves@ufu.br </p>
                <p style={{ textAlign: 'left' }}>Phone: (34) 99789-7624</p>
              </div>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <br/>
            <h2>Values</h2>
            <ul >
              <li  style={{ textAlign: 'left' }}>Organization and management of tasks, ensuring efficient and on-time completion.</li>
              <li  style={{ textAlign: 'left' }}>Ability to make critical and informed decisions, evaluating alternatives and considering 
                the risks involved to reach effective solutions.</li>
              <li  style={{ textAlign: 'left' }}>Adaptability to new situations and environments, being able to deal with changes and find 
                flexible solutions.</li>
              <li  style={{ textAlign: 'left' }}>Curiosity and thirst for learning, continually seeking to update knowledge and personal 
                development.</li>
            </ul>
            </div>
        </div>
      </div>
  );
}
export default About1;      
   