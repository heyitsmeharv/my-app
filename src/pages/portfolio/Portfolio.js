import React, { Component } from 'react';
import Mcloud from '../../assets/images/gassy/gassymcloud.png'
import CowHunter from '../../assets/images/cowhunter/cowhunter.png'
import Tikki from '../../assets/images/tikki/tikki.png'
import Fable from '../../assets/images/fable/fable.png'
import BodyCount from '../../assets/images/bodycount/bodycount.png'
import DirectX from '../../assets/images/directX/directx.png'
import Thomas from '../../assets/images/thomas/game.png'
import Zombie from '../../assets/images/zombie/zombie.gif';

import './styles.scss';

class Portfolio extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div>
        <div className="images">
          <div className="row-one">
            <div class="container">
              <img src={Mcloud} alt="Gassy Mcloud" class="image"/>
              <div class="overlay">
                <div class="header">Gassy Mcloud</div>
                <div className="text">Gassy Mcloud is a simple 'Flappy Bird' clone which was my first mobile project made in C++ using Cocos2D and Box2D.</div>
              </div>
            </div>
            <div class="container">
              <img className="image" alt="Mount Tikki" src={Tikki}/>
              <div class="overlay">
                <div className="header">Mount Tikki</div>
                <div className="text-long">Mount Tiki was my group submission for the Southampton Global Game Jam  which is a fast paced, local co-op, free-for-all
                brawler made in Unity using C#. In this game you have to try and capture and sacrifice the pig whilst avoiding other players.
                Feel free to download the game <a href="https://globalgamejam.org/2016/games/mount-tiki">here.</a></div>
              </div>
            </div>
            <div class="container">
              <a><img className="image" alt="Fable Of Pickle" src={Fable}/></a>
              <div class="overlay">
                <div className="header">Fable of Pickle</div>
                <div className="text-long">The Fable of Pickle is a dungeon crawler made in C++ and SDL 2.0. These are some of the core game mechanics this project covered:
                  Finite State Machines,
                  A* Pathfinding,
                  Reading and Writing to text files (Level Management),
                  Game Loop and Timers,
                  Collisions,
                  Audio.
                </div>
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
        </div>
        <div className="images">
        <div className="row-two">
        <div class="container">
            <a><img className="image" alt=" Zombie" src={Zombie}/></a>
            <div class="overlay">
              <div className="header">Super Zombie Smash</div>
              <div className="text">This is an ongoing joint project with a friend in C++.
              </div>
            </div>
          </div>
        <div class="container">
            <img src={BodyCount} alt="Body Count" class="image"/>
            <div class="overlay">
              <div class="header">Body Count</div>
              <div className="text">Body Count was a side project I made in Unity C#. This was solely to explore and to experiment with the mobile phone’s accelerometer and Unity’s networking capabilities.</div>
            </div>
          </div>
          <div class="container">
            <img className="image" alt="Game On Mars" src={DirectX}/>
            <div class="overlay">
              <div className="header">Game On Mars</div>
              <div className="text-longer">Game On Mars is a 3D survival game written from scratch in C++ and DirectX 11. This was my first real attempt at making a 3D game where I managed
                to implement:
                Cube Maps,
                Texture Mapping,
                Scene Management (Collision Detection),
                Object to Object Collision,
                Camera to Object Collision,
                Orientating Models,
                Lighting and
                AABB and Sphere Collision.
              </div>
            </div>
          </div>
          <div class="container">
            <a><img className="image" alt="Gamified Questionnaire" src={Thomas}/></a>
            <div class="overlay">
              <div className="header">Gamified Questionnaire</div>
              <div className="text-longest">This game was for Thomas Internation who specialise in Psychometric Tests, where the objective was to measure a person’s personality
                based on the choices the player makes throughout the game. The idea was to informally test the player by taking them through a fantasy role playing game,
                which will along the way the player will be asked multiple choice questions and mini-games.
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;