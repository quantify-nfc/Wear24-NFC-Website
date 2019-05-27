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

import BookOpenPageVariantIcon from "mdi-react/BookOutlineIcon";
import DownloadIcon from "mdi-react/DownloadOutlineIcon";
import InfoIcon from "mdi-react/InfoOutlineIcon";
import ForumIcon from "mdi-react/ForumOutlineIcon";
import TimelineIcon from "mdi-react/TimelineOutlineIcon";

// import CollaborateIcon from "mdi-react/AccountMultipleOutlineIcon";
// import StartProjectIcon from "mdi-react/EditOutlineIcon";
// import StarIcon from "mdi-react/StarOutlineIcon";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

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
  largeSubtitle: {
    fontSize: "1.4rem",
    lineHeight: 1.75,
  },
  largeBody: {
    fontSize: "1.25rem",
    lineHeight: 1.75,
  },
  timelineHeading: {
    marginBottom: theme.spacing(0.4) + "px !important",
  },
  timelineSubheading: {
    marginBottom: theme.spacing(1.5) + "px !important",
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
              {LandingGridContent(classes, theme)}
            </Grid>
          </section>
        </MediaQuery>
        <MediaQuery query="(max-width: 550px)">
          <section style={{ marginTop: 6, padding: 24, maxWidth: "100%" }}>
            <Grid container spacing={4} justify="space-around">
              {LandingGridContent(classes, theme)}
            </Grid>
          </section>
        </MediaQuery>

        <section style={{ marginTop: 4, width: "100%" }}>
          <MediaQuery query="(min-width: 1280px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(40),
                paddingRight: theme.spacing(40),
              }}
            >
              {AboutSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(min-width: 1000px) and (max-width: 1280px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(20),
                paddingRight: theme.spacing(20),
              }}
            >
              {AboutSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(min-width: 550px) and (max-width: 1000px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(8),
                paddingRight: theme.spacing(8),
              }}
            >
              {AboutSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(max-width: 550px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
              }}
            >
              {AboutSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
        </section>

        <section style={{ marginTop: 4, width: "100%" }}>
          <MediaQuery query="(min-width: 1280px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(40),
                paddingRight: theme.spacing(40),
              }}
            >
              {TimelineSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(min-width: 1000px) and (max-width: 1280px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(20),
                paddingRight: theme.spacing(20),
              }}
            >
              {TimelineSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(min-width: 900px) and (max-width: 1000px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(8),
                paddingRight: theme.spacing(8),
              }}
            >
              {TimelineSectionContent(classes, theme)}
            </Paper>
          </MediaQuery>
          <MediaQuery query="(max-width: 900px)">
            <Paper
              elevation={2}
              component="section"
              style={{
                width: "100%",
                marginBottom: -8,
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
                paddingLeft: theme.spacing(4),
                paddingRight: theme.spacing(4),
              }}
            >
              <Typography variant="h3">
                Please orient your device in landscape mode to view our project
                timeline.
              </Typography>
            </Paper>
          </MediaQuery>
        </section>
      </section>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const LandingGridContent = (classes, theme) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.paper}>
          <CardContent>
            <ForumIcon
              size={50}
              className={classes.center}
              color={theme.palette.secondary.main}
            />
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
            <DownloadIcon
              size={50}
              className={classes.center}
              color={theme.palette.secondary.main}
            />
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
            <BookOpenPageVariantIcon
              size={50}
              className={classes.center}
              color={theme.palette.secondary.main}
            />
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
    <>
      <Typography variant="h2" className={classes.mainTitle}>
        <InfoIcon
          size={56}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        About Quantify
      </Typography>
      <br />
      <Typography
        gutterBottom
        variant="subtitle1"
        paragraph
        className={classes.largeSubtitle}
      >
        Quantify is a project created and maintained by two students:{" "}
        <ExternalLink url="https://github.com/JaredTheWolf">
          'Jared'
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink url="https://github.com/davwheat">
          'davwheat'
        </ExternalLink>
        . Our aim is to activate NFC (including Google Pay/Mobile Payments) on
        the{" "}
        <ExternalLink url="https://www.verizonwireless.com/connected-devices/verizon-wear24/">
          Verizon Wear24 smartwatch
        </ExternalLink>
        . A feature that Verizon promised but never delivered.
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        paragraph
        className={classes.largeBody}
      >
        All of our progress is tracked and committed on GitHub via our
        organisation, Quantify-NFC. You can access our repositories via the
        "octo-cat" button in the top right. Anyone can fork our project, create
        changes or open a pull request. We love contributions!
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        paragraph
        className={classes.largeBody}
      >
        We use the{" "}
        <ExternalLink url="https://source.android.com/">
          Android Open Source Project
        </ExternalLink>{" "}
        for our custom ROM and Kernel, distributed under the licenses described
        on the{" "}
        <ExternalLink url="https://source.android.com/setup/start/licenses">
          AOSP Licenses page
        </ExternalLink>
        . Any repositories other repositories created by Quantify on their
        GitHub are license-free unless otherwise stated.
      </Typography>
    </>
  );
};

const TimelineSectionContent = (classes, theme) => {
  return (
    <>
      <Typography variant="h2" className={classes.mainTitle}>
        <TimelineIcon
          size={56}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Progress Timeline
      </Typography>
      <br />
      <Timeline lineColor={"rgba(0,0,0,0.2)"}>
        <TimelineItem
          key="001"
          dateComponent={
            <Paper
              elevation={8}
              style={{
                float: "left",
                minWidth: "75%",
                maxWidth: "75%",
                padding: theme.spacing(2),
                color: theme.palette.secondary.main,
              }}
            >
              <Typography variant="h6">September 2018</Typography>
            </Paper>
          }
          dateInnerStyle={{ background: "rgba(0,0,0,0.6)", color: "#eee" }}
        >
          <Paper elevation={16} style={{ padding: theme.spacing(4) }}>
            <Typography variant="h4" className={classes.timelineHeading}>
              Project Started
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.timelineSubheading}
            >
              The Wear24 NFC project was born
            </Typography>
            <Typography variant="body1">
              Jared initially created the Wear24 NFC Project to port Google Pay
              to the Wear24 on the XDA Forums.
            </Typography>
          </Paper>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateComponent={
            <Paper
              elevation={8}
              style={{
                float: "left",
                width: "75%",
                padding: theme.spacing(2),
                color: theme.palette.secondary.main,
              }}
            >
              <Typography variant="h6">January 2019</Typography>
            </Paper>
          }
          dateInnerStyle={{ background: "rgba(0,0,0,0.6)", color: "#eee" }}
        >
          <Paper elevation={16} style={{ padding: theme.spacing(4) }}>
            <Typography variant="h4" className={classes.timelineHeading}>
              davwheat joined
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.timelineSubheading}
            >
              More hands on deck!
            </Typography>
            <Typography variant="body1">
              After buying his own Wear24, davwheat heard about the project on
              the XDA Developer Forums and began to collaborate with Jared on
              the project.
            </Typography>
          </Paper>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={
            <Paper
              elevation={8}
              style={{
                float: "left",
                width: "75%",
                padding: theme.spacing(2),
                color: theme.palette.secondary.main,
              }}
            >
              <Typography variant="h6">February/March 2019</Typography>
            </Paper>
          }
          dateInnerStyle={{ background: "rgba(0,0,0,0.6)", color: "#eee" }}
        >
          <Paper elevation={16} style={{ padding: theme.spacing(4) }}>
            <Typography variant="h4" className={classes.timelineHeading}>
              Building Kernel
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.timelineSubheading}
            >
              Working Dorado Kernel
            </Typography>
            <Typography variant="body1">
              Using the Android Open Source Project and Quanta's dorado source
              files, we built our own Android Kernel for the Wear24 with several
              performance and battery improvements.
            </Typography>
          </Paper>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={
            <Paper
              elevation={8}
              style={{
                float: "left",
                width: "75%",
                padding: theme.spacing(2),
                color: theme.palette.secondary.main,
              }}
            >
              <Typography variant="h6">Q3/Q4 2019</Typography>
            </Paper>
          }
          dateInnerStyle={{ background: "rgba(0,0,0,0.6)", color: "#eee" }}
        >
          <Paper elevation={16} style={{ padding: theme.spacing(4) }}>
            <Typography variant="h4" className={classes.timelineHeading}>
              Building ROM
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.timelineSubheading}
            >
              Working NFC ROM &amp; Kernel
            </Typography>
            <Typography variant="body1">
              We aim to have a fully functional version of WearOS available for
              the Wear24 by the end of 2019. A version which has many battery
              improvements, no bloatware and, most importantly, NFC!
            </Typography>
          </Paper>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(Landing);
