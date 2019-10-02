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
      <div className="container">
        <h1>Beneficios</h1>
        <img alt="Icono Usuario" src={this.iconoAleatorio()} className="icono-usuario"/>
        <div className="row emblemas">
          <div className="col col-izquierda">
            <img alt="Emblema Semilla" src={emblemaSemilla} className="emblema"/>
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
            <progress className="barra-progreso" value="98" max="100"></progress>
          </div>
        </div>
      </div>
    )
  }
}

export default Beneficios;