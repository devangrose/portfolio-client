import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  a: {
    textDecoration: 'none',
    color: theme.palette.common.white,
    fontWeight: 'bold'
  },
  bar: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    elevation: 0,
  }
});

function Navbar(props) {
  const { classes } = props;
  var background = {
    backgroundColor: props.backgroundColor
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={props.navbarElevation} className={classes.bar} style={background}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Devan
          </Typography>
          <Button color="inherit"><a href="#experience" color="inherit" className={classes.a}>Experience</a></Button>
          <Button color="inherit"><a href="#portfolio" color="inherit"className={classes.a}>Portfolio</a></Button>
          <Button color="inherit"><a href="#skills" color="inherit" className={classes.a}>Skills</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);

