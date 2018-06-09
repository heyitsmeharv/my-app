import React, { Component } from 'react';
import Mcloud from '../../assets/images/gassymcloud.png'
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
      <div>
        <div className="images">
          <div class="gallery">
            <a>
              <img className="mcloud" alt="GassyMcloud" src={Mcloud}/>
            </a>
            <div class="desc">Flappy Bird</div>
          </div>
          <div class="gallery">
            <a>
              <img className="tikki" alt="MountTikki" src={Tikki}/>
            </a>
            <div class="desc">Multiplayer Brawler</div>
          </div>
          <div class="gallery">
            <a>
              <img className="fable" alt="FableOfPickle" src={Fable}/>
            </a>
            <div class="desc">2D Topdown Dungeon Crawler</div>
          </div>
          <div class="gallery">
            <a>
              <img className="cow" alt="CowHunter" src={Cowhhunter}/>
            </a>
            <div class="desc">Retro Style Grid Based Game</div>
          </div>
        </div>
        <div className="paragraph">
          <span className="intro">
            Bsc Computer Games (Software Development)
          </span>
          <br></br>
          <span className="experience">
            My experiences include:
          </span>
          <div className="column-wrapper">
            <div className="column-one">
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Advanced Games Programming</span>
              </label>
            <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Game Physics</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Object Orientated Development</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Databases</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Mobile Games Fundamentals</span>
              </label>
              <br></br>
            </div>
          </div>
          <br></br>
            If you have any questions and want to contact me, hit the button below. 
        </div>
      </div>
    );
  }
}

export default GameDev;