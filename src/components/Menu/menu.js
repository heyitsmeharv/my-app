import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';
import * as Icon from '../../assets/icons';
import './styles.scss';

class Menu extends Component {
  constructor(props) {
    super(); 
    this.state = {
      hideLabels: false,
      routes: [
        {
          text: 'Home',
          value: '/home',
          icon:  <Icon.Home/>,
          isActive: false,
          tooltip: 'Home',
        },
        {
          text: 'Game Development',
          value: '/games',
          icon: <Icon.GameDev/>,
          isActive: false,
          tooltip: 'Game Development',
        },
        {
          text: 'Web Development',
          value: '/web',
          icon: <Icon.WebDev/>,
          isActive: false,
          tooltip: 'Web Development',
        },
      ]
    };
  }

  handleOnNavigate = link => {
    const {
      primaryProspectingButtonValue,
    } = this.state;
    const {
      handlePrimaryProspectingNavigate,
      handleOnNavigate,
    } = this.props;
    if (link === primaryProspectingButtonValue) {
      handlePrimaryProspectingNavigate();
    } else {
      handleOnNavigate(link);
    }
  };

  render() {
    const { routes } = this.state;
    // const TooltipButton = Tooltip(Button);
    return (
      <div>
      <AppBar className="app-bar">
        <nav className="nav"> 
          {
            routes.map(route => {
              return (
                <Button
                  key={route.value}
                  label={this.hideLabels ? '' : route.text}
                  className={[route.isActive ? 'isActive' : 'navButton'].join(' ')}
                  onClick={() => this.props.history.push(route.value)}
                  flat
                  icon={route.icon}
                  // tooltipPosition="bottom"
                  // tooltip={route.tooltip}
                />
              );
            })
          }
        </nav>
      </AppBar>
      </div>
    );
  }
}

export default Menu;