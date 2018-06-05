import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseSauce } from '../actions/index'
import store from '../store'

import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

class PizzaSauce extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    store.dispatch(chooseSauce({ value: e.target.value }))
  }

    render() {
      return (
        <div>
          <Paper elevation={4}>
            <FormControl component="fieldset" required >
              <FormLabel component="legend">Choose your sauce</FormLabel>
                <FormControlLabel value="White Sauce" control={<Radio />} label="White sauce, price: 0.00" checked={this.state.value === 'White Sauce'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="Red Sauce" control={<Radio />} label="Red sauce, price: 0.00" checked={this.state.value === 'Red Sauce'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="Double Red Sauce" control={<Radio />} label="Double red sauce, price: 1.00" checked={this.state.value === 'Double Red Sauce'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="Mix it up!" control={<Radio />} label="Mix it up!, price: 1.50" checked={this.state.value === 'Mix it up!'} 
                  onChange={this.handleChange}/>
            </FormControl>
          </Paper>
        </div>
      );
    }
}

export default connect(null, { chooseSauce })(PizzaSauce)