'use strict';
/* ============
Details.jsx
Detail about specific portfolio piece
============ */
// Third Party Libraries
import { TweenMax } from 'gsap';

// React
import React, { Component } from 'react';

// Actions
import * as utilities from 'actions/utilities.jsx';

class Details extends Component{
  constructor(props){
    super(props);

    this.imageLoad = this.imageLoad.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', utilities.debounce(() => {
      this.props.setOffset(this.refs.details.offsetHeight);
    }, 250));
  }

  // Details hidden
  componentWillUnmount(){
    this.props.setOffset(0);
  }

  imageLoad(){
    this.props.setOffset(this.refs.details.offsetHeight);
  }

  render() {
    let paragraphs = [];

    for(let [index, paragraph] of this.props.data.description.entries()){
      paragraphs.push(<p key={index}>{paragraph}</p>);
    }

    return (
      <div className="details" ref="details">
        <div className="image">
          <img className="img" src={'http://sperg.life/michaelkrukar/' + this.props.data.image} onLoad={this.imageLoad}/>
        </div>
        <div className="info">
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.category}</h2>
          {paragraphs}
          {this.props.data.link &&
            <a className="button" href={this.props.data.link} target="_blank">Click To View</a>
          }
        </div>
      </div>
    );
  }
}

export default Details;
