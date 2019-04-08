import React, { Component } from "react";
import MediaQuery from "react-responsive";
import {
  Typography,
  withStyles,
  Paper,
  Divider,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import BetterLink from "../../components/Link";
import Masonry from "react-masonry-component";

import PropTypes from "prop-types";
//import clsx from "clsx";
import { createStyles as makeStyles } from "@material-ui/core/styles";

import AndroidIcon from "mdi-react/AndroidIcon";
import PlayStoreIcon from "mdi-react/GooglePlayIcon";
import ForumIcon from "mdi-react/ForumIcon";
import WebIcon from "mdi-react/WebIcon";

import InAppPurchasesIcon from "mdi-react/CashMultipleIcon";
import PaidAppIcon from "mdi-react/CurrencyUsdIcon";

const AppList = [
  {
    title: "Button Launcher",
    subtitle: "App quick launch for Wear OS",
    icon: require("../../img/apps/button_launcher_icon.png"),
    expandedContent: (<>
        <Typography variant="body1" paragraph color="textPrimary">
          Button Launcher is an open-source and free app for Wear OS that allows you to setup app launching shortcuts
          based on button presses for your watch.
        </Typography>
        <Typography variant="body1" paragraph color="textPrimary">
          For example, the app allows you (with the Wear24) to setup a default long-press action, as well as a
          long-press + long-press action. This is useful if you want to retain Google Assistant functionality while also
          wanting to be able to quickly launch a second app, like Maps or Google Pay.
        </Typography></>
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brouken.wear.butcher",
    forumUrl: "https://forum.xda-developers.com/wear-os/development/app-button-launcher-button-shortcuts-t3757005",
  },
  {
    title: "Nav Explorer",
    subtitle: "Easily transfer files to your watch",
    icon: require("../../img/apps/nav_explorer_icon.png"),
    expandedContent: (<>
        <Typography variant="body1" paragraph color="textPrimary">
          Nav Explorer is the completely free solution for transferring files between your Android phone, PC and
          smartwatch.
        </Typography>
        <Typography variant="body1" paragraph color="textPrimary">
          Nav Explorer connects to your watch through WiFi or Bluetooth to allow the transfer of files. The app also
          allows you to turn your Wear OS watch into a FTP (File Transfer Protocol) server so you can access its files
          and transfer them between almost any device.
        </Typography></>
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.turndapage.navexplorer",
    forumUrl: "https://forum.xda-developers.com/wear-os/development/navexplorer-easy-android-wifi-file-t3720651",
    websiteUrl: "http://turndapage.com/navexplorer/",
    inAppPurchases: true,
  },
  {
    title: "Wear Casts",
    subtitle: "Stream or download your favourite podcasts from your Wear OS watch",
    icon: require("../../img/apps/wear_casts_icon.png"),
    expandedContent: (
      <>
        <Typography variant="body1" paragraph color="textPrimary">
          Wear Casts is a standalone podcast app for Wear OS and Android which allows you to (automatically and manually)
          download episodes of your favourite podcasts and create custom playlists for downloaded episodes. You can also
          import OPMLs into the app. Wear Casts also offers background syncing and notifications for new podcast episodes
          and it also responds to external audio controls. The Android app is only needed for importing the podcasts.
        </Typography>
        <Typography variant="body1" paragraph color="textPrimary">
          Wear Casts offers some paid "premium" features, such as: playback speed; skipping forward/back in X seconds;
          themed interfaces; start/end at times; and more.
        </Typography>
      </>
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.krisdb.wearcasts",
    forumUrl: "https://forum.xda-developers.com/wear-os/development/app-wear-casts-worlds-standalone-t3737371",
    inAppPurchases: true,
  },
  {
    title: "AccuWeather: Weather Forecast & Local Rain Alerts",
    subtitle: "One of the best weather complications available?",
    icon: require("../../img/apps/accuweather_icon.png"),
    expandedContent: (
      <>
        <Typography variant="body1" paragraph color="textPrimary">
          AccuWeather is fairly well known but their Wear OS app is one of the best weather apps available, beating the
          pre-installed Google Weather app by miles. The app provides you with <strong>accu</strong>rate weather for in
          hourly and daily forecasts, as well as right now.
        </Typography>
        <Typography variant="body1" paragraph color="textPrimary">
          The app also provides you with 6 different weather complications which you can use all at once, if you feel so
          inclined. They are: Cloud Cover; Current Conditions (weather, not temp.); Precipitation (percentage chance);
          RealFeel (the temp. it feels like); Temperature (weather and temp.); and Wind Speed.
        </Typography>
        <Typography variant="body1" paragraph color="textPrimary">
          The app also provides you with a custom analog watch face with AccuWeather branding. It shows the current
          conditions (in text, e.g. 'Partly cloudy') as well as 3 customisable complication slots.
        </Typography>
      </>
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.accuweather.android",
    websiteUrl: "https://www.accuweather.com/",
    inAppPurchases: true,
  },
];

const styles = (theme) => ({
  mainSection: {
    margin: "96px auto 64px auto",
  },
  mainTitle: {
    marginBottom: theme.spacing(1),
  },
  padding: {
    marginBottom: theme.spacing(2),
  },
  listItem: {
    marginTop: theme.spacing(1),
  },
  dividerMargin: {
    marginBottom: theme.spacing(2),
  },
});

class RecommendedAppsPage extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <section>
        <MediaQuery query="(min-width: 1000px)">
          <Paper
            elevation={ 4 }
            className={ classes.mainSection }
            style={ {
              width: "75%",
              padding: theme.spacing(6),
            } }
          >
            <AppsContent classes={ classes } theme={ theme }/>
          </Paper>
        </MediaQuery>
        <MediaQuery query="(min-width: 775px) and (max-width: 999px)">
          <Paper
            elevation={ 4 }
            className={ classes.mainSection }
            style={ {
              width: "85%",
              padding: theme.spacing(5),
            } }
          >
            <AppsContent classes={ classes } theme={ theme }/>
          </Paper>
        </MediaQuery>
        <MediaQuery query="(min-width: 600px) and (max-width: 774px)">
          <Paper
            elevation={ 4 }
            className={ classes.mainSection }
            style={ {
              width: "95%",
              padding: theme.spacing(5),
            } }
          >
            <AppsContent classes={ classes } theme={ theme }/>
          </Paper>
        </MediaQuery>
        <MediaQuery query="(max-width: 599px)">
          <Paper
            elevation={ 4 }
            className={ classes.mainSection }
            style={ {
              width: "100%",
              padding: theme.spacing(4.5),
            } }
          >
            <AppsContent classes={ classes } theme={ theme }/>
          </Paper>
        </MediaQuery>
      </section>
    );
  }
}

class AppsContent extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <>
        <Typography variant="h3" className={ classes.mainTitle }>
          <AndroidIcon
            size={ 42 }
            style={ { margin: "4px 8px 0 0", float: "left" } }
            color={ theme.palette.secondary.main }
          />
          Recommended Apps
        </Typography>
        <br/>
        <Typography variant="body1" paragraph>
          No, we're not sponsored. No, we're not being paid to put this here. No,
          we don't get anything for this. We just <strong>really</strong> like
          these apps!
        </Typography>
        <Divider variant="middle" className={ classes.dividerMargin }/>
        <Typography variant="body1" paragraph>
        <span style={ { color: "red" } }>
          <strong>CAUTION!</strong>
        </span>
          <br/>
          Please note these apps are not made by us (unless stated) and therefore
          we do not control the content of these apps. Please be wary of what you
          download at all times. Do not side-load applications unless you know what
          you're doing and you can trust them.
        </Typography>
        <Divider variant="middle" className={ classes.dividerMargin }/>
        <br/>

        <Typography variant="h4" className={ classes.mainTitle }>
          App List
        </Typography>
        <br/>

        <Masonry
          className={ "app-grid-list" }
          options={ { fitWidth: true } }
          style={ { margin: "auto" } }
        >
            { AppList.map((item) => (
              <AppCard { ...item } />
            )) }
          </Masonry>
      </>
    );
  }
}

const UseCardStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: "transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

class AppCard extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {expanded: false};
  // }

  // handleExpandClick = () => {
  //   this.setState({expanded: !this.state.expanded});
  // };

  render() {
    const {
      title,
      subtitle,
      icon,
      expandedContent,
      playStoreUrl,
      forumUrl,
      websiteUrl,
      style,
      paid,
      inAppPurchases,
    } = this.props;

    // const {expanded} = this.state;

    const classes = UseCardStyles();

    const cardActions = (
      <Typography color={ "textSecondary" }>
        { inAppPurchases ? (
          <Tooltip
            title="In-app purchases"
            aria-label="In-app purchases"
            placement={ "top" }
          >
            <InAppPurchasesIcon size={ 24 }/>
          </Tooltip>) : ""
        }
        { paid ? (
          <Tooltip
            title="Paid app"
            aria-label="Paid app"
            placement={ "top" }
          >
            <PaidAppIcon size={ 24 }/>
          </Tooltip>) : ""
        }
      </Typography>
    );

    return (

      <Card key={ title } style={ {
        maxWidth: 450,
        width: "min(30%, 400px)",
        minWidth: "30vw",
        marginRight: 16,
        marginBottom: 16,
        ...style,
      } } className={ classes.card } elevation={ 4 }>
<CardHeader
  avatar={
    <img src={ icon } alt={ title + " icon" } className={ classes.icon } style={ {
      width: 48,
      height: 48,
      borderRadius: "50%",
    } }/>
  }
  title={ title }
  subheader={ subtitle }
  action={ cardActions }
/>
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
{/*{briefContent}*/ }
  { expandedContent }
</Typography>
</CardContent>
<CardActions className={ classes.actions } disableActionSpacing>
<Tooltip
  title="Open in Google Play Store"
  aria-label="Open in Google Play Store"
  placement={ "top" }
>
<IconButton aria-label="Open in Google Play Store">
<BetterLink
  target="_blank"
  to={ playStoreUrl }
  style={ { width: 24, height: 24 } }
>
<PlayStoreIcon/>
</BetterLink>
</IconButton>
</Tooltip>

  { forumUrl ? (
    <Tooltip
      title="Open development forum"
      aria-label="Open development forum"
      placement={ "top" }
    >
      <IconButton aria-label="Open development forum">
        <BetterLink
          target="_blank"
          to={ forumUrl }
          style={ { width: 24, height: 24 } }
        >
          <ForumIcon/>
        </BetterLink>
      </IconButton>
    </Tooltip>) : (
    <Tooltip
      title="Open development forum (disabled)"
      aria-label="Open development forum (disabled)"
      placement={ "top" }
    >
      <div>
        <IconButton aria-label="Open development forum (disabled)" disabled={ true }>
          <ForumIcon
            style={ { width: 24, height: 24 } }/>
        </IconButton>
      </div>
      </Tooltip>
  ) }

  { websiteUrl ? (
    <Tooltip
      title="Open official website"
      aria-label="Open official website"
      placement={ "top" }
    >
      <IconButton aria-label="Open official website">
        <BetterLink
          target="_blank"
          to={ websiteUrl }
          style={ { width: 24, height: 24 } }
        >
          <WebIcon/>
        </BetterLink>
      </IconButton>
    </Tooltip>) : (
    <Tooltip
      title="Open official website (disabled)"
      aria-label="Open official website (disabled)"
      placement={ "top" }
    >
      <div>
        <IconButton aria-label="Open official website (disabled)" disabled={ true }>
          <WebIcon
            style={ { width: 24, height: 24 } }/>
        </IconButton>
      </div>
    </Tooltip>) }

  {/*
          <Tooltip
            title="Read more"
            aria-label="Read more"
            placement={"top"}
          >
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,S
              })}
              onClick={this.handleExpandClick}
              aria-expanded={expanded}
              aria-label="Read more"
            >
              <ExpandMoreIcon/>
            </IconButton>
          </Tooltip>
          */ }
</CardActions>
        {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/ }
        {/*  <CardContent>{expandedContent}</CardContent>*/ }
        {/*</Collapse>*/ }
</Card>
    )
      ;
  }
}

RecommendedAppsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

AppCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  expandedContent: PropTypes.any.isRequired,
  playStoreUrl: PropTypes.string.isRequired,
  forumUrl: PropTypes.string,
  websiteUrl: PropTypes.string,
  style: PropTypes.object,
  paid: PropTypes.bool,
  inAppPurchases: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(RecommendedAppsPage);
