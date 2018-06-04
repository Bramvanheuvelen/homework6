import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseSauce } from '../actions/index'
import store from '../store'

class PizzaSauce extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    store.dispatch(chooseSauce({ value: e.target.value }))
  }

    handleSubmit = (e) => {
      e.preventDefault();
    }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Choose your sauce</h1>
          <label>
            <input type="radio" value="White Sauce" 
              checked={this.state.value === "White Sauce"} 
              onChange={this.handleChange} />
        White sauce
          </label>
          <br></br>
          <label>
            <input type="radio" value="Red Sauce" 
              checked={this.state.value === 'Red Sauce'} 
              onChange={this.handleChange} />
        Red sauce
          </label>
          <br></br>
          <label>
            <input type="radio" value="Double Red Sauce" 
              checked={this.state.value === "Double Red Sauce"} 
              onChange={this.handleChange} />
        Double Red sauce
          </label>
          <br></br>
          <label>
            <input type="radio" value="Mix it up!" 
              checked={this.state.value === 'Mix it up!'} 
              onChange={this.handleChange} />
        Mix it up!
          </label>
        </form>
      );
    }
}

export default connect(null, { chooseSauce })(PizzaSauce)