import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles/my_styles.css'; // Importando o arquivo CSS

function CustomJumbotron() {
  return (

      <Container>
        <div className="jumbotron text-center">
        <h1>Welcome</h1>
        <p>I'm Vitor Silva</p>
        </div>
      </Container>
   
  );
}

export default CustomJumbotron;
