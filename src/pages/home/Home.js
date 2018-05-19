import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip/Tooltip';
import * as Icon from '../../assets/icons';
import Me from '../../assets/images/me.jpg';
import './styles.scss';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="social-media-buttons">
          <Button className="social-media-twitter" href="https://twitter.com/HeyItsMeHarv" icon={<Icon.Twitter/>} floating><Tooltip tooltip="Hey, it's me, Harv" tooltipPosition="bottom" /></Button>
          <Button className="social-media-facebook" href="https://www.facebook.com/adam.harvey.73" icon={<Icon.Facebook/>} floating />
          <Avatar className="avatar">
            <img alt="Me" src={Me}/>
          </Avatar>
          <Button className="social-media-linkedIn" href="https://www.linkedin.com/in/adam-harvey-5b726a27/" icon={<Icon.LinkedIn/>} floating />
          <Button className="social-media-gitHub" href="https://github.com/heyitsmeharv" icon={<Icon.GitHub/>} floating />
        </div>
        <span className="paragraph">
        am an aspiring software developer and enthusiastic problem solver who has experience with both C# and C++ with SDL 2.0, 
        Cocos2Dx and DirectX 11. I am familiar with Unity, SQL, Agile SCRUM and Android Development.
        Since graduating with a degree in Computer Games (Software Development)  covering a wide range of topics including:
        </span>
      </div>
    );
  }
}

export default Home;