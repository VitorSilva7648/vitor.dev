import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles/my_styles.css'; // Importando o arquivo CSS

function CustomJumbotron() {
  return (

      <div style={{ backgroundColor: 'white' }}>
        <div className="jumbotron text-center">
            <h1>Welcome</h1>
            <p>I'm Vitor Silva</p>
          </div>
      </div>
  );
}

export default CustomJumbotron;
