import React, { Component } from 'react'
import PizzaBase from '../components/PizzaBase';
import PizzaSauce from '../components/PizzaSauce';
import PizzaTop from '../components/PizzaTop';


class Pizzaform extends Component {
  render () {
    return (
      <div>
        <PizzaBase />
        <PizzaSauce />
        <PizzaTop />
      </div>
    )
  }
}

export default Pizzaform
