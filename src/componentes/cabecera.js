import React, { Component } from 'react';
import './estilos/cabecera.css';
import logoImg from '../imagenes/logouber.png';


class Cabecera extends Component{

  render(){
	  return (
      <div className="container cabecera-container">
        <div className="row">
          <div className="col col-btn">
            <p className="btn-elige-verde">#EligeVerde</p>
          </div>
          <div className="col col-logo">
            <img src={logoImg} alt="Logo elige verde" className="logo-elige-verde"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cabecera;