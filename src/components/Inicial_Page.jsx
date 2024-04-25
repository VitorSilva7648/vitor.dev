import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles/my_styles.css'; // Importando o arquivo CSS

function CustomJumbotron() {
  return (
    <div  id="home">
      <div className="jumbotron ">
        <h1 className="text-center">Welcome</h1>
        <p className="text-center">I'm Vitor Silva, developer full stack</p>
      </div>
    </div>
  );
}

export default CustomJumbotron;
