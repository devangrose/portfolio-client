import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  div: {
    height: 300,
    background: 'url(\'http://comcitybd.com/wp-content/uploads/2017/05/about-us-banner.jpg\')',
    backgroundSize: 'fit',
    backgroundRepeat: 'no-repeat',
    zIndex: 2,
    position: 'relative',
    top: '0',
    left:'50%',
  },
  text: {
    color: theme.palette.common.white,
    height: 300,
    zIndex: 5,
  }
});

class Hero extends Component {
  render(props){
    const { classes } = this.props;
    return (
      <div className={classes.div}>
        <Typography variant="title" className={classes.text}>
        </Typography>
      </div>
    );
  }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);
