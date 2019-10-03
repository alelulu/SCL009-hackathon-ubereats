import React, { Component } from 'react';
import './estilos/promociones.css'

class Promociones extends Component{
    render(){
        return(
            <div className="promo">
                <div className="row">
                    <p className="col-6"><i class="fas fa-times"></i>Prómociones</p>
                    <p className="agregar col-6">Agregar promoción</p>
                </div>
                <div className="verdeS">
                    <p className="sube">Sube de nivel y obten mas promociones</p>
                </div>
                <div className="disponible ">
                    
                    <h5  >Prómociones disponibles</h5>
                    <p >Limite de una por pedido</p>
                    
                </div>



            </div>
        )
    }
}
export default Promociones