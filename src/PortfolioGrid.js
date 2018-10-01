import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import img2048 from './img/2048.png';
import img2048alt from './img/2048alt.png';
import drumcircle from './img/drumcircle.png';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  subheader: {
    width: '100%',
  },
  tile: {
    borderRadius: '3px',
  }
});

const tileData = [
  {
    img: img2048,
    alt: img2048alt,
    title: '2048 Clone',
    url: 'https://devangrose.github.io/2048_clone/',
  },
  {
    img: 'https://i.ebayimg.com/images/g/8gwAAOSwywRaQLUI/s-l300.jpg',
    title: 'Raspberry Pi Rover',
    url: '/rover',
  },
  {
    img: drumcircle,
    title: 'DrumCircle',
    url: '/drumcircle',
  },
  {
    img: 'http://devangrose.me/img/profile.jpg',
    title: 'Project 4',
    url: 'project_4',
  },
];


class PortfolioGrid extends Component {
  handleHover = (e,tile) => {
    if (tile.alt){
      e.target.src = tile.alt;
    }
  } 
  handleHoverLeave = (e, tile) => {
    e.target.src = tile.img;
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={8} className={classes.root}>
        <GridList cellHeight={200} spacing={18} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile  className={classes.tile} key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
              <a href={tile.url}><img onMouseOver={(e) => this.handleHover(e,tile)} onMouseOut={(e) => this.handleHoverLeave(e,tile)} src={tile.img} alt={tile.title} /></a>
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}

PortfolioGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioGrid);
