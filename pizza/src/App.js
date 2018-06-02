import React, { Component } from 'react';
import './App.css';
import PizzaBase from './components/PizzaBase';
import PizzaSauce from './components/PizzaSauce';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaBase />
        <PizzaSauce />
      </div>
    );
  }
}

export default App;
