import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';
import Link from 'react-toolbox/lib/link/Link';
import Tooltip from 'react-toolbox/lib/tooltip/Tooltip';
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
          text: 'Education',
          value: '/education',
          icon: <Icon.Education/>,
          isActive: false,
          tooltip: 'Education',
        },
        {
          text: 'Game Development',
          value: '/gameDev',
          icon: <Icon.GameDev/>,
          isActive: false,
          tooltip: 'GameDev',
        },
        {
          text: 'Web Development',
          value: '/webDev',
          icon: <Icon.WebDev/>,
          isActive: false,
          tooltip: 'WebDev',
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
      <AppBar>
        <nav className="nav"> 
          {
            routes.map(route => {
              return (
                <Button
                  key={route.value}
                  label={this.hideLabels ? '' : route.text}
                  className={[route.isActive ? 'isActive' : '', this.hideLabels && 'noLabels'].join(' ')}
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
        <Link className="AppBar-Links" href="https://twitter.com/HeyItsMeHarv" label="Twitter" icon={<Icon.Twitter/>}/>
        <Link className="AppBar-Links" href="https://www.facebook.com/adam.harvey.73" label="Facebook" icon={<Icon.Facebook/>}/>
        <Link className="AppBar-Links" href="https://www.linkedin.com/in/adam-harvey-5b726a27/" label="LinkedIn" icon={<Icon.LinkedIn/>}/>
        <Link className="AppBar-Links" href="https://github.com/heyitsmeharv" label="GitHub" icon={<Icon.GitHub/>}/>
      </AppBar>
    );
  }
}

export default Menu;