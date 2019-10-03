import React, { Component } from 'react';
import './estilos/navegacion.css';
import { Link } from 'react-router-dom';
import inicioIcon from '../imagenes/inicio.png';
import busquedaIcon from '../imagenes/busqueda.png';
import historialIcon from  '../imagenes/historial.png';
import bienvenidaIcon from '../imagenes/bienvenida.png';
import perfilIcon from '../imagenes/perfil.png'
import { spawn } from 'child_process';



class Navegacion extends Component {
  render(){
	  return (
      <div className="container navegador">
        <div className="row">
          <div className="col">
            <Link to="/inicio">
              <img alt="Inicio" src={inicioIcon} className=""/>
            </Link>
          </div>
          <div className="col">
            <img alt="Busqueda" src={busquedaIcon} className=""/>
          </div>
          <div className="col">
            <img alt="Historial" src={historialIcon} className=""/>
          </div>
          <div className="col">
            <Link to="/bienvenida">
              <img alt="Bienvenida" src={bienvenidaIcon} className=""/>
            </Link>
          </div>

          <div className="col">
            <Link to="/perfil">
              <img alt="Perfil" src={perfilIcon} className=""/>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Navegacion;