import React, { Component } from "react";
import { Grid, ListItem, ListItemText, Paper, List } from "@material-ui/core";

import * as ROUTES from "../constants/routes";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer style={{ width: "80%" }}>
          <Grid container spacing={5}>
            <Grid item>
              <Paper elevation={4}>
                <List>
                  <SitemapLink to={ROUTES.HOME}>Home</SitemapLink>
                </List>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={4}>
                <List>
                  <SitemapLink to={ROUTES.HOME}>Downloads</SitemapLink>
                  <SitemapLink to={ROUTES.DOWNLOAD}>Source Code</SitemapLink>
                </List>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={4}>
                <List>
                  <SitemapLink to={ROUTES.HOME}>Home</SitemapLink>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </footer>
      </>
    );
  }
}

function SitemapLink(props) {
  let linkText = props.text;
  return (
    <ListItem button component="link" {...props}>
      <ListItemText primary={linkText} />
    </ListItem>
  );
}

export default Footer;
