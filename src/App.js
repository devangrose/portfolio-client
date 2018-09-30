import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
import Theme from './Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './Nav';
import ProfileCard from './ProfileCard';
import Experience from './Experience';
import PortfolioGrid from './Portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const SCROLLHEIGHT = 150;
const styles = {
  img: {
    width: '100%',
    margin: '0 auto',
    zIndex: -1,
  },
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      background: 'transparent',
      navbarElevation: 0
    };
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    if(window.scrollY <= SCROLLHEIGHT){
      var opacity = window.scrollY / SCROLLHEIGHT;
      this.setState({
        background: `rgba(33,150,243,${opacity}`,
        navbarElevation: 0,
      });
    }
    else {
      this.setState({
        background: Theme.palette.primary.main,
        navbarElevation: 2,
      });
    }
  };
  render() {
    return (
    <MuiThemeProvider theme={Theme} >
        <Navbar backgroundColor={this.state.background} navbarElevation={this.state.navbarElevation} onScroll={this.onScroll}/>
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    </MuiThemeProvider>

    );
  }
}

export default App;
