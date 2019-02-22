import React, { Component } from "react";
import { CssBaseline } from "@material-ui/core/";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue, teal } from "@material-ui/core/colors/";
import TitleBar from "./components/TitleBar";
import Cookies from "universal-cookie";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import "./fonts/font.css";

import LandingPage from "./pages/Landing/";
import AdminPage from "./pages/Admin/";
import BlogPage from "./pages/Blog/";
import DownloadPage from "./pages/Download/";
import WikiPage from "./pages/Blog/";

let getThemeColour = () => {
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

  console.log(themeType);
  return themeType;
};

let getThemeObject = () => {
  let themeType = getThemeColour();

  return {
    palette: {
      type: themeType,
      primary: {
        main: blue[800],
      },
      secondary: {
        main: teal["A700"],
      },
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
    },
  };
};

const theme = createMuiTheme(getThemeObject(), "Default");

const styles = {
  main: {},
};

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <TitleBar />
              {/* Main page content below */}
              <main style={styles.main}>
                <Route
                  exact={true}
                  path={ROUTES.HOME}
                  component={LandingPage}
                />
                <Route exact={true} path={ROUTES.BLOG} component={AdminPage} />
                <Route
                  exact={true}
                  path={ROUTES.DOWNLOAD}
                  component={DownloadPage}
                />
                <Route exact={true} path={ROUTES.WIKI} component={WikiPage} />
                <Route exact={true} path={ROUTES.ADMIN} component={AdminPage} />
              </main>
            </MuiThemeProvider>
          </>
        </Router>
      </>
    );
  }
}

export default App;
