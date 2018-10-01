import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width: '70%',
    margin: 'auto',
    marginBottom: '100px',
  }
});

class PortfolioShow extends Component {

  render(){
    return (
      <div>
      </div>
    )
  }
}

PortfolioShow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortfolioShow);
