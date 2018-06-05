import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Bases, sauces } from '../options'
import store from '../store'
import { droneTurbo, noTurbo } from '../actions/index'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';

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
    const basePrice = (this.props.bases.length ? Bases[this.props.bases] : 0)
    const saucePrice = (this.props.sauces.length ? sauces[this.props.sauces] : 0)
    const toppingPrice = (this.props.toppings).length * .5
    return basePrice + saucePrice + toppingPrice
  }
  render() {
    return (
      <div>
        <Paper elevation={4}>
          {!this.props.drone && <h1>Price to pay: {this.pizzaPrice()}</h1>}
          {this.props.drone && <h1>Price to pay: {(this.pizzaPrice() * 1.1).toFixed(2)}</h1>}
            <FormControlLabel
              control={
                <Checkbox
                  onChange={this.handleChange}
                  value="Turbodrone"
                />
              }
              label="Turbodrone Delivery? 10% extra"
              />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bases: state.bases,
    sauces: state.sauces,
    toppings: state.toppings,
    drone: state.drone
  }
}

export default connect(mapStateToProps) (PizzaCosts)