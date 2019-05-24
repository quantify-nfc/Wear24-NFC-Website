import React, { Component } from "react";
import Link from "./Link";
import {
  Paper,
  Divider,
  Typography,
  MuiThemeProvider,
} from "@material-ui/core";

import * as ROUTES from "../constants/routes";
import ExternalLink from "./ExternalLink";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer style={{ width: "100%" }}>
          <Paper style={{ width: "100%", padding: 32 }} elevation={8}>
            <Typography variant="h5" style={{ padding: 16 }}>
              Sitemap
            </Typography>
            <Divider variant="fullWidth" style={{ marginBottom: 16 }} />
            <SitemapLink to={ROUTES.HOME} text="Homepage" />
            <SitemapLink
              to={ROUTES.DOWNLOAD}
              text="Downloads &amp; Source Code"
            />
            <SitemapLink to={ROUTES.BLOG} text="Blog" />
            <SitemapLink to={ROUTES.WIKI} text="Documentation" />
            {/* <SitemapLink to={ROUTES.SIGN_IN} text="Sign in" /> */}
            <SitemapLink
              to={ROUTES.COOKIE_POLICY}
              text="Privacy &amp; Cookies Policy"
            />
            <Typography variant="body2" style={{ marginTop: 16 }}>
              v2.4 - Created by{" "}
              <ExternalLink url="https://github.com/davwheat">
                davwheat
              </ExternalLink>{" "}
              for Quantify
            </Typography>
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
