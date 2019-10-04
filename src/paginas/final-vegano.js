import React, { Component } from 'react';
import './estilos/finalizarCompra.css';
import promo from '../imagenes/cesarsalad.jpg'
import btn from '../imagenes/button.png'
import suma from '../imagenes/suma.png'
import resta from '../imagenes/resta.png'
import BtnFinalizar from '../componentes/BtnFinalizar';

class Endvegano extends Component {


  render() {
    return (
        <section className="finalizar-seccion">
            
            <div className="finalizar-img">
                <img src={promo} alt="ensalada cesar" className="imagen-ensalada"/>
            </div>

            <div className="finalizar-text">
                <div className="finalizar-promo">
                    <p>Ensalada Cesar</p>
                </div>

                <div className="finalizar-description">
                    <p>
                        Platillo frío elaborado con lechuga y pan tostado,
                        aderezado con una mezcla de ajo, aceite de oliva,
                        anchoas y queso vegano.
                    </p>
                </div>
            </div>

            <div className="finalizar-selec">
                <div className="finalizar-drink">
                    <p>Elige tu jugo favorito</p>
                    <p>Obligatorio</p>
                </div>
                <div className="finalizar-button">
                    <div className="finalizar-arrow">
                        <img src={btn} alt="boton del selec"/>
                    </div>
                </div>
            </div>

            <form className="finalizar-form">    
                <div className="finalizar-radio">
                    <label>
                        <input type="radio" value="option1"/>
                        Naranja
                    </label>
                </div>

                <div className="finalizar-radio">
                    <label>
                        <input type="radio" value="option2" />
                        Chirimoya alegre
                    </label>
                </div>

                <div className="finalizar-radio">
                    <label>
                        <input type="radio" value="option3" />
                        Mango
                    </label>
                    </div>
            </form>

            <div className="finalizar-selec">
                <div className="finalizar-drink">
                    <p>¿Necesitas elementos desechables con tu pedido?(Servilletas o cubiertos de plásticos)</p>
                    <p>(Elige hasta 1)</p>
                </div>
                <div className="finalizar-button">
                    <div className="finalizar-arrow">
                        <img src={btn} alt="boton del selec"/>
                    </div>
                </div>
            </div>

            <form className="finalizar-form"> 
                <label>
                    <input type="checkbox" value="option1"/>
                    No, quiero ayudar a cuidar el planeta.
                </label>
            
                <label>
                    <input type="checkbox" value="option2"/>
                    Sí, esta vez quiero elementos desechables.
                </label>
            </form>

            <div className="finalizar-selec">
                <div className="finalizar-drink">
                    <p>Instrucciones especiales</p>
                </div>
            </div>

            <div className="finalizar-radio">
                <label>
                    Agregar nota (salsa adicional, sin cebolla, etc.)
                </label>
            </div>

            <div className="finalizar-operation">
                <div className="finalizar-resta">
                    <img src={resta} alt="boton restar"/>
                </div>

                <div className="finalizar-num">
                    1
                </div>

                <div className="finalizar-suma">
                    <img src={suma} alt="boton sumar"/>
                </div>
            </div>

            <div className="btnFinalizar">
                <BtnFinalizar/>
            </div>

        </section>
    )   
  }
}
export default Endvegano;
