import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import CodeSolutions from './img/cloud.png';

const styles = theme => ({
  container: {
    width: '70%',
    margin: '10% auto',
  },
  paper: {
    padding: 50,
  },
  logo: {
    height: 100,
    paddingTop: 20,
  }
});

class Experience extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography variant="display3">
          Experience
        </Typography>
        <br/>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={8}>
              <Grid container spacing={24}>
                <Grid item md={4}>
                  <img className={classes.logo} src={CodeSolutions}/>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="display1">
                      Code Solutions, LLC
                    </Typography>
                    <Typography variant="subheading">
                      July 2018 - Present
                    </Typography>
                    <Typography variant="headline">
                      Owner, Developer
                    </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={8}>
              <Grid container spacing={24}>
                <Grid item md={4}>
                  <img className={classes.logo} src='https://goalwashington.files.wordpress.com/2017/03/logo-wac-wings.jpg?w=736'/>
                </Grid>
                <Grid item md={8}>
                    <Typography variant="display1">
                      Washington Athletic Club
                    </Typography>
                    <Typography variant="subheading">
                      2012 - Present
                    </Typography>
                    <Typography variant="headline">
                      Swim Instructor
                    </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
