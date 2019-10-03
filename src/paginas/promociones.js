import React, { Component } from 'react';
import './estilos/promociones.css'
import brote from '../imagenes/emblemas/brote.png'

class Promociones extends Component {
    render() {
        return (
            <div className="promo">
                <div className="titlePromocion row">
                    <p className="col-6"><i class="fas fa-times"></i>Prómociones</p>
                    <p className="agregar col-6">Agregar promoción</p>
                </div>
                <div className="verdeS row">

                    <p className="sube col-12"><img className="broteIm" src={brote}></img>Sube de nivel y obten mas promociones</p>
                </div>
                <div className="disponible ">

                    <h5  >Prómociones disponibles</h5>
                    <p >Limite de una por pedido</p>

                </div>
                <div className="cuadroPromociones">
                    <p className="pr3">Beneficio Uber-verde</p>

                    <p className="pr1">Entrega sin costo de envio. Se aplican condiciones</p>
                    <p className="pr2">Vence diciembre 2019</p>


                </div>
                <div className="cuadroPromociones2">
                    <p className="pr3">Beneficio Uber-verde</p>

                    <p className="pr1">10% de descuento en tu proxima cuenta</p>
                    <p className="pr2">Vence diciembre 2019</p>


                </div>
                
                <div className="cuadroPromociones2">
                    <p className="pr3">Beneficio Uber-verde</p>

                    <p className="pr1">10% de descuento en tu proxima cuenta</p>
                    <p className="pr2">Vence diciembre 2019</p>


                </div>




            </div>
        )
    }
}
export default Promociones