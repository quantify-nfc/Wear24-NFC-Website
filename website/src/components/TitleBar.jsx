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
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  InvertColors as SwitchThemeIcon,
} from "@material-ui/icons";
import NavDrawerContent from "./NavDrawerContent";
import { faGithub as GitHubIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as EXTERNAL_LINKS from "../constants/externalUrls";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    margin: theme.spacing.unit,
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

    const { classes } = this.props;
    const { ghMenuAnchor } = this.state;
    const ghMenuOpen = Boolean(ghMenuAnchor);

    const ghMenuItems = [
      {
        text: "Kernel Repository",
        url: EXTERNAL_LINKS.GITHUB_KERNEL_REPO,
        linkTarget: "_blank",
      },
      {
        text: "ROM Repository",
        url: EXTERNAL_LINKS.GITHUB_ROM_REPO,
        linkTarget: "_blank",
      },
    ];

    return (
      <div className={this.elStyles.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton
              style={this.elStyles.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.showDrawer}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" className={classes.grow}>
              Quantify - The Wear24 NFC Project
            </Typography>

            <IconButton color="inherit" className={classes.button}>
              <SwitchThemeIcon />
            </IconButton>

            <IconButton
              color="inherit"
              className={classes.button}
              aria-label="GitHub Repositories"
              aria-owns={ghMenuOpen ? "ghMenu" : undefined}
              aria-haspopup="true"
              onClick={this.openGithubMenu}
            >
              <FontAwesomeIcon icon={GitHubIcon} />
            </IconButton>

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
        <div style={{ marginTop: "72px" }} />
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
};

export default withStyles(styles, { withTheme: true })(TitleBar);
