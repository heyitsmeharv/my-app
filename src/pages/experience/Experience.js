import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import * as Icon from '../../assets/icons';

// import SouthamptonSolentLogo from '../../assets/images/solent-university-logo.png';
import ContactPartnersLogo from '../../assets/images/cplogo.png';
import './styles.scss';

class Experience extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div className="cardWrapper">
        {/* <Card className="university">
          <div className="title">
            Southampton Solent
          </div>
          <img className="university" alt="southamptonsolent" src={SouthamptonSolentLogo}/>
          <div className="cardText">
           My university degree covered a wide range of topics including:
          </div>
        </Card> */}

        <Card className="contactPartners">
          <div>
            <a href="http://http://contactpartners.com/">
              <img className="contactpartnerslogo" alt="contactpartners" src={ContactPartnersLogo}/>
            </a>
            <div className="contactPartners-social-media-buttons">
              <Button className="contactPartners-social-media-twitter" href="https://twitter.com/ContactPartners" icon={<Icon.Twitter/>} floating />
              <Button className="contactPartners-social-media-linkedIn" href="https://www.linkedin.com/in/ContactPartners/" icon={<Icon.LinkedIn/>} floating />
              <Button className="contactPartners-social-media-facebook" href="https://www.facebook.com/ContactPartners" icon={<Icon.Facebook/>} floating />
            </div>
          </div>
          <div className="cardText">
            <div className="title">
              Front-End Developer: June 2016 - Present
            </div>
            <div className="text">
              I am currenty a front-end developer at ContactPartners. I help build and support complex applications which
              aid large businesses, mainly banks, to communicate internally as well as with their clients.
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Experience;