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
import Link from "./Link";

import * as ROUTES from "../constants/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faHome,
  faDownload,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const menuContent = [
  [ { text: "Home", url: ROUTES.HOME, icon: faHome } ],
  [ { text: "Development Blog", url: ROUTES.BLOG, icon: faCommentAlt } ],
  [
    {
      text: "Downloads & Source",
      url: ROUTES.DOWNLOAD,
      icon: faDownload,
    },
    { text: "Documentation", url: ROUTES.WIKI, icon: faBookOpen },
  ],
  [ { text: "Recommended Apps", url: ROUTES.RECOMMENDED_APPS, icon: faAndroid } ],
];

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
        { menuContent.map((menuGroup) => (
          <>
            <List>
              { menuGroup.map((item) => (
                <ListItem button key={ item.text } to={ item.url } component={ Link }>
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={ item.icon }
                      fixedWidth
                      style={ { fontSize: "1.2rem" } } // slightly larger than normal: more visible detail
                    />
                  </ListItemIcon>
                  <ListItemText primary={ item.text }/>
                </ListItem>
              )) }
            </List>

            { 0 < menuContent.length ? <Divider/> : null }
          </>
        )) }
      </>
    );
  }
}

NavDrawerContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawerContent);
