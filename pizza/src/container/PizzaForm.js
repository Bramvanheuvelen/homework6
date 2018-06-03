import React, { Component } from 'react'
import PizzaBase from '../components/PizzaBase';
import PizzaSauce from '../components/PizzaSauce';
import PizzaTop from '../components/PizzaTop';
import PizzaCosts from '../components/PizzaCosts';


class Pizzaform extends Component {
  render () {
    return (
      <div>
        <PizzaBase />
        <PizzaSauce />
        <PizzaTop />
        <PizzaCosts />
      </div>
    )
  }
}

export default Pizzaform
