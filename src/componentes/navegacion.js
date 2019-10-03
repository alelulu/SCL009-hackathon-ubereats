import React, { Component } from 'react';
import './estilos/navegacion.css';
import { Link } from 'react-router-dom';


class Navegacion extends Component {
  render(){
	  return (
      <div className="container navegador">
        <div className="row">
          <div className="col col-icono">
            <Link to="/inicio">
              <i class="fas fa-home icono-usable"></i>
            </Link>
          </div>
          <div className="col col-icono">
            <i class="fas fa-search icono-no-usable"></i>
          </div>
          <div className="col col-icono">
            <i class="fas fa-book icono-no-usable"></i>
          </div>
          <div className="col col-icono">
            <Link to="/bienvenida">
              <i class="fas fa-leaf icono-usable hoja"></i>
            </Link>
          </div>
          <div className="col col-icono">
            <Link to="/perfil">
              <i class="fas fa-user icono-usable"></i>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navegacion;