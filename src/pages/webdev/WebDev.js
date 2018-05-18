import React, { Component } from 'react';
import Trianglify from 'trianglify';
import './styles.scss';

class WebDev extends Component {
  constructor(props) {
    super();
    this.state={}
  }
  background = () => {
    var pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40});
    
    document.body.appendChild(pattern.svg());
  }

  render() {
    return (
      <image src={this.background()} />
    );
  }
}

export default WebDev;