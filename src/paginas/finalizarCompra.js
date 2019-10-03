import React, { Component } from 'react';
import './estilos/finalizarCompra.css';
import BtnFinalizar from '../componentes/BtnFinalizar'
import { Link } from 'react-router-dom';
class Finalizar extends Component {


  render() {

    return (
      <div className="finalizar container">
        <div className="cabecera  row">
          <Link to="/perfil">
            <div classname="col-4">
              <i className="fas fa-arrow-left"></i>
            </div>
          </Link>
          <div classname="col-2"></div>
          <div classname=" col-6"><p className="textFlecha">Tu carrito de compra</p></div>
        </div>
        <div className="cuerpo">
          cuerpo
              </div>
        <div className="btnFinalizar">
         <BtnFinalizar/>

        </div>
      </div>
    )
  }
}
export default Finalizar
