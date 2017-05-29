'use strict';
/* ============
Grid.jsx
Collection of portolio pieces
============ */
// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Actions
import * as portfolio from 'actions/portfolio.jsx';

// Components
import Details from 'components/Details.jsx';

class Grid extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: undefined
    };

    this.animate = this.animate.bind(this);
    this.details = this.details.bind(this);
  }

  componentWillMount(){
    portfolio.get().then(portfolio =>{
      this.setState({
        data: portfolio
      });
    });
  }

  animate(height){
    let h = height + window.pageYOffset
    let blur = h / 100;
    TweenMax.to(this.refs.blur, 0.125, {attr:{stdDeviation: '0,' + blur}, repeat: 1, yoyo: true});
    TweenMax.to(this.refs.grid, 0.25, {y: h, ease: Power1.easeOut, onComplete: ()=>{
      TweenMax.set(this.refs.grid, {y: height})
    }});
  }

  details(props){
    if(!this.state.data){
      return null;
    }

    return (
      <Details data={this.state.data[props.match.params.key]} animate={this.animate}></Details>
    )
  }

  render() {
    let grid = portfolio.generate(this.state.data);

    return (
      <div className="wrapper">
        <svg className="filter">
          <defs>
            <filter id="blurGrid">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0,0" ref="blur"/>
            </filter>
          </defs>
        </svg>
        <Route path="/:key" component={this.details}/>
        <div className="grid" ref="grid">
          {grid}
        </div>
      </div>
    );
  }
}

export default Grid;
