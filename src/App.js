// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// React ToolBox Components
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Layout from 'react-toolbox/lib/layout/Layout';

// Components
import Menu from './components/Menu/menu';

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
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <div>
            <Route render={props => <Menu {...props}/>}/>
            <Route exact path="/profile" render={props => <Profile {...props} />}/>
            <Route exact path="/education" render={props => <Education {...props} />}/>
            <Route exact path="/game_portfolio" render={props => <GameDev {...props} />}/>
            <Route exact path="/web_portfolio" render={props => <WebDev {...props} />}/>
          </div> 
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
