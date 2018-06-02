import React, {Component} from 'react'
import {connect} from 'react-redux'
import { pizzaSauces } from '../data/options'
import { sauceChoice } from '../actions/saucechoice.js'

class PizzaSauce extends Component {

  // createAd = (ad) => {
  //   this.props.createAd(ad)
  // }
  
  // componentWillMount() {
  //   this.props.fetchAllAds()
  // }
  
  render() {
    return (
      <div>
        <h1>Choose your sauce</h1>
        <table>
          { pizzaSauces.map(pizzasauce => (<tr key={pizzasauce.id}>
            <input type="radio" name="name1" onClick={() => this.props.sauceChoice(pizzasauce)}/>
            <td>Name: {pizzasauce.name} Size: {pizzasauce.size} Price: {pizzasauce.price}</td>
          </tr>)) }
        </table>
      </div>
    )
  }
}
  
export default connect(null, { sauceChoice })(PizzaSauce)