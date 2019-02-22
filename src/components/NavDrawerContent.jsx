import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faHome,
  faDownload,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
};

class NavDrawerContent extends Component {
  state = {
    auth: false,
  };

  render() {
    return (
      <>
        <List>
          {[{ text: "Home", url: ROUTES.HOME, icon: faHome }].map(
            (item, index) => (
              <ListItem button key={item.text} to={item.url} component={Link}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} fixedWidth />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {[{ text: "Blog", url: ROUTES.BLOG, icon: faCommentAlt }].map(
            (item, index) => (
              <ListItem button key={item.text} to={item.url} component={Link}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={item.icon} fixedWidth />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {[
            { text: "Downloads", url: ROUTES.BLOG, icon: faDownload },
            { text: "Documentation", url: ROUTES.BLOG, icon: faBookOpen },
          ].map((item, index) => (
            <ListItem button key={item.text} to={item.url} component={Link}>
              <ListItemIcon>
                <FontAwesomeIcon icon={item.icon} fixedWidth />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </>
    );
  }
}

NavDrawerContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawerContent);
