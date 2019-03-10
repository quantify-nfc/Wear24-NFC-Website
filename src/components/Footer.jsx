import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Paper, Divider, Typography } from "@material-ui/core";

import * as ROUTES from "../constants/routes";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer style={{ width: "100%" }}>
          <Paper style={{ width: "100%", padding: 32 }} elevation={2}>
            <Typography variant="h5" style={{ padding: 16 }}>
              Sitemap
            </Typography>
            <Divider variant="fullWidth" style={{ marginBottom: 16 }} />
            <SitemapLink to={ROUTES.HOME} text="Homepage" />
            <SitemapLink to={ROUTES.DOWNLOAD} text="Downloads" />
            <SitemapLink to={ROUTES.DOWNLOAD + "#source"} text="Source Code" />
            <SitemapLink to={ROUTES.WIKI} text="Documentation" />
            <SitemapLink to={ROUTES.SIGN_IN} text="Sign in" />
            <SitemapLink to={ROUTES.HOME} text="Contact Us (not implemented)" />
          </Paper>
        </footer>
      </>
    );
  }
}

function SitemapLink(props) {
  let { to, text } = props;
  return (
    <Link key={text} to={to} role="menuitem">
      <Typography variant="body1" component="span">
        <u>{text}</u>
      </Typography>
    </Link>
  );
}

export default Footer;
