import React from 'react';
import data from '../data/restaurantes.json'
import './estilos/restaurantes.css';

class Restaurantes extends React.Component{
  
//   constructor(props){
//     super(props)
//   }

    render(){
       
        return (
             data.Restaurante.map(element=>
                <div className="restaurant-card">
                    
                    <div className="restaurant-img">
                        <img src={element.photo} alt="imágenes de restaurantes"/>
                    </div>

                    <div className="restaurant-info">

                        <div className="restaurant-name">
                            {element.name}
                        </div>

                        <div className="restaurant-type">
                            $<i className="fas fa-circle"></i>{element.type}
                        </div>
                    
                        <div className="restaurant-number">
                            <div className="restaurant-time">
                                {element.time}
                            </div>

                            <div className="restaurant-points">
                                {element.points}<i className="fas fa-star"></i>{element.comments}
                            </div>
                        </div>

                    </div>    
                </div>
            )
        )
    }
}
    
export default Restaurantes;