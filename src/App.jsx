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
import Details from 'components/Details.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      portfolio: undefined,
      offset: 0
    };

    this.details = this.details.bind(this);
    this.setOffset = this.setOffset.bind(this);
  }

  componentWillMount(){
    portfolio.get().then(portfolio =>{
      this.setState({
        portfolio: portfolio
      });
    });
  }

  details(props){
    if(!this.state.portfolio){
      return null;
    }

    return (
      <Details data={this.state.portfolio[props.match.params.key]} setOffset={this.setOffset}></Details>
    )
  }

  setOffset(height){
    window.scrollTo(0,0);
    this.setState({
      offset: height
    });
  }

  render() {
    return (
      <Router>
        <main className="main">
          <Nav></Nav>
          <Route path="/:key" component={this.details}/>
          <Grid portfolio={this.state.portfolio} offset={this.state.offset}></Grid>
        </main>
      </Router>
    );
  }
}

export default App;
