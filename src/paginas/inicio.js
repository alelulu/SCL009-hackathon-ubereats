import React, { Component } from 'react';
import './estilos/inicio.css';
import inicio from '../imagenes/imageninicio.jpg';
import imagen from '../imagenes/logouber.png';

class Inicio extends Component{

  render(){
	  return (
      <div className="fluid-container inicio">
        <img alt="inicio" className="img-inicio" src={inicio}/>
        <div className="mensaje">
          <p className="texto-mensaje">¡Descubre lo nuevo!</p>
          <img src={imagen} alt="logo" className="imagen-logo"/>
        </div>
      </div>
    )
  }
}

export default Inicio;