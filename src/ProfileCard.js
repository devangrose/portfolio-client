import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  card: {
    width: '70%',
    zIndex: 1000,
    backgroundColor: 'white',
    margin: '0 auto',
    marginTop:'-10%',
    display: 'block',
    position: 'relative',
  },
  img: {
    height: 300,
    width: 230,
    margin: 50,
  },
  container: {
    margin: '10%',
    width: '100%',
    fontSize: '2em',
  }
});

class ProfileCard extends Component {

  render(){
    const classes = this.props.classes;
    return (
      <Paper elevation={8} className={classes.card}>
        <Grid container spacing={16}>
          <Grid item md={4}>
            <img className={classes.img} src='http://devangrose.me/img/profile.jpg'/>
          </Grid>
          <Grid item md={8}>
            <div className={classes.container}>
              <Typography variant="display3" component="h1">
                Devan Grose
              </Typography>
              <Typography variant="headline" component="h1">
                Web Developer
              </Typography>
              <Typography variant="headline" component="h1">
                Family Man
              </Typography>
              <Typography variant="headline" component="h1">
                Professional Bro
              </Typography>
              <Typography variant="headline" component="h1">
                Good at lots of things
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }

}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileCard);
