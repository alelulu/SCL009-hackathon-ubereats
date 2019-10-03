import React, { Component } from 'react';
import './estilos/cabecera.css';
import logoImg from '../imagenes/logouber.png';


class Cabecera extends Component{

  render(){
	  return (
      <div className="container cabecera-container">
        <div className="row">
          <div className="col col-btn">
            <button className="btn-elige-verde" type="button" src="https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code">#EligeVerde</button>
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