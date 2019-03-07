import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core/";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors/";
import TitleBar from "./components/TitleBar";
import Cookies from "universal-cookie";
import CookieConsent from "react-cookie-consent";
import Scrollbars from "react-custom-scrollbars";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import * as ROUTES from "./constants/routes";

import "./fonts/font.css";

import LandingPage from "./pages/Landing";
import AdminPage from "./pages/Admin";
import BlogPage from "./pages/Blog";
import DownloadPage from "./pages/Download";
import DocumentationPage from "./pages/Documentation";
import { CookiesPage } from "./pages/Policies/";

const getThemeColour = () => {
  let c = new Cookies();

  let themeType = c.get("theme");

  if (
    themeType === undefined ||
    (themeType !== "dark" && themeType !== "light")
  ) {
    c.set("theme", "dark", {
      path: "/",
      expires: new Date(
        new Date().setYear(new Date().getFullYear() + 1)
      ) /* expires in 1 year */,
    });

    themeType = c.get("theme");
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
      let dark = theme.palette.type === "dark";
      let c = new Cookies();
      let t = !dark ? "dark" : "light";

      c.set("theme", t, {
        path: "/",
        expires: new Date(new Date().setYear(new Date().getFullYear() + 1)),
      });
      let newTheme = themeTemplate;
      newTheme.palette.type = t;

      this.setState({ theme: newTheme });
    };

    const muiTheme = createMuiTheme(theme);

    const styles = {
      main: {},
    };

    this.scrollbars = React.createRef();

    return (
      <>
        <Scrollbars
          ref={this.scrollbars}
          autoHide
          autoHeight
          autoHeightMax="100vh"
        >
          <Router>
            <ScrollToTop scrollbars={this.scrollbars}>
              <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                <TitleBar changeTheme={setThemeColour} />
                {/* Main page content below */}
                <main style={styles.main}>
                  <Route
                    exact={true}
                    path={ROUTES.HOME}
                    component={LandingPage}
                  />
                  <Route exact={true} path={ROUTES.BLOG} component={BlogPage} />
                  <Route
                    exact={true}
                    path={ROUTES.DOWNLOAD}
                    component={DownloadPage}
                  />
                  <Route
                    exact={true}
                    path={ROUTES.WIKI + "*"}
                    component={DocumentationPage}
                  />
                  <Route
                    exact={true}
                    path={ROUTES.ADMIN}
                    component={AdminPage}
                  />
                  <Route
                    exact={true}
                    path={ROUTES.COOKIE_POLICY}
                    component={CookiesPage}
                  />
                </main>
                <Footer />
              </MuiThemeProvider>
            </ScrollToTop>
          </Router>

          <CookieConsent
            location="bottom"
            buttonText="Sure thing!"
            cookieName="cookieConsent"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            Quantify stores cookies on your PC to enhance user experience.{"  "}
            <Link
              style={{ fontSize: "10px" }}
              to={ROUTES.COOKIE_POLICY}
              key="Learn more..."
            />
          </CookieConsent>
        </Scrollbars>
      </>
    );
  }
}

export default App;
