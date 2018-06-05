import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { chooseBase } from '../actions/index'
import store from '../store'

import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';

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
        <div>
          <Paper elevation={4}>
            <FormControl component="fieldset" required >
              <FormLabel component="legend">Choose your base</FormLabel>
                <FormControlLabel value="NY25" control={<Radio />} label="NY25! size: 25cm price: 8.99" checked={this.state.value === 'NY25'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="NY30" control={<Radio />} label="NY30! size: 30cm price: 11.49" checked={this.state.value === 'NY30'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="NY35" control={<Radio />} label="NY35! size: 35cm price: 13.49" checked={this.state.value === 'NY35'} 
                  onChange={this.handleChange}/>
                <FormControlLabel value="NY20" control={<Radio />} label="NY20! size: 20cm price: 6.45" checked={this.state.value === 'NY20'} 
                  onChange={this.handleChange}/>
            </FormControl>
          </Paper>
        </div>
      );
    }
}

export default connect(null, { chooseBase })(PizzaBase)