import React from 'react';
import './estilos/perfil-usuario.css';
import user from '../imagenes/usuarios/usuario2.png';

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
                        <i class="fas fa-credit-card"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Pago</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i class="fas fa-life-ring"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Ayuda</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i class="fas fa-tag"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Promociones</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i class="fas fa-suitcase"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Haz entregas con la app de Uber</p>
                    </div>
                </div>

                <div className="usuario-linetwo">
                    <div className="usuario-heart">
                        <i class="fas fa-suitcase"></i>
                    </div>
                    <div className="usuario-fav">
                        <p>Haz entregas con la app de Uber</p>
                    </div>
                </div>

            </section>
        )
    }
}
    
export default Usuario;