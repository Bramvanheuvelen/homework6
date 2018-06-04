import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Bases, sauces } from '../options'
import store from '../store'
import { droneTurbo, noTurbo } from '../actions/index'

class PizzaCosts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    if (e.target.checked) {
      store.dispatch(droneTurbo(e.target.value))
    } else {
      store.dispatch(noTurbo(e.target.value));
    }
  }
  
  pizzaPrice() {
    const basePrice = (this.props.bases ? Bases[this.props.bases] : 0)
    const saucePrice = (this.props.sauces.length ? sauces[this.props.sauces] : 0)
    const toppingPrice = (this.props.toppings).length * .5
    return basePrice + saucePrice + toppingPrice
  }
  render() {
    return (
      <div>
        <h1>Price to pay: {this.pizzaPrice()}</h1>
        <form id="turbodrone">
          <input type="checkbox" value="Turbodrone" onChange={this.handleChange} />
          <label for="Turbodrone">Turbodrone Delivery?</label>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bases: state.bases,
    sauces: state.sauces,
    toppings: state.toppings
  }
}

export default connect(mapStateToProps) (PizzaCosts)