import React, { Component } from 'react';
import './estilos/inicio.css';
import carruselImg from '../imagenes/carrusel.png';
import ofertasImg from '../imagenes/ofertas.png';
import menuImg from '../imagenes/menu.png';

class Inicio extends Component{

  render(){
	  return (
      <div className="fluid-container inicio">
        <h1 className="texto-inicio">Inicio </h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carruselImg} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={carruselImg} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={carruselImg} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <h5 className="texto-inicio titulo-ofertas">Ofertas especiales</h5>
        <p className="texto-inicio p-inicio">Provisto por restaurantes locales</p>
        <img src={ofertasImg} className="d-block w-100" alt="Ofertas"/>
        <img src={menuImg} className="d-block w-100" alt="Menu"/>
      </div>
    )
  }
}

export default Inicio;