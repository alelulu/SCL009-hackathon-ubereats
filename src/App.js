import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navegacion from './componentes/navegacion';
import Inicio from './paginas/inicio';
import Bienvenida from './paginas/bienvenida';
import Perfil from './paginas/perfil-verde';
import Restaurantes from './paginas/restaurantes';
import Beneficios from './paginas/beneficios';
import Finalizar from './paginas/finalizarCompra'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={() => {return <Inicio/>}}/>
        <Route path='/inicio' component={() => {return <Inicio/>}}/>
        <Route path='/bienvenida' component={() => {return <Bienvenida/>}}/>
        <Route path='/perfil' component={() => {return <Perfil/>}}/>
        <Route path='/finalizar' component={() => {return <Finalizar/>}}/>
        <Route path='/restaurantes' component={() => {return <Restaurantes/>}}/>
        <Route path='/beneficios' component={() => {return <Beneficios/>}}/>
      </Switch>
      <Navegacion/>
    </div>
  );
}

export default App;
