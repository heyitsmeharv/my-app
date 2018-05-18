// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Menu from './components/Menu/menu';

// Pages
import Home from './pages/home/Home';
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
            <Route exact path="/home" render={props => <Home {...props} />}/>
            <Route exact path="/education" render={props => <Education {...props} />}/>
            <Route exact path="/games" render={props => <GameDev {...props} />}/>
            <Route exact path="/web" render={props => <WebDev {...props} />}/>
          </div> 
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
