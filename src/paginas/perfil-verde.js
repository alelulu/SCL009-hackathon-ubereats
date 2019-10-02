import React, { Component } from 'react';
import './estilos/perfil-verde.css';
import { Link } from 'react-router-dom';

class Perfil extends Component{

  render(){
	  return (
      <div className="container">
        <h1>Perfil</h1>
        <Link to="/beneficios">
          <button>Beneficios</button>
        </Link>
      </div>
    )
  }
}

export default Perfil;