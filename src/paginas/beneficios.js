import React, { Component } from 'react';
import './estilos/beneficios.css';
import usuario1 from '../imagenes/usuarios/usuario1.png';
import usuario2 from '../imagenes/usuarios/usuario2.png';
import usuario3 from '../imagenes/usuarios/usuario3.png';
import usuario4 from '../imagenes/usuarios/usuario4.png';
import usuario5 from '../imagenes/usuarios/usuario5.png';
import usuario6 from '../imagenes/usuarios/usuario6.png';
import usuario7 from '../imagenes/usuarios/usuario7.png';
import emblemaSemilla from '../imagenes/emblemas/semilla.png';
import emblemaBrote from '../imagenes/emblemas/brote.png';
import emblemaPlanta from '../imagenes/emblemas/planta.png';

class Beneficios extends Component{
  constructor(props) {
    super(props);
    this.state = {
      iconoUsuario: [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7]
    }
  }

  iconoAleatorio() {
    let indice = Math.floor(Math.random() * (this.state.iconoUsuario.length - 0));
    return this.state.iconoUsuario[indice]
  }

  render(){
	  return (
      <div className="container beneficios">
        <div className="row">
          <div className="col col-sm-1 col-icono-usuario">
            <img alt="Icono Usuario" src={this.iconoAleatorio()} className="icono-usuario"/>
          </div>
          <div className="col col-sm-10 align-middle">
            <h5 className="align-middle nombre-usuario">Ariel Soto</h5>
          </div>
        </div>
        <div className="row emblemas">
          <div className="col col-izquierda">
            <img alt="Emblema Semilla" src={emblemaSemilla} className="emblema emblema-semilla"/>
          </div>
          <div className="col col-centro">
            <img alt="Emblema Semilla" src={emblemaBrote} className="emblema"/>
          </div>
          <div className="col col-derecha">
            <img alt="Emblema Semilla" src={emblemaPlanta} className="emblema"/>
          </div>
        </div>
        <div className="row fila-progreso">
          <div className="col">
            <progress className="barra-progreso" value="50" max="100"></progress>
          </div>
        </div>
        <div className="segundo-contenedor">
          <div className="row">
            <div className="col col-nombre-nivel">
              <p>Nivel semilla</p>
            </div>
            <div className="col col-numero-nivel">
              <p>5/10</p>
            </div>
          </div>
          <div className="row">
            <div className="col col-gana-mas">
              <a className="a-gana-mas">¡Gana más puntos!</a>
            </div>
          </div>
        </div>
        <div className="row contenedor-cuenta-atras">
          <div className="col">
            <p>Tiempo restante</p>
          </div>
          <div className="col">
            <p>3meses</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn-promociones">Promociones</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Beneficios;