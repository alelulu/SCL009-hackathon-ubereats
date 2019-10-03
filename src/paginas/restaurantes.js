import React from 'react';
import data from '../data/restaurantes.json';
import { Redirect } from 'react-router-dom';
import './estilos/restaurantes.css';

class Restaurantes extends React.Component{
  
    constructor(props){
        super(props);
        this.state= {vegan:false, sushi:false, hamburger:false};
    
        this.getKey = this.getKey.bind(this);
       
    }

    getKey=(id)=>{
        
        if(id===1){
            this.setState({
                vegan:true
            })
        }
        else if(id===2){
            this.setState({
                sushi:true
            })
        }
        else{
            this.setState({
                hamburger:true
            })
        }
    }

    render(){
       
        return (
             data.Restaurante.map(element=>
                <button className="restaurant-card" key={element.id} onClick={()=>this.getKey(element.id)}>
                    
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
                    {this.state.vegan? <Redirect to='/finalizar-vegano' /> : <Redirect to='/restaurantes' />}
                    {this.state.sushi? <Redirect to='/finalizar-sushi' /> : <Redirect to='/restaurantes' />}
                    {this.state.hamburger? <Redirect to='/finalizar-hamburger' /> : <Redirect to='/restaurantes' />}       
                </button>
            )
        )
    }
}
    
export default Restaurantes;