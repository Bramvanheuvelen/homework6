import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseBase } from '../actions/index'
import store from '../store'

class PizzaBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    store.dispatch(chooseBase({ value: e.target.value }))
  }



    render() {
      return (
        <form>
          <h1>Choose your base</h1>
          <label>
            <input type="radio" value="NY25" 
              checked={this.state.value === 'NY25'} 
              onChange={this.handleChange} />
          NY25! size: 25cm price: 8.99
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY30" 
              checked={this.state.value === 'NY30'} 
              onChange={this.handleChange} />
          NY30! size: 30cm price: 11.49
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY35" 
              checked={this.state.value === 'NY35'} 
              onChange={this.handleChange} />
          NY35! size: 35cm price: 13.49
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY20" 
              checked={this.state.value === 'NY20'} 
              onChange={this.handleChange} />
          NY20! size: 20cm price: 6.45
          </label>
        </form>
      );
    }

}

export default connect(null, { chooseBase })(PizzaBase)