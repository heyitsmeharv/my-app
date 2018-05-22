import React, { Component } from 'react';
import Mcloud from '../../assets/images/mcloud.png'
import Cowhhunter from '../../assets/images/cowhunter.png'
import Tikki from '../../assets/images/tikki.png'
import Fable from '../../assets/images/fable.png'

import './styles.scss';

class GameDev extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div className="images">
        <div><img className="mcloud" alt="gassy mcloud" src={Mcloud}/></div>
        <div><img className="tikki" alt="mount tikki" src={Tikki}/></div>
        <div><img className="fable" alt="fable of pickle" src={Fable}/></div>
        <div><img className="cow" alt="cowhunter" src={Cowhhunter}/></div>
      </div>
    );
  }
}

export default GameDev;