import React, {Component} from 'react'
import {connect} from 'react-redux'
import pizzaBases from '../data/options'
import baseChoice from '../actions/basechoice.js'

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
        <table>
          <tbody>
            { pizzaBases.map(pizzabase => (<tr key={pizzabase.id}>
              <td>{pizzabase.name} {pizzabase.size} {pizzabase.price}</td>
                baseChoice
            </tr>)) }
          </tbody>
        </table>
      </div>
    )
  }
}
  
export default connect(null, { baseChoice })(PizzaBase)