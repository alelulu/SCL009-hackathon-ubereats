import React, { Component } from 'react';
import './estilos/descripcion-beneficios.css';

class Descripcion extends Component{

  render(){
	  return (
      <div className="container">
        <div className="contenedor-titulo-nivel">
          <div className="row con-borde">
            <div className="col col-sm-1 ">
              <img alt="Emblema Nivel" src={this.props.iconoNivel} className="emblema-nivel"/>
            </div>
            <div className="col col-sm-10 col-nombre-nivel">
              <h5 className="nombre-nivel">Nivel {this.props.nombreNivel}</h5>
              <p className="puntos-nivel">{this.props.numeroPuntos} Puntos</p>
            </div>
          </div>
        </div>
        <div className="contenedor-descripcion-nivel">
          <p>{this.props.nombreNivel}: Por {this.props.puntosMaximos} compras sustentables</p>
          {this.props.descripcion.map(ele => {
            return <p key={ele}>- {ele}</p>
          })}
          <p>*Cada seis meses cambian los premios y volvemos a jugar!</p>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn-volver" onClick={() => this.props.volver()}>Volver atrás</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Descripcion;