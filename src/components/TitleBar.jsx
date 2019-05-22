import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Menu,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
import MediaQuery from "react-responsive";

import { Menu as MenuIcon } from "@material-ui/icons";
import LightbulbIcon from "mdi-react/LightbulbIcon";
import LightbulbOutlineIcon from "mdi-react/LightbulbOutlineIcon";
import DiscordIcon from "mdi-react/DiscordIcon";
import GithubCircleIcon from "mdi-react/GithubCircleIcon";

import NavDrawerContent from "./NavDrawerContent";
import * as EXTERNAL_LINKS from "../constants/externalUrls";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  siteTitle: {
    marginLeft: 8,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 16,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
  noLinkStyling: {
    textDecoration: "none",
  },
});

class TitleBar extends Component {
  state = {
    auth: false,
    shown: false,
    ghMenuAnchor: null,
  };

  elStyles = styles;

  showDrawer = () => {
    this.setState({ shown: true });
  };

  hideDrawer = () => {
    this.setState({ shown: false });
  };

  openGithubMenu = (event) => {
    this.setState({ ghMenuAnchor: event.currentTarget });
  };

  closeGithubMenu = () => {
    this.setState({ ghMenuAnchor: null });
  };

  render() {
    // const { auth } = this.state;

    const { classes, theme, changeTheme } = this.props;
    const { ghMenuAnchor } = this.state;
    const ghMenuOpen = Boolean(ghMenuAnchor);

    const ghMenuItems = [];

    Object.keys(EXTERNAL_LINKS.GITHUB_REPOS).forEach((item) => {
      ghMenuItems.push({
        text: item,
        url: EXTERNAL_LINKS.GITHUB_REPOS[item],
        target: "_blank",
      });
    });

    return (
      <div className={this.elStyles.root}>
        <AppBar position="fixed" color="primary" elevation={2}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.showDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              color="inherit"
              className={[classes.grow, classes.siteTitle].join(" ")}
            >
              Quantify
              <MediaQuery query="(min-width: 650px)">
                <> - The Wear24 NFC Project</>
              </MediaQuery>
            </Typography>

            <Tooltip
              title="Toggle light/dark theme"
              aria-label="Toggle light/dark theme"
            >
              <IconButton
                color="inherit"
                className={classes.button}
                onClick={changeTheme}
              >
                {theme.palette.type === "dark" ? (
                  <LightbulbOutlineIcon />
                ) : (
                  <LightbulbIcon />
                )}
              </IconButton>
            </Tooltip>

            <Tooltip title="Discord Server" aria-label="Discord Server">
              <IconButton
                color="inherit"
                className={classes.button}
                component="a"
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/m2v6fQH"
              >
                <DiscordIcon />
              </IconButton>
            </Tooltip>

            <Tooltip
              title="GitHub repository links"
              aria-label="GitHub repository links"
            >
              <IconButton
                color="inherit"
                className={classes.button}
                aria-label="GitHub Repositories"
                aria-owns={ghMenuOpen ? "ghMenu" : undefined}
                aria-haspopup="true"
                onClick={this.openGithubMenu}
              >
                <GithubCircleIcon />
              </IconButton>
            </Tooltip>

            <Menu
              id="ghMenu"
              anchorEl={ghMenuAnchor}
              open={ghMenuOpen}
              onClose={this.closeGithubMenu}
            >
              {ghMenuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  selected={false}
                  onClick={this.closeGithubMenu}
                  component="a"
                  target={item.linkTarget}
                  href={item.url}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: "64px" }} />
        <SwipeableDrawer
          open={this.state.shown}
          anchor="left"
          onClose={this.hideDrawer}
          onOpen={this.showDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.hideDrawer}
            onKeyDown={this.hideDrawer}
          >
            <NavDrawerContent />
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(TitleBar);
