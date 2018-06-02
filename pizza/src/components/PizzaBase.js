import React, {Component} from 'react'
import {connect} from 'react-redux'
import { pizzaBases } from '../data/options'
import { baseChoice } from '../actions/basechoice.js'

class PizzaBase extends Component {

  // createAd = (ad) => {
  //   this.props.createAd(ad)
  // }
  
  // componentWillMount() {
  //   this.props.fetchAllAds()
  // }
  
  render() {
    return (
      <div>
        <h1>Choose your base</h1>
        { pizzaBases.map(pizzabase => {
          return <p key={pizzabase.id}>
            <input type="radio" name="name" onClick={() => this.props.baseChoice(pizzabase)}/>
            <label>Name: {pizzabase.name} Size: {pizzabase.size} Price: {pizzabase.price}</label>
          </p>
        }) 
        }
      </div>
    )
  }
}
  
export default connect(null, { baseChoice })(PizzaBase)