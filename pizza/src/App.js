import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';

import PizzaBase from './components/PizzaBase';
import PizzaSauce from './components/PizzaSauce';
import PizzaTop from './components/PizzaTop';
import PizzaCosts from './components/PizzaCosts';

class App extends Component {

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Pizza
            </Typography>
          </Toolbar>
          <CssBaseline />
        </AppBar>
        <PizzaBase />
        <PizzaSauce />
        <PizzaTop />
        <PizzaCosts />
      </div>
    );
  }
}

export default App;