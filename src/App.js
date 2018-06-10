// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Menu from './components/menu/Menu';

// Pages
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';

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

  generateBackground = () => {
    return Trianglify({
      height: window.innerHeight,
      width: window.innerWidth,
      cell_size: 40});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <Route render={props => <div alt="background" className="background" style={{backgroundImage: 'url(' + this.generateBackground().png() + ')'}}>
            <Route render={props => <Menu {...props}/>}/>
            <Route exact path="/" render={props => <Home {...props} />}/>
            <Route exact path="/home" render={props => <Home {...props} />}/>
            <Route exact path="/games" render={props => <Portfolio {...props} />}/>
          </div>}/>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
