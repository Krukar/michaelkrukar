'use strict';
/* ============
Menu.jsx
Primary Navigation of Site
============ */
// Third Party Libraries
import { TweenMax } from 'gsap';

// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends Component{
  constructor(props) {
    super(props);

    this.state = {
      menu: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    TweenMax.set(this.refs.nav, {yPercent: -100, y: 48});
  }

  toggle(){
    TweenMax.to(this.refs.nav, 0.25, { yPercent: this.state.menu ? -100 : 0, y: this.state.menu ? 48 : 0, ease: Power1.easeOut,
      onComplete: () => {
        this.setState({
          menu: !this.state.menu
        });
      }
    });

    TweenMax.to(this.refs.blur, 0.125, {attr:{stdDeviation: '0,5'}, repeat: 1, yoyo: true});
  }

  render() {
    return (
      <nav className="nav" ref="nav">
        <svg className="filter">
          <defs>
            <filter id="blurNav">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0,0" ref="blur"/>
            </filter>
          </defs>
        </svg>
        <Link className="link" to="/">Krukar</Link>
        <a className="link" href="mailto:mail@michaelkrukar.com"><i className="fa fa-envelope" aria-hidden="true"></i><span className="text">Mail@michaelkrukar.com</span></a>
        <a className="link" href="https://ca.linkedin.com/in/krukar" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i><span className="text">Linkedin</span></a>
        <a className="link" href="https://github.com/Krukar" target="_blank"><i className="fa fa-github" aria-hidden="true"></i><span className="text">Github</span></a>
        <a className="link" href="https://www.youtube.com/user/mikekrukar" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i><span className="text">Youtube</span></a>
        <a className="link" href="https://www.flickr.com/photos/michaelkrukar/" target="_blank"><i className="fa fa-flickr" aria-hidden="true"></i><span className="text">Flickr</span></a>
        <a className="link" href="https://www.facebook.com/Krukar" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i><span className="text">Facebook</span></a>
        <a className="link" href="https://www.instagram.com/michaelkrukar/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i><span className="text">Instagram</span></a>
        <a className="link" href="https://twitter.com/MichaelKrukar" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i><span className="text">Twitter</span></a>
        <a className="link menu" onClick={this.toggle}>Menu</a>
      </nav>
    );
  }
}

export default Nav;
