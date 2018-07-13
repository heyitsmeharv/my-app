import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';

import SouthamptonSolentLogo from '../../assets/images/solent-university-logo.png';
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
          {/* <div className="title">
            ContactPartners
          </div> */}
          <a>
            <img className="contactpartnerslogo" alt="contactpartners" src={ContactPartnersLogo}/>
          </a>
        </Card>
      </div>
    );
  }
}

export default Experience;