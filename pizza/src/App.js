import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
import PizzaSauce from './components/PizzaSauce';
import PizzaTopping from './components/PizzaTopping';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaBase />
        <PizzaSauce />
        <PizzaTopping />
      </div>
    );
  }
}

export default App;
