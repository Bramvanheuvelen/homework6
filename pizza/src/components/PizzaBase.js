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
        <table>
          { pizzaBases.map(pizzabase => (<tr key={pizzabase.id}>
            <input type="radio" name="name" onClick={() => this.props.baseChoice(pizzabase)}/>
            <td>Name: {pizzabase.name} Size: {pizzabase.size} Price: {pizzabase.price}</td>
          </tr>)) }
        </table>
      </div>
    )
  }
}
  
export default connect(null, { baseChoice })(PizzaBase)

{/* <FormGroup>
      <Radio onClick={() => this.props.baseChoice(pizzabase.id[1])} inline>
        1
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        2
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        3
      </Radio>
    </FormGroup> */}