'use strict';
/* ============
Grid.jsx
Collection of portolio pieces
============ */
// Third Party Libraries
import { TweenMax } from 'gsap';

// React
import React, { Component } from 'react';

// Actions
import * as portfolio from 'actions/portfolio.jsx';

class Grid extends Component{
  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
  }

  shouldComponentUpdate(nextProps){
    if(this.props === nextProps){
      return false;
    }

    return true;
  }

  componentDidUpdate(){
    let velocity = Math.abs((this.state.offset - this.props.offset) / 100);
    TweenMax.to(this.refs.grid, 0.25, {y: this.props.offset, ease: Power1.easeOut});
    TweenMax.to(this.refs.blur, 0.125, {attr:{stdDeviation: '0,' + velocity}, repeat: 1, yoyo: true});

    this.setState({
      offset: this.props.offset
    })
  }

  render() {
    let grid = portfolio.generate(this.props.portfolio);

    return (
      <div className="grid" ref="grid">
        {grid}
        <svg className="filter">
          <defs>
            <filter id="blurGrid">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0,0" ref="blur"/>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

export default Grid;
