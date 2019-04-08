import React, { Component } from "react";
import { CssBaseline, Fab } from "@material-ui/core/";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors/";
import TitleBar from "./components/TitleBar";
import CookieConsent from "react-cookie-consent";
import Scrollbars from "react-custom-scrollbars";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import * as ROUTES from "./constants/routes";

import "./fonts/font.css";

import LandingPage from "./pages/Landing";
import AdminPage from "./pages/Admin";
import BlogPage from "./pages/Blog";
import DownloadPage from "./pages/Download";
import RecommendedAppsPage from "./pages/RecommendedApps";
import DocumentationPage from "./pages/Documentation";
import { CookiesPage } from "./pages/Policies/";
import SignInScreen from "./pages/SignIn";

import FeedbackIcon from "mdi-react/FeedbackIcon";

import { Error404 } from "./pages/Errors";

import * as FirebaseCommon from "./firebase/common";

import * as CookieFunctions from "./cookies";
import swal from "sweetalert2";

const getSubdomain = () => {
  const hostWithoutPort = window.location.hostname.split(":")[0];
  return hostWithoutPort
  .split(".")
  .slice(0, -2)
  .join(".");
};

const getThemeColour = () => {
  let themeType = CookieFunctions.GetCookie("theme");

  if (
    themeType === undefined ||
    (themeType !== "dark" && themeType !== "light")
  ) {
    CookieFunctions.SetCookie("theme", "dark", "/", 1, 0, 0);

    themeType = CookieFunctions.GetCookie("theme");
  }

  return themeType;
};

const getCurrentTheme = () => {
  let theme = themeTemplate;
  theme.palette.type = getThemeColour();
  return theme;
};

const themeTemplate = {
  palette: {
    type: "dark",
    primary: {
      main: blue[800],
    },
    secondary: {
      main: teal["A700"],
    },
    contrastThreshold: 3,
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      "'Manrope'",
      "'Roboto'",
      "'Segoe UI'",
      "'Helvetica Neue'",
      "'Arial'",
      "sans-serif",
    ].join(","),
    body1: {
      fontFamily: [
        "'Roboto'",
        "'Manrope'",
        "'Segoe UI'",
        "'Helvetica Neue'",
        "'Arial'",
        "sans-serif",
      ].join(","),
    },
    body2: {
      fontFamily: [
        "'Roboto'",
        "'Manrope'",
        "'Segoe UI'",
        "'Helvetica Neue'",
        "'Arial'",
        "sans-serif",
      ].join(","),
    },
  },
  overrides: {
    MuiButton: {
      root: {
        letterSpacing: "2px",
      },
    },
    MuiChip: {
      label: {
        letterSpacing: "0.5px",
      },
    },
    MuiDialogContentText: {
      root: {
        fontFamily: [
          "'Roboto'",
          "'Manrope'",
          "'Segoe UI'",
          "'Helvetica Neue'",
          "'Arial'",
          "sans-serif",
        ].join(","),
      },
    },
  },
};

class App extends Component {
  state = {
    theme: getCurrentTheme(),
  };

  render() {
    const { theme } = this.state;

    const setThemeColour = () => {
      let t = theme.palette.type === "dark" ? "light" : "dark";

      CookieFunctions.SetCookie("theme", t, "/", 1, 0, 0);

      let newTheme = themeTemplate;
      newTheme.palette.type = t;

      this.setState({ theme: newTheme });
    };

    const muiTheme = createMuiTheme(theme);

    const styles = {
      main: {},
    };

    this.scrollbars = React.createRef();

    let routers = undefined;

    FirebaseCommon.Messaging.GetPermission();

    switch (getSubdomain()) {
      default:
        routers = (
          <Switch>
            <Route exact={ true } path={ ROUTES.HOME } component={ LandingPage }/>
            <Route
              exact={ false }
              path={ ROUTES.BLOG_OLD }
              render={ () => {
                window.location.href =
                  "//blog.wear24rom.com" +
                  window.location.pathname.substr(
                    5,
                  ); /* Cut off the /blog from start of path */
              } }
            />
            <Route
              exact={ true }
              path={ ROUTES.DOWNLOAD }
              component={ DownloadPage }
            />
            <Route
              exact={ true }
              path={ ROUTES.WIKI + "*" }
              component={ DocumentationPage }
            />
            <Route exact={ true } path={ ROUTES.ADMIN } component={ AdminPage }/>
            <Route
              exact={ true }
              path={ ROUTES.COOKIE_POLICY }
              component={ CookiesPage }
            />
            <Route
              exact={ true }
              path={ ROUTES.SIGN_IN }
              component={ SignInScreen }
            />
            <Route
              exact={ true }
              path={ ROUTES.RECOMMENDED_APPS }
              component={ RecommendedAppsPage }
            />
            <Route component={ Error404 }/>
          </Switch>
        );
        break;

      case "blog":
        routers = (
          <Switch>
            <Route exact={ true } path="/*" component={ BlogPage }/>
          </Switch>
        );
        break;
    }

    return (
      <>
        <Scrollbars
          ref={ this.scrollbars }
          autoHide
          autoHeight
          autoHeightMax="100vh"
        >
          <Router>
            <MuiThemeProvider theme={ muiTheme }>
              <ScrollToTop scrollbars={ this.scrollbars }>
                  <CssBaseline/>
                  <TitleBar changeTheme={ setThemeColour }/>
                {/* Main page content below */ }
                <main style={ styles.main } data-theme={ theme.palette.type }>
                    { routers }
                  </main>
                  <Footer/>
                <CookieConsent
                  location="bottom"
                  buttonText="Sure thing!"
                  cookieName="cookieConsent"
                  style={ { background: "#2B373B" } }
                  buttonStyle={ { color: "#4e503b", fontSize: "13px" } }
                  expires={ 150 }
                >
                  Quantify stores cookies on your PC to enhance user experience.
                  { "  " }
                  <Link
                    style={ { fontSize: "10px", cursor: "pointer" } }
                    to={ ROUTES.COOKIE_POLICY }
                    key="Learn more..."
                  />
                </CookieConsent>

                <Fab
                  size="medium"
                  color="secondary"
                  aria-label="Feedback"
                  style={ { margin: 16, position: "fixed", bottom: 0, right: 0 } }
                  className="fabHoverLarge"
                  onClick={ () => {
                    swal.fire({
                      title: "Quantify: Website Feedback",
                      html: `<p>Thanks for clicking the Feedback button.</p>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe4zekN3dow3w8uFEg_8Hg-vbVvOxwW22KiWacP1YycRdlcpg/viewform?embedded=true" style="width: 90%; margin: auto; height: 450px; height: 40vh" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>`,
                      showCloseButton: true,
                      showCancelButton: false,
                      focusConfirm: false,
                      confirmButtonText: "Close Dialog",
                      confirmButtonAriaLabel: "Close Dialog",
                    });
                  } }
                >
                  <FeedbackIcon/>
                </Fab>
              </ScrollToTop>
            </MuiThemeProvider>
          </Router>
        </Scrollbars>
      </>
    );
  }
}

export default withStyles({}, { withTheme: true })(App);
