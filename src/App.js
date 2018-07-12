// React
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Pages
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import Experience from './pages/experience/Experience';

// Components
import Menu from './components/Menu/menu';

// Theme
import Trianglify from 'trianglify';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './App.scss';
import './assets/react-toolbox/theme.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  generateBackground = () => {
    return Trianglify({
      height: window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight,
      width: window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth,
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
            <Route exact path="/experience" render={props => <Experience {...props} />}/>
          </div>}/>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
