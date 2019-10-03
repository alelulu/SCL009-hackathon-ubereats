import React, { Component } from 'react';
import Progreso from '../componentes/progreso';
import Descripcion from '../componentes/descripcion-beneficios';
import Cabecera from '../componentes/cabecera';
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
      iconoUsuario: [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7],
      niveles: [
        {
          nombre: "Semilla",
          puntos: 10,
          descripcion: ["1 despacho gratis", "10% de descuento"],
          imagen: emblemaSemilla
        },
        {
          nombre: "Brote",
          puntos: 25,
          descripcion: ["2 despachos gratis", "$3000 de descuento en compras superiores a $5000"],
          imagen: emblemaBrote
        },
        {
          nombre: "Planta",
          puntos: 50,
          descripcion: ["Por cada compra ganas un punto", "Prioridad en tus pedidos por un mes", "3 despachos gratis", "$5000 de descuento"],
          imagen: emblemaPlanta
        }
      ],
      indiceNivelActual: 0,
      puntosActuales: 8,
      mostrarProgreso: true,
      mostrarNivel: 0,
      iconoActual: usuario1
    }
    this.mostrarProgreso = this.mostrarProgreso.bind(this)
  }

  componentDidMount() {
    this.setState({iconoActual: this.iconoAleatorio()})
  }

  iconoAleatorio() {
    let indice = Math.floor(Math.random() * (this.state.iconoUsuario.length - 0));
    return this.state.iconoUsuario[indice]
  }

  alternarVistas(indiceNivel) {
    if(this.state.mostrarProgreso){
      return (
      <Progreso puntos={this.state.puntosActuales} puntosMaximos={this.state.niveles[this.state.indiceNivelActual].puntos}/>
      )}
    else{
      return (
        <Descripcion iconoNivel={this.state.niveles[indiceNivel].imagen}
        nombreNivel={this.state.niveles[indiceNivel].nombre}
        numeroPuntos={this.state.puntosActuales}
        puntosMaximos={this.state.niveles[indiceNivel].puntos}
        descripcion={this.state.niveles[indiceNivel].descripcion}
        volver={this.mostrarProgreso}
        />
      )
    }
  }

  cambiarMostrarNivel(indiceNivel) {
    this.setState({
      mostrarNivel: indiceNivel,
      mostrarProgreso: false
    });
  }

  mostrarProgreso() {
    this.setState({
      mostrarProgreso: true
    })
  }

  render(){
	  return (
      
      <div className="container beneficios">
        <Cabecera/>
        <div className="row">
          <div className="col col-icono-usuario">
            <img alt="Icono Usuario" src={this.state.iconoActual} className="icono-usuario"/>
          </div>
          <div className="col col-nombre">
            <h5 className="nombre-usuario">Ariel Soto</h5>
          </div>
        </div>
        <div className="row emblemas">
          <div className="col col-izquierda">
            <img alt="Emblema Semilla" src={emblemaSemilla} onClick={() => this.cambiarMostrarNivel(0)}className="emblema emblema-semilla"/>
          </div>
          <div className="col col-centro">
            <img alt="Emblema Semilla" src={emblemaBrote} onClick={() => this.cambiarMostrarNivel(1)} className="emblema"/>
          </div>
          <div className="col col-derecha">
            <img alt="Emblema Semilla" src={emblemaPlanta} onClick={() => this.cambiarMostrarNivel(2)} className="emblema"/>
          </div>
        </div>
        {this.alternarVistas(this.state.mostrarNivel)}
      </div>
    )
  }
}

export default Beneficios;