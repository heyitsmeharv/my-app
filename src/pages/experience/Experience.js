import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Card from 'react-toolbox/lib/card/Card';
import * as Icon from '../../assets/icons';

// import SouthamptonSolentLogo from '../../assets/images/solent/solent-university-logo.png';
import ContactPartnersLogo from '../../assets/images/cp/cplogo.png';
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
            <a href="https://contactpartners.com/">
              <img className="contactpartnerslogo" alt="contactpartners" src={ContactPartnersLogo}/>
            </a>
            <div className="contactPartners-social-media-buttons">
              <Button className="contactPartners-social-media-twitter" href="https://twitter.com/ContactPartners" target="_blank" icon={<Icon.Twitter/>} floating />
              <Button className="contactPartners-social-media-linkedIn" href="https://www.linkedin.com/company/contactpartners-ltd/" target="_blank" icon={<Icon.LinkedIn/>} floating />
            </div>
          </div>
          <div className="cardText">
            <div className="title">
              Front-End Developer: June 2016 - Present
            </div>
            <div className="text">
              I first joined ContactPartners as a support and development technician where my role mainly consisted of testing and assisting clients.
              I was tasked with researching and implementing an automated test system in which I explored the use of
              Selenium and various testing languages.
              <br/><br/>
              Since then I have stepped into more of a development role where my job consists of helping build and support complex applications which
              aid large businesses, mainly banks, efficiency in communicating internally as well as with their clients.
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Experience;