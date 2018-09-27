import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Hero from './Hero';
import Theme from './Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './Nav';
import ProfileCard from './ProfileCard';
import Experience from './Experience';
import PortfolioGrid from './Portfolio';
import { Router } from 'react-router-dom';

const styles = {
  img: {
    width: '100%',
    margin: '0 auto',
    zIndex: -1,
  },
};

class Home extends Component {
  render() {

    return(
      <div style={styles.div}>
        <div style={{position:'relative'}}>
          <img style={styles.img} src='http://comcitybd.com/wp-content/uploads/2017/05/about-us-banner.jpg'/>
          <ProfileCard />
        </div>
        <Experience />
        <PortfolioGrid />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
