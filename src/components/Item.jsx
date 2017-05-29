'use strict';
/* ============
Item.jsx
Portfolio piece
============ */
// Third Party Libraries
import { TweenMax } from 'gsap';

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Item extends Component{
  render() {
    if(!this.props.data){
      return null;
    }

    return (
      <div className="item" onClick={this.handleClick}>
        <Link to={'/' + this.props.data.key} className="link">
          <div className="bg" style={{backgroundImage: 'url(/img/' + this.props.data.image + ')'}}></div>
          <h1>{this.props.data.title}</h1>
          <p>{this.props.data.category}</p>
        </Link>
      </div>
    );
  }
}

export default Item;
