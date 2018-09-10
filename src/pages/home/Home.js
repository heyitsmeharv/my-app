import React, { Component } from 'react';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import * as Icon from '../../assets/icons';
import Me from '../../assets/images/me.jpg';
import './styles.scss';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Boogaloo:300,400,700', 'sans-serif']
  }
});

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
      drawerActive: false,
      isChecked: true,
    };
  }

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  handleDrawerToggle = () => {
    this.setState({drawerActive: !this.state.drawerActive});
  };

  actions = [
    { label: "Cancel", className: "contact-me-button-action", onClick: this.handleToggle },
  ];

  render() {
    return (
      <div>
        <div className="social-media-buttons">
          <Button className="social-media-twitter" href="https://twitter.com/HeyItsMeHarv" icon={<Icon.Twitter/>} floating></Button>
          <Button className="social-media-facebook" href="https://www.facebook.com/adam.harvey.73" icon={<Icon.Facebook/>} floating />
          <div className="tooltip">
            <Avatar className="avatar">
              <img className="image" alt="Me" src={Me}/>
            </Avatar>
            <span className="tooltiptext">Hey, it's me, Harv</span>
          </div>
          <Button className="social-media-linkedIn" href="https://www.linkedin.com/in/adam-harvey-5b726a27/" icon={<Icon.LinkedIn/>} floating />
          <Button className="social-media-gitHub" href="https://github.com/heyitsmeharv" icon={<Icon.GitHub/>} floating />
        </div>
        <div className="paragraph">
          <span className="intro">
            I am a 24 year old aspiring software developer and enthusiastic problem solver who started his programming career as a game developer 
            and has since ventured into the world of web development.
          </span>
          <br></br>
          <span className="experience">
            My skills include:
          </span>
          <div className="column-wrapper">
            <div className="column-one">
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">C++</span>
              </label>
            <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">C#</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">React.js</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">SQL</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">SDL 2.0</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">COCOS 2DX</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">DirectX 11</span>
              </label>
            </div>
            <div className="column-two">
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">HTML/CSS</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Node</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Git</span>
              </label>
            <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Agile</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Andriod Development</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Unity</span>
              </label>
              <br></br>
              <label class="container">
                <input type="checkbox" checked="checked"/>
                <span class="checkmark"></span>
                <span className="checkbox-label">Unreal Engine</span>
              </label>
              <br></br>
            </div>
          </div>
          <br></br>
            If you have any questions and want to contact me, hit the button below. 
        </div>
        <br></br>
        <br></br>
        <div className="contact-me">
          <Button className="contact-me-button" label="Contact Me" onClick={this.handleToggle} raised accent>
            <Dialog
              className="contact-me-dialog"
              actions={this.actions}
              active={this.state.active}
              onEscKeyDown={this.handleToggle}
              onOverlayClick={this.handleToggle}
              title='Contact Me'
            >
            <p className="text">Email Address: heyitsmeharv@gmail.com</p>
            <p className="text">Phone Number: 07809 690 670</p>
            <p className="text">Alternatively, you can drop me a message via any of the social media buttons.</p>
            </Dialog>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;