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

import HomeIcon from "mdi-react/HomeOutlineIcon";
import ForumIcon from "mdi-react/ForumOutlineIcon";
import DownloadIcon from "mdi-react/DownloadOutlineIcon";
import BookIcon from "mdi-react/BookOutlineIcon";
import AndroidIcon from "mdi-react/AndroidIcon";
import AcknowledgmentsIcon from "mdi-react/AccountGroupOutlineIcon";

const menuContent = [
  [{ text: "Home", url: ROUTES.HOME, icon: <HomeIcon /> }],
  [{ text: "Development Blog", url: ROUTES.BLOG, icon: <ForumIcon /> }],
  [
    {
      text: "Downloads & Source",
      url: ROUTES.DOWNLOAD,
      icon: <DownloadIcon />,
    },
    { text: "Documentation", url: ROUTES.WIKI, icon: <BookIcon /> },
  ],
  [
    {
      text: "Recommended Apps",
      url: ROUTES.RECOMMENDED_APPS,
      icon: <AndroidIcon />,
    },
  ],
  [
    {
      text: "Acknowledgments",
      url: ROUTES.ACKNOWLEDGMENTS,
      icon: <AcknowledgmentsIcon />,
    },
  ],
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
        {menuContent.map((menuGroup) => (
          <>
            <List>
              {menuGroup.map((item) => (
                <ListItem button key={item.text} to={item.url} component={Link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>

            {menuContent.length > 0 ? <Divider /> : null}
          </>
        ))}
      </>
    );
  }
}

NavDrawerContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavDrawerContent);
