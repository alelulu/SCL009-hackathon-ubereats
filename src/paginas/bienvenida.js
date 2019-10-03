import React, { Component } from 'react';
import './estilos/bienvenida.css';
import logoImg from '../imagenes/logouber.png'
import niñesImg from '../imagenes/ninestexto.png'
import cletaImg from '../imagenes/cletatexto.png'
import logroImg from '../imagenes/logro.png'
import { Link } from 'react-router-dom';





class Bienvenida extends Component {

  render() {

    return (

      <div className="fluid-container">
        <div className="headerB row">
          <div className="col-1"></div>
          <div className="hashtag col-4">

            <p>#EligeVerde</p>
          </div>
          <div className="col-4">
          </div>
          <div className="logo col-3">
            <img className="logouber" src={logoImg} alt="..." />
          </div>
        </div>
        <h1 className="bienvenido">Bienvenido</h1>
        <div className="carruselB">
          <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={niñesImg} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Elige sello verde</h5>
                    <p>Al comprar en restaurantes sustentables gana el planeta y tu también!.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={cletaImg} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                  <img src={logroImg} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <Link to="/finalizar">
          <button className="btnVerde">Elige verde</button>
        </Link>

      </div>
    )
  }
}

export default Bienvenida;