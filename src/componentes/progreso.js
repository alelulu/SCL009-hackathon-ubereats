

import React, { Component } from 'react';
import './estilos/progreso.css';
import { Link } from 'react-router-dom';

class Progreso extends Component {
  render(){
	  return (
      <div className="container progreso">
        <div className="row fila-progreso">
          <div className="col">
            <progress className="barra-progreso" value={this.props.puntos} max={this.props.puntosMaximos}></progress>
          </div>
        </div>
        <div className="segundo-contenedor">
          <div className="row nombre-puntos">
            <div className="col col-nombre-nivel">
              <p className="p-nombre-nivel">Nivel semilla</p>
            </div>
            <div className="col col-numero-nivel">
              <p className="p-numero-nivel">{this.props.puntos}/{this.props.puntosMaximos}</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-gana-mas">
              <Link to="/descripcion">
              <p className="a-gana-mas">¡Gana más puntos!</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row contenedor-cuenta-atras">
          <div className="col">
            <p>Tiempo restante:</p>
          </div>
          <div className="col">
            <p>3meses</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Link to='/promociones'>
            <button className="btn-promociones">Promociones</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Progreso;