'use strict';
/* ============
Details.jsx
Detail about specific portfolio piece
============ */
// Third Party Libraries
import { TweenMax } from 'gsap';

// React
import React, { Component } from 'react';

class Details extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.animate(this.refs.details.offsetHeight);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.data === nextProps.data){
      window.scrollTo(0,0);
      return false;
    }
    return true;
  }

  componentDidUpdate(){
    this.props.animate(this.refs.details.offsetHeight);
  }

  componentWillUnmount(){
    this.props.animate(0);
  }

  render() {
    let paragraphs = [];

    for(let [index, paragraph] of this.props.data.description.entries()){
      paragraphs.push(<p key={index}>{paragraph}</p>);
    }

    return (
      <div className="details" ref="details">
        <div className="image">
          <img className="img" src={'/img/' + this.props.data.image} />
        </div>
        <div className="info">
          <h1>{this.props.data.title}</h1>
          <h2>{this.props.data.category}</h2>
          {paragraphs}
          <button className="button" href={this.props.data.link} target="_blank">Click To View</button>
        </div>
      </div>
    );
  }
}

export default Details;
