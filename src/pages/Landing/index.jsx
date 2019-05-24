import React, { Component } from "react";
import Link from "../../components/Link";
import PropTypes from "prop-types";
import {
  Typography,
  withStyles,
  Paper,
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import MediaQuery from "react-responsive";
import ExternalLink from "../../components/ExternalLink";

import BookOpenPageVariantIcon from "mdi-react/BookOpenPageVariantIcon";
import DownloadIcon from "mdi-react/DownloadIcon";
import InfoIcon from "mdi-react/InfoOutlineIcon";
import ForumIcon from "mdi-react/ForumIcon";
import * as ROUTES from "../../constants/routes";

import WearOSBackdropPNG from "../../img/wearos-backdrop.png";

const styles = (theme) => ({
  center: {
    textAlign: "center",
    margin: "auto",
    display: "block",
  },
  fullWidth: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(3, 3, 0, 3),
    color: theme.palette.text.secondary,
  },
  dividerSpacing: {
    margin: theme.spacing(4, 0),
  },
  button: {
    margin: theme.spacing(1),
  },
  textoutline: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "-webkit-text-stroke": "0.45px rgba(0, 0, 0, 0.87)",
    textShadow:
      "-1px -1px 0 rgba(0, 0, 0, 0.87), 1px -1px 0 rgba(0, 0, 0, 0.87), -1px 1px 0 rgba(0, 0, 0, 0.87), 1px 1px 0 rgba(0, 0, 0, 0.87)",
  },
  mainTitle: {
    marginBottom: theme.spacing(1),
  },
});

class Landing extends Component {
  state = {
    welcomeMsgFaded: false,
  };

  render() {
    let { classes, theme } = this.props;

    return (
      <section id="landing-container" style={{ margin: "auto" }}>
        <MediaQuery query="(min-width: 700px)">
          <Paper
            id="welcome"
            style={{
              padding: "9rem 2rem",
              backgroundImage: "url(" + WearOSBackdropPNG + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            elevation={4}
            component="section"
            square={true}
          >
            <Typography
              variant="h1"
              align="center"
              gutterBottom={true}
              style={{ marginBottom: "4rem", fontWeight: 400 }}
              className={classes.textoutline}
            >
              Welcome to Quantify
            </Typography>
            <Typography
              variant="h3"
              align="center"
              gutterBottom={true}
              style={{ fontWeight: 300 }}
              className={classes.textoutline}
            >
              The "official" Wear24 ROM Project
            </Typography>
          </Paper>
        </MediaQuery>
        <MediaQuery query="(max-width: 700px)">
          <Paper
            id="welcome"
            style={{
              padding: "7rem 2rem",
              background: "url(" + WearOSBackdropPNG + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            elevation={8}
            component="section"
            square={true}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom={true}
              style={{ marginBottom: "3rem", fontWeight: 400 }}
              className={classes.textoutline}
            >
              Welcome to Quantify
            </Typography>
            <Typography
              variant="h4"
              align="center"
              gutterBottom={true}
              style={{ fontWeight: 200 }}
              className={classes.textoutline}
            >
              The "official" Wear24 ROM Project
            </Typography>
          </Paper>
        </MediaQuery>
        <MediaQuery query="(min-width: 550px)">
          <section style={{ marginTop: -16, padding: 64, maxWidth: "100%" }}>
            <Grid container spacing={6} justify="space-around">
              {LandingGridContent(classes)}
            </Grid>
          </section>
        </MediaQuery>
        <MediaQuery query="(max-width: 550px)">
          <section style={{ marginTop: 6, padding: 24, maxWidth: "100%" }}>
            <Grid container spacing={4} justify="space-around">
              {LandingGridContent(classes)}
            </Grid>
          </section>
        </MediaQuery>

        <section style={{ marginTop: 4, width: "100%" }}>
          {AboutSectionContent(classes, theme)}
        </section>
      </section>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const LandingGridContent = (classes) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.paper}>
          <CardContent>
            <ForumIcon size={50} className={classes.center} />
            <Typography variant="h4" gutterBottom={true} align="center">
              Blog
            </Typography>
            <Divider variant="middle" className={classes.dividerSpacing} />
            <Typography variant="body1" color="textPrimary" paragraph>
              We try to post regularly
              <span style={{ fontSize: "0.8em" }}>*</span> on our official
              development blog.
            </Typography>
            <Typography variant="body1" color="textPrimary" paragraph>
              Anyhow, make sure to take a look! It's where we keep a log of our
              progress, make announcements and also lay out our next steps.
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ fontSize: "0.75em" }}
            >
              * by regularly we mean not regularly
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              className={classes.button}
              component="a"
              href={ROUTES.BLOG}
            >
              View Blog
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.paper}>
          <CardContent>
            <DownloadIcon size={50} className={classes.center} />
            <Typography variant="h4" gutterBottom={true} align="center">
              Downloads
            </Typography>
            <Divider variant="middle" className={classes.dividerSpacing} />
            <Typography variant="body1" color="textPrimary" paragraph>
              We don't have any downloads up for offer yet as the project is
              still a work in progress.
            </Typography>
            <Typography variant="body1" color="textPrimary" paragraph>
              However, if you want to stay up-to-date with our progress join us
              on our{" "}
              <ExternalLink
                url="https://discord.gg/m2v6fQH"
                text="Discord Server"
                title="Discord Invite Link"
              />
              , follow the blog (info on the left) or just keep an eye on the{" "}
              <ExternalLink
                url="https://reddit.com/r/WearOS"
                text="WearOS subreddit"
                title="WearOS Subreddit"
              />{" "}
              where we post announcements whenever we make a breakthrough.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              className={classes.button}
              component={Link}
              to={ROUTES.DOWNLOAD}
            >
              View Downloads
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.paper}>
          <CardContent>
            <BookOpenPageVariantIcon size={50} className={classes.center} />
            <Typography variant="h4" gutterBottom={true} align="center">
              Documentation
            </Typography>
            <Divider variant="middle" className={classes.dividerSpacing} />
            <Typography variant="body1" color="textPrimary" paragraph>
              We strive to include high quality documentation for the Quantify
              project so that anyone can use it.
            </Typography>
            <Typography variant="body1" color="textPrimary" paragraph>
              Learn how to take apart the watch, connect it to your computer,
              install the kernel &amp; ROM as well as much more.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="secondary"
              className={classes.button}
              component={Link}
              to={ROUTES.WIKI}
            >
              View Documentation
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

const AboutSectionContent = (classes, theme) => {
  return (
    <Paper
      elevation={2}
      component="section"
      style={{
        width: "100%",
        marginBottom: -8,
        padding: theme.spacing(6),
      }}
    >
      <Typography variant="h3" className={classes.mainTitle}>
        <InfoIcon
          size={42}
          style={{ margin: "4px 8px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        About Quantify
      </Typography>
      <br />
    </Paper>
  );
};

export default withStyles(styles, { withTheme: true })(Landing);
