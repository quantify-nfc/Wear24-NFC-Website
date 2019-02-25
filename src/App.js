import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core/";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors/";
import TitleBar from "./components/TitleBar";
import Cookies from "universal-cookie";
import Scrollbars from "react-custom-scrollbars";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import "./fonts/font.css";

import LandingPage from "./pages/Landing/";
import AdminPage from "./pages/Admin/";
import BlogPage from "./pages/Blog/";
import DownloadPage from "./pages/Download/";
import DocumentationPage from "./pages/Documentation/";

const getThemeColour = () => {
  let c = new Cookies();

  let themeType = c.get("theme");

  if (
    themeType === undefined ||
    (themeType !== "dark" && themeType !== "light")
  ) {
    c.set("theme", "dark", {
      path: "/",
      expires: new Date(new Date().setYear(new Date().getFullYear() + 1)),
    });

    themeType = c.get("theme");
  }

  return themeType;
};

class App extends Component {
  state = {
    theme: {
      palette: {
        type: getThemeColour(),
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
          text: {
            letterSpacing: "2px",
          },
        },
      },
    },
  };

  render() {
    const { theme } = this.state;

    //let getThemeObject = () => {};

    const setThemeColour = () => {
      let dark = theme.palette.type === "dark";
      let c = new Cookies();
      let t = !dark ? "dark" : "light";

      c.set("theme", t);
      let newTheme = {
        palette: {
          type: t,
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
        },
      };

      this.setState({ theme: newTheme });
    };

    const muiTheme = createMuiTheme(theme);

    const styles = {
      main: {},
    };

    return (
      <>
        <Scrollbars autoHide autoHeight autoHeightMax="100vh">
          <Router>
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
                  path={ROUTES.WIKI + "/*"}
                  component={DocumentationPage}
                />
                <Route
                  exact={true}
                  path={ROUTES.WIKI}
                  component={DocumentationPage}
                />
                <Route exact={true} path={ROUTES.ADMIN} component={AdminPage} />
              </main>
            </MuiThemeProvider>
          </Router>
        </Scrollbars>
      </>
    );
  }
}

export default App;
