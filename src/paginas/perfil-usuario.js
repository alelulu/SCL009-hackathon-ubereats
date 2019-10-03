import React from 'react';
import './estilos/perfil-usuario.css';
import user from '../imagenes/usuarios/usuario2.png';
import hamburger from '../imagenes/iconos/hamburguesa.png';

class Usuario extends React.Component{
    render(){
        return (
            <section className="usuario-seccion">
                
                <div className="usuario-perfil">
                    <div className="usuario-name">
                        <p>Usuario</p>
                    </div>
                    <div className="usuario-photo">
                        <img src={user} alt="img de usuario"/>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i className="fas fa-heart"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Tus favoritos</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i className="fas fa-credit-card"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Pago</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i className="fas fa-life-ring"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Ayuda</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i className="fas fa-tag"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Promociones</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Beneficios</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i className="fas fa-suitcase"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Haz entregas con la app de Uber</p>
                    </div>
                </div>

                <div className="usuario-config">
                    <div className="usuario-heart">
                        <i className="fas fa-cog"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Configuración</p>
                    </div>
                </div>

                <div className="usuario-hamburger">
                    <div className="usuario-heart">
                        <img src={hamburger} alt="icono de descuentos"/>
                    </div>
                    <div className="usuario-fav">
                        <p>Obtén CLP5,000 de descuentos en tu pedido</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-fav">
                        <p>Quiénes somos</p>
                    </div>
                </div>

            </section>
        )
    }
}
    
export default Usuario;