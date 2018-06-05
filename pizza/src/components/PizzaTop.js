import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseTopping, deleteTopping } from '../actions/index'

import Paper from '@material-ui/core/Paper';

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
}
    /* <FormControl component="fieldset" required >
    <FormLabel component="legend">Choose your 1, 2 or maximum 3 toppings! Price: 0.5 each</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Pineapple"
            />
          }
          label="Pineapple"
        />
             <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Corn"
            />
          }
          label="Corn"
        />
             <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Green Olives"
            />
          }
          label="Green Olives"
        />
             <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Red Union"
            />
          }
          label="Red Union"
        />
               <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Cherry Tomatoes"
            />
          }
          label="Cherry Tomatoes"
        />
               <FormControlLabel
          control={
            <Checkbox
            checked={this.state.toppingCount}
            onChange={this.handleChange}
            value="Spinach"
          />
          }
          label="Spinach"
        />
               <FormControlLabel
          control={
            <Checkbox
              checked={this.state.toppingCount}
              onChange={this.handleChange}
              value="Chicken"
            />
          }
          label="Chicken"
        />
            </FormControl> */}

function mapStateToProps(state) {
  return {
    toppings: state.toppings
  }
}

export default connect(mapStateToProps, { chooseTopping, deleteTopping })(PizzaTop)