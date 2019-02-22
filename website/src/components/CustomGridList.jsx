import React, { Component } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import { Info as InfoIcon } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "65%",
    height: "auto",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
});

class CustomGridList extends Component {
  render() {
    const classes = this.props.classes;
    const gridData = this.props.GridData;

    return (
      <div className={classes.root}>
        <GridList cellHeight={350} spacing={2} className={classes.gridList}>
          {gridData.map((tile, index) => (
            <GridListTile
              key={tile.img}
              cols={tile.big ? 2 : 1} // Span two columns if tile big
              rows={(index % 2) + Math.floor(index / 2)} //
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                subtitle={tile.subtitle}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

CustomGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  GridList: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomGridList);
