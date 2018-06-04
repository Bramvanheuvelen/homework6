import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseTopping, deleteTopping } from '../actions/index'
import store from '../store'

class PizzaTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

handleChange = (e) => {
  if (e.target.checked) {
    store.dispatch(chooseTopping(e.target.value))
  } else {
    store.dispatch(deleteTopping(e.target.value));
  }
}


render() {
  return (
    <form id="toppingform">
      <h1>Choose your 1, 2 or maximum 3 toppings</h1>
      <input type="checkbox" value="Pineapple" onChange={this.handleChange} />
      <label for="Pineapple">Pineapple</label>

      <input type="checkbox" value="Corn" onChange={this.handleChange} />
      <label for="Corn">Corn</label>

      <input type="checkbox" value="Green olives" onChange={this.handleChange} />
      <label for="Green Olives">Green olives</label>

      <input type="checkbox" value="Red onion" onChange={this.handleChange} />
      <label for="Red Onion">Red onion</label>

      <input type="checkbox" value="Spinach" onChange={this.handleChange} />
      <label for="Spinach">Spinach</label>

      <input type="checkbox" value="Cherry tomatoes" onChange={this.handleChange} />
      <label for="Cherry Tomatoes">Cherry tomatoes</label>

      <input type="checkbox" value="Chicken" onChange={this.handleChange} />
      <label for="Chicken">chicken</label>
    </form>
  )
}
}

export default connect(null, { chooseTopping, deleteTopping })(PizzaTop)