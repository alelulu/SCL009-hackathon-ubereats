import React, { Component } from 'react';
import './estilos/inicio.css';
import inicio from '../imagenes/imageninicio.jpg';
import imagen from '../imagenes/logouber.png';
import { Link } from 'react-router-dom';

class Inicio extends Component{

  render(){
	  return (
      <div className="fluid-container inicio">
        <img alt="inicio" className="img-inicio" src={inicio}/>
        <Link to="/bienvenida">
          <div className="mensaje">
            <p className="texto-mensaje">¡Descubre lo nuevo!</p>
            <img src={imagen} alt="logo" className="imagen-logo"/>
          </div>
        </Link>
      </div>
    )
  }
}

export default Inicio;