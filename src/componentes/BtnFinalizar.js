import React,{Component} from 'react'
import './estilos/BtnFinalizar.css';
import { Link } from 'react-router-dom';

class BtnFinalizar extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          notes: ["Si reciclas generas menos CO2 y así reduces el efecto invernadero"," Si reciclas vidrio, papel y plástico se ahorran recursos naturales y conservamos mejor nuestros bosques","Reciclando cuidas los suelos, el agua de los ríos y mares!","al reciclar creas mas puestos de trabajo y así mejores  condiciones de vida.","Cada tonelada de papel que se reutiliza representa un ahorro de energía de 4100kwh","Por cada tres litros de aceite reutilisado, se obtienen dos litros de biodiésel, que reduce las emisiones contaminantes en la atmósfera.","Todos los días cada chileno usa y bota 1.5 bolsas plásticas.Eso podemos cambiarlo ahora!","El reciclaje es un proceso para crear nuevos objetos a partir de materiales viejos y usados.","Las bolsas de plástico que se tiran en el océano matan a más de un millón de criaturas marinas al año.","Más del 60% de la basura que acaba en el cubo de basura podría ser reciclado.","Una bolsa de plástico tarda entre 500 y 1.000 años en degradarse.","El reciclaje, reutilización y compostaje crea 6-10 veces más puestos de trabajo que los vertederos e incineradores."],
          selectNotes:null,
          clicked: false,
          modal:false
          
      }}
      
    
      texto = () => {
        this.setState({
            modal:true,
          clicked: true, 
         selectNotes: this.state.notes[Math.floor(Math.random() * 
    this.state.notes.length)]
    
        })
      
     
   
    }
    render() {
        
        return(
            <div className="btnFinalizar">
            <button className="finalizarCompra" data-toggle="modal" data-target="#exampleModal" onClick={this.texto}>Confirmar pedido:Con entrega</button>
           
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Generemos un cambio</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      {this.state.clicked ,this.state.selectNotes}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn" data-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>
</div>
         

        )
    }


}
export default BtnFinalizar