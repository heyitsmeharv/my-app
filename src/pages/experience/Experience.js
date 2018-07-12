import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import './styles.scss';

class Experience extends Component {
  constructor(props) {
    super();
    this.state={}
  }

  render() {
    return (
      <div className="cardWrapper">
        <Card className="university">
          <div className="title">
            Southampton Solent
          </div>
        </Card>

        <Card className="contactPartners">
          <div className="title">
            ContactPartners
          </div>
        </Card>
      </div>
    );
  }
}

export default Experience;