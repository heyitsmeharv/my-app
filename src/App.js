// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Menu from './components/Menu/menu';
import Background from './components/Background/background';

// Pages
import Home from './pages/home/Home';
import Education from './pages/education/Education';
import GameDev from './pages/gamedev/GameDev';
import WebDev from './pages/webdev/WebDev';

// Icons
import * as Icon from './assets/icons';

// Theme
import Trianglify from 'trianglify';
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

    var pattern = Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40});

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <div alt="background" className="background" style={{backgroundImage: 'url(' + pattern.png() + ')'}}>
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
