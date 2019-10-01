import React, { Component } from 'react';
import './estilos/inicio.css';
import carruselImg from '../imagenes/carrusel.png';
import ofertasImg from '../imagenes/ofertas.png';
import menuImg from '../imagenes/menu.png';

class Inicio extends Component{

  render(){
	  return (
      <div className="fluid-container inicio">
        <h1 className="texto-inicio">Inicio</h1>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={carruselImg} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={carruselImg} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={carruselImg} class="d-block w-100" alt="..."/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <h5 className="texto-inicio titulo-ofertas">Ofertas especiales</h5>
        <p className="texto-inicio p-inicio">Provisto por restaurantes locales</p>
        <img src={ofertasImg} class="d-block w-100" alt="Ofertas"/>
        <img src={menuImg} class="d-block w-100" alt="Menu"/>
      </div>
    )
  }
}

export default Inicio;