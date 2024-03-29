import React, { useState, useEffect } from 'react';
import about from './imagens/OIP.jfif';
import self from './imagens/SELF.jpeg';
import './styles/my_styles.css'; 

function About() {
 
  return (
    <div className="componente-seguinte">
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <h2 style={{ textAlign: 'left' }}>About me</h2>
          <p style={{ textAlign: 'justify' }}>Hello! My name is Vitor Silva, and I am a Computer Engineering student at the renowned Federal University 
              of Uberlândia (UFU). From an early age, my fascination with technology and computing drove me to seek 
              knowledge in this constantly evolving area. I have had the privilege of immersing myself in a dynamic and 
              challenging academic environment, where I have explored several fundamental disciplines, from algorithms 
              and data structures to embedded systems and artificial intelligence. Furthermore, I have actively 
              participated in research projects and extracurricular activities that enrich my academic experience.
          </p>
          <p style={{ textAlign: 'justify' }}>I'm driven by the desire to contribute meaningfully to projects that push the boundaries of what's 
              possible in the realm of Computer Engineering. Eager to embrace new opportunities that promise to enrich 
              my skill set, I invite you to connect with me as we embark on an exhilarating journey through the 
              ever-evolving landscape of technology. Let's explore the exciting possibilities awaiting us in the world of
              Computer Engineering together.
          </p>
          <br />
          <h4 style={{ textAlign: 'left' }}>Skill</h4>
          <ul>
            <li style={{ textAlign: 'left' }} ><strong>Backend:</strong> C, Python, C#</li>
            <li style={{ textAlign: 'left' }}><strong>Frontend:</strong> JavaScript, HTML, React, CSS</li>
            <li style={{ textAlign: 'left' }}><strong>Banco de dados:</strong> PostGresql</li>
            <li style={{ textAlign: 'left' }}><strong>Business Intelligence:</strong> PowerBI</li>
          </ul>

          <br />
        </div>
        <div className="col-sm-4">
          <img src={about} alt="about me" className="logo-img1" width="300" height="330" /><br/><br/><br/>
        </div>
      </div>
      <div className="container-fluid bg-grey">

          <div className="row">
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-6">
                <img style={{ float: 'left' }} src={self} alt="My Image" className="logo-img" width="170" height="220" />
                <br/><br/>
              </div>
              <div className="col-sm-6">
                <p style={{ textAlign: 'left' }}>Name: Vitor Hugo Silva Gonçalves </p>
                <p style={{ textAlign: 'left' }}>Profile: Developer </p>
                <p style={{ textAlign: 'left' }}>Email: vitor.goncalves@ufu.br </p>
                <p style={{ textAlign: 'left' }}>Phone: (34) 99789-7624</p>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
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
    </div>   
    </div>  

  );
}

export default About;


/**
 *      
 */