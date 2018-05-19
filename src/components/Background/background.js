import React, { Component } from 'react';
import Trianglify from 'trianglify';
import './styles.scss';

class Background extends Component {
  constructor(props) {
    super(); 
    this.state = {}
  }

  render() {
    var pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40});
    
    // document.body.appendChild(pattern.svg());
    return (
      <div alt="background" className="background" style={{backgroundImage: pattern.png()}}>
        {this.props.children}
      </div>
    );
  }
}

export default Background;