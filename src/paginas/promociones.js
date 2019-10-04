import React, { Component } from 'react';
import './estilos/promociones.css'
import brote from '../imagenes/emblemas/brote.png'
import { Link } from 'react-router-dom';

class Promociones extends Component {
    render() {
        return (
            <div className="container promo">
                <div className="titlePromocion row">
                    <p className="col titulo">
                        <Link to="/perfil"><i class="fas fa-times"></i></Link>
                        Promociones
                    </p>
                    <p className="agregar col">Agregar promoción</p>
                </div>
                
                <div className="verdeS row">
                    <p className="sube col-12">
                        <img className="broteIm" src={brote}></img>
                        Sube de nivel y obtén más promociones
                    </p>
                </div>

                <div className="disponible ">
                    <h5 >Promociones disponibles</h5>
                    <p >Límite de una por pedido</p>
                </div>

                <div className="cuadroPromociones">
                    <div className="promociones-space">
                        <p className="pr3">Beneficio Uber-verde</p>
                        <p className="pr1">Entrega sin costo de envío. Se aplican condiciones</p>
                        <p className="pr2">Vence diciembre 2019</p>
                    </div>  
                </div>

                <div className="cuadroPromociones2">
                    <div className="promociones-space">
                        <p className="pr3">Beneficio Uber-verde</p>
                        <p className="pr1">10% de descuento en tu próxima cuenta</p>
                        <p className="pr2 vence">Vence diciembre 2019</p>
                    </div>  
                </div>
                
                <div className="cuadroPromociones2">
                    <div className="promociones-space">
                        <p className="pr3">Beneficio Uber-verde</p>
                        <p className="pr1">10% de descuento en tu próxima cuenta</p>
                        <p className="pr2 vence">Vence diciembre 2019</p>
                    </div>   
                </div>
            </div>
        )
    }
}
export default Promociones