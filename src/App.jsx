'use strict';
/* ============
App.jsx
React app
============ */
// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as portfolio from 'actions/portfolio.jsx';

// Components
import Nav from 'components/Nav.jsx';
import Grid from 'components/Grid.jsx';

class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <main className="main">
          <Nav></Nav>
          <Grid></Grid>
        </main>
      </Router>
    );
  }
}

export default App;
