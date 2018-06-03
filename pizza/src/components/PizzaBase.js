import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseBase } from '../actions/index'
import store from '../store'

class PizzaBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    store.dispatch(chooseBase({ value: e.target.value }))
  }

    handleSubmit = (e) => {
      e.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="radio" value="NY25" 
              checked={this.state.selectedOption === 'NY25'} 
              onChange={this.handleChange} />
          NY25! size: 25cm price: 8.99
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY30" 
              checked={this.state.selectedOption === 'NY30'} 
              onChange={this.handleChange} />
          NY30! size: 30cm price: 11.49
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY35" 
              checked={this.state.selectedOption === 'NY35'} 
              onChange={this.handleChange} />
          NY35! size: 35cm price: 13.49
          </label>
          <br></br>
          <label>
            <input type="radio" value="NY20" 
              checked={this.state.selectedOption === 'NY20'} 
              onChange={this.handleChange} />
          NY20! size: 20cm price: 6.45
          </label>
        </form>
      );
    }

}

const mapStateToProps = function (state, props) {
  return {
    bases: state.bases
  }
}

export default connect(mapStateToProps, { chooseBase })(PizzaBase)