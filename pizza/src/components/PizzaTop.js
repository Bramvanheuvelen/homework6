import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseTopping, deleteTopping } from '../actions/index'
import store from '../store'

class PizzaTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    this.refs.form.reset();}

handleChange = (e) => {
  if (e.target.checked) {
    store.dispatch(chooseTopping(e.target.value))
  } else {
    store.dispatch(deleteTopping(e.target.value));
  }
}

render() {
  return (
    <form id="toppingform" onSubmit={this.handleSubmit}>
      <h1>Choose your 1, 2 or maximum 3 toppings! Price: 0.5 each</h1>
      <input type="checkbox" value="Pineapple" onChange={this.handleChange} disabled={this.props.toppings.length === 3}/>
      <label for="Pineapple">Pineapple</label>

      <input type="checkbox" value="Corn" onChange={this.handleChange} disabled={this.props.toppings.length === 3}/>
      <label for="Corn">Corn</label>

      <input type="checkbox" value="Green olives" onChange={this.handleChange} disabled={this.props.toppings.length === 3} />
      <label for="Green Olives">Green olives</label>

      <input type="checkbox" value="Red onion" onChange={this.handleChange} disabled={this.props.toppings.length === 3}/>
      <label for="Red Onion">Red onion</label>

      <input type="checkbox" value="Spinach" onChange={this.handleChange} disabled={this.props.toppings.length === 3}/>
      <label for="Spinach">Spinach</label>

      <input type="checkbox" value="Cherry tomatoes" onChange={this.handleChange} disabled={this.props.toppings.length === 3} />
      <label for="Cherry Tomatoes">Cherry tomatoes</label>

      <input type="checkbox" value="Chicken" onChange={this.handleChange} disabled={this.props.toppings.length === 3}/>
      <label for="Chicken">chicken</label>
      <input type="submit" value="Reset Choices"/>
    </form>
  )
}
}

function mapStateToProps(state) {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps, { chooseTopping, deleteTopping })(PizzaTop)