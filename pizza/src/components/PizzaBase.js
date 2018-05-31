import React from 'react'
import pizzabase from '../data/choises'

class PizzaBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NY25: true,
      NY30: true,
      NY35: true,
      NY20: true,
    };
  
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
      <form>
        <label>
            Choose your base:
          <input
            name="NY25"
            type="checkbox"
            checked={this.state.NY25}
            onChange={this.handleInputChange} />
          <input
            name="NY30"
            type="checkbox"
            checked={this.state.NY30}
            onChange={this.handleInputChange} />
          <input
            name="NY35"
            type="checkbox"
            checked={this.state.NY35}
            onChange={this.handleInputChange} />
          <input
            name="NY20"
            type="checkbox"
            checked={this.state.NY20}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
  
export default PizzaBase