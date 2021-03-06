import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseTopping, deleteTopping } from '../actions/index'

import Paper from '@material-ui/core/Paper';

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';

class PizzaTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

toppingCount = 0

    handleChange = (e) => {
        if (e.target.checked && this.toppingCount < 3) {
            ++this.toppingCount
            return this.props.chooseTopping(e.target.value)
        } 
        if (e.target.checked && this.toppingCount === 3) {
            window.alert("Thats enough!")
            return e.target.checked = false
        }
        if (!e.target.checked && this.toppingCount <= 3) {
            --this.toppingCount
            return this.props.deleteTopping(e.target.value)
        }
    }

render() {
  return (
    <Paper elevation={4}>
      <input type="checkbox" value="Pineapple" onChange={this.handleChange}/>
        <label htmlFor="Pineapple">Pineapple</label>

      <input type="checkbox" value="Corn" onChange={this.handleChange}/>
        <label htmlFor="Corn">Corn</label>

      <input type="checkbox" value="Green olives" onChange={this.handleChange}/>
        <label htmlFor="Green Olives">Green olives</label>

      <input type="checkbox" value="Red onion" onChange={this.handleChange} />
        <label htmlFor="Red Onion">Red onion</label>

      <input type="checkbox" value="Spinach" onChange={this.handleChange}/>
        <label htmlFor="Spinach">Spinach</label>

      <input type="checkbox" value="Cherry tomatoes" onChange={this.handleChange} />
        <label htmlFor="Cherry Tomatoes">Cherry tomatoes</label>

      <input type="checkbox" value="Chicken" onChange={this.handleChange}/>
        <label htmlFor="Chicken">chicken</label>
    </Paper>
  )
}}

function mapStateToProps(state) {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps, { chooseTopping, deleteTopping })(PizzaTop)