import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toppingChoice } from '../actions/toppingchoice'
import { pizzatoppings } from '../data/options'

class PizzaTopping extends Component {
  render() {
    return (
      <div>
        <h1>Choose your toppings (max. 3)</h1>
        { pizzatoppings.map((pizzatopping) => {
          return <p key={pizzatopping.id}>
            <input type="checkbox" name="topping" onClick={() => this.props.toppingChoice(pizzatopping)}/>
            <label>{pizzatopping.name} &euro; {pizzatopping.price}</label>
          </p>
        })
        }
      </div>
    )
  }
}

export default connect(null, { toppingChoice })(PizzaTopping)
