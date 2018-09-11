import React, { Component } from 'react';
import Mcloud from '../../assets/images/gassymcloud.png'
import CowHunter from '../../assets/images/cowhunter.png'
import Tikki from '../../assets/images/tikki.png'
import Fable from '../../assets/images/fable.png'

import './styles.scss';

class Portfolio extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div className="images">
        <div class="container">
          <img src={Mcloud} alt="Gassy Mcloud" class="image"/>
          <div class="overlay">
            <div class="header">Gassy Mcloud</div>
            <div className="text">Gassy Mcloud was my first mobile project made in C++ using Cocos2D and Box2D.</div>
          </div>
        </div>
        <div class="container">
          <img className="image" alt="Mount Tikki" src={Tikki}/>
          <div class="overlay">
          <a href="https://globalgamejam.org/2016/games/mount-tiki">
            <div className="header">Mount Tikki</div>
            <div className="text">This is a test</div>
          </a>
          </div>
        </div>
        <div class="container">
          <a><img className="image" alt="Fable Of Pickle" src={Fable}/></a>
          <div class="overlay">
            <div className="header">Fable of Pickle</div>
            <div className="text">This is a test</div>
          </div>
        </div>
        <div class="container">
          <a><img className="image" alt="Cow Hunter" src={CowHunter}/></a>
          <div class="overlay">
            <div className="header">Cow Hunter</div>
            <div className="text">Cow Hunter was my first game jam I participated in. The game had a grid based system trying to emulate an old school gameboy game.
            This game was made in Unity using C#.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;