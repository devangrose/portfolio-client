import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PortfolioGrid from './PortfolioGrid';

const styles = theme => ({
  root : {
    width: '70%',
    margin: 'auto',
    marginBottom: '100px',
  }
});

class Portfolio extends Component {
  render() {
    return(
      <div className={this.props.classes.root}>
        <Typography variant="display3">
          My Work
        </Typography>
        <PortfolioGrid />
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
