import React, {Component} from 'react'
import {connect} from 'react-redux'
import { pizzaSauces } from '../data/options'
import { sauceChoice } from '../actions/saucechoice.js'

class PizzaSauce extends Component {
  
  render() {
    return (
      <div>
        <h1>Choose your sauce</h1>
        { pizzaSauces.map(pizzasauce => {
          return <p key={pizzasauce.id}>
            <input type="radio" name="name1" onClick={() => this.props.sauceChoice(pizzasauce)}/>
            <label>Name: {pizzasauce.name} Size: {pizzasauce.size} Price: {pizzasauce.price}</label>
          </p>
        })
        }
      </div>
    )
  }
}
  
export default connect(null, { sauceChoice })(PizzaSauce)