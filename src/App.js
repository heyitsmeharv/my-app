// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// React ToolBox Components
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Button from 'react-toolbox/lib/button/Button';
import Layout from 'react-toolbox/lib/layout/Layout';
import Link from 'react-toolbox/lib/link/Link';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Tooltip from 'react-toolbox/lib/tooltip/Tooltip';

// Pages
import Profile from './pages/profile/Profile';
import Education from './pages/education/Education';
import GameDev from './pages/gamedev/GameDev';
import WebDev from './pages/webdev/WebDev';

// Icons
import * as Icon from './assets/icons';

// Theme
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.scss';
import './assets/react-toolbox/theme.css';
import './App.scss';

class App extends Component {
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

  setActiveLink = () => {
    const { routes } = this.state;
    const { pathname } = this.props.history.location;
    routes.forEach(route => {
      if (pathname.indexOf(route.value) !== -1) {
        route.isActive = true;
      } 
      else {
        route.isActive = false;
      }
    });
    this.setState({
      routes,
    });
  }

  handleOnNavigate = link => { 
    const { history } = this.props; 
    history.push(link); 
  } 

  render() {
    const { routes } = this.state;
    const TooltipButton = Tooltip(Button);
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <Layout>
            <Route children={({ history }) => {
              return (
                <AppBar title="" leftIcon={<Icon.Menu/>}>
                  <Navigation className="nav" type="horizontal">
                  {
                    routes.map(route => {
                      return (
                        <TooltipButton
                          key={route.value}
                          label={this.hideLabels ? '' : route.text}
                          className={[route.isActive ? 'isActive' : '', this.hideLabels && 'noLabels'].join(' ')}
                          // onClick={() => history.push(route.link)}
                          onClick={() => handleOnNavigate(link)}
                          flat
                          icon={route.icon}
                          tooltipPosition="bottom"
                          tooltip={route.tooltip}
                        />
                      );
                    })
                  }
                    <Link className="AppBar-Icons" href="https://twitter.com/HeyItsMeHarv" label="Twitter" icon={<Icon.Twitter/>}/>
                    <Link className="AppBar-Icons" href="https://www.facebook.com/adam.harvey.73" label="Facebook" icon={<Icon.Facebook/>}/>
                    <Link className="AppBar-Icons" href="https://www.linkedin.com/in/adam-harvey-5b726a27/" label="LinkedIn" icon={<Icon.LinkedIn/>}/>
                    <Link className="AppBar-Icons" href="https://github.com/heyitsmeharv" label="GitHub" icon={<Icon.GitHub/>}/>
                </Navigation>
              </AppBar>
              )
            }}>
            </Route>
            <Route exact path='/' component={Profile}/>
            <Route path='/education' component={Education}/>
            <Route path='/gameDev' component={GameDev}/>
            <Route path='/webDev' component={WebDev}/>
            </Layout>
          </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
