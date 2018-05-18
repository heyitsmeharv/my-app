import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Button from 'react-toolbox/lib/button/Button';
import * as Icon from '../../assets/icons';
import Me from '../../assets/images/me.jpg';
import Trianglify from 'trianglify';
import './styles.scss';

class Home extends Component {
  constructor(props) {
    super();
    this.state = {};
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
      <div>
        <image className="background" src={this.background()} />
        {/* <Avatar className="avatar"><img alt="Me" src={Me}/></Avatar> */}
        <div className="social-media-buttons">
          <Button className="social-media-twitter" href="https://twitter.com/HeyItsMeHarv" icon={<Icon.Twitter/>} floating />
          <Button className="social-media-facebook" href="https://www.facebook.com/adam.harvey.73" icon={<Icon.Facebook/>} floating />
          <Button className="social-media-linkedIn" href="https://www.linkedin.com/in/adam-harvey-5b726a27/" icon={<Icon.LinkedIn/>} floating />
          <Button className="social-media-gitHub" href="https://github.com/heyitsmeharv" icon={<Icon.GitHub/>} floating />
        </div>
        {/* <div className="blank-canvas">
        
        </div>  */}
      </div>
    );
  }
}

export default Home;