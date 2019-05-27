import React, { Component } from "react";
import PropTypes from "prop-types";

import Swal from "sweetalert2";
import CopyToClipboard from "react-copy-to-clipboard";

import {
  Typography,
  withStyles,
  Paper,
  List,
  ListItem,
  ListItemText,
  // ListItemAvatar,
  // Avatar,
  IconButton,
  ListItemSecondaryAction,
  Tooltip,
} from "@material-ui/core";
import MediaQuery from "react-responsive";

import RedditIcon from "mdi-react/RedditIcon";
import DiscordIcon from "mdi-react/DiscordIcon";
import GithubIcon from "mdi-react/GithubCircleIcon";
import EmailIcon from "mdi-react/EmailOutlineIcon";

// import PersonIcon from "mdi-react/PersonOutlineIcon";
import PeopleIcon from "mdi-react/AccountGroupOutlineIcon";
import CodeIcon from "mdi-react/CodeTagsIcon";
import HelperIcon from "mdi-react/AccountHelpOutlineIcon";
import DonatorIcon from "mdi-react/CurrencyUsdIcon";
import ThanksIcon from "mdi-react/ThumbsUpOutlineIcon";

const styles = (theme) => ({
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
  mainTitle: {
    marginBottom: theme.spacing(1),
    wordWrap: "break-word",
  },
  list: {
    width: "85%",
    margin: "auto",
    background:
      theme.palette.type === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.07)",
    borderRadius: theme.spacing(1),
  },
  listSecondaryActions: {
    margin: theme.spacing(0, 0.25),
  },
});

class AcknowledgmentsPage extends Component {
  state = {};
  render() {
    const { classes, theme } = this.props;

    return (
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
            {AcknowledgmentContent(classes, theme)}
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
            {AcknowledgmentContent(classes, theme)}
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
            {AcknowledgmentContent(classes, theme)}
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
            {AcknowledgmentContent(classes, theme)}
          </Paper>
        </MediaQuery>
      </section>
    );
  }
}

AcknowledgmentsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AcknowledgmentsPage);

const AcknowledgmentContent = (classes, theme) => {
  return (
    <>
      <Typography variant="h2" className={classes.mainTitle}>
        <PeopleIcon
          size={56}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Acknowledgments
      </Typography>
      <br />
      <Typography variant="subtitle1" gutterBottom>
        Many people have helped us in various ways throughout this project and
        they deserve a special thanks.
      </Typography>
      <br />
      <Typography variant="body1" paragraph>
        Below, you can find a list of people who have contributed towards this
        project in some way. Whether they're the development team, donators,
        contributors, beta testers or maintainers of other projects that have
        helped us, they all deserve a special thanks from us.
      </Typography>
      <br />
      <Typography variant="body2" paragraph>
        Discord usernames are accurate as of writing. Nothing is stopping these
        people changing their usernames and I can't easily track the changes.
      </Typography>
      <br />
      <Typography variant="h3">
        <CodeIcon
          size={48}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Development Team
      </Typography>
      <br />
      {CreateList(DevelopmentTeam, classes, theme)}
      <br />
      <Typography variant="h3">
        <DonatorIcon
          size={48}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Donators
      </Typography>
      <br />
      {CreateList(Donators, classes, theme)}
      <br />
      <Typography variant="h3">
        <HelperIcon
          size={48}
          style={{ margin: "1px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Other Contributors
      </Typography>
      <br />
      {CreateList(OtherHelpers, classes, theme)}
      <br />
      <Typography variant="h3">
        <ThanksIcon
          size={44}
          style={{ margin: "3px 16px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Special Thanks To...
      </Typography>
      <br />
      {CreateList(SpecialThanks, classes, theme)}
    </>
  );
};

const DevelopmentTeam = [
  {
    name: "David Wheatley",
    nickname: "davwheat/MrJeeves",
    redditUrl: "https://reddit.com/u/davwheat",
    discordUsername: "MrJeeves#6969",
    githubUrl: "https://github.com/davwheat",
    email: "davidwheatley03@gmail.com",
  },
  {
    name: '"Jared"',
    nickname: "JaredTheWolf(y)",
    redditUrl: "https://reddit.com/u/JaredTheWolfy",
    discordUsername: "Jared#8378",
    githubUrl: "https://github.com/JaredTheWolf",
    email: "jaredtamana@gmail.com",
  },
];

const Donators = [
  {
    name: '"bensdeals"',
    nickname: "",
    redditUrl: "https://reddit.com/u/davwheat",
    discordUsername: "bensdeals#8637",
    githubUrl: null,
    email: null,
  },
];

const OtherHelpers = [
  {
    name: '"lerxi"',
    nickname: "Helped with old ROM building",
    redditUrl: "https://reddit.com/u/lerxi",
    discordUsername: "lerxi#8632",
    githubUrl: null,
    email: null,
  },
  {
    name: '"Xsavi Xander"',
    nickname: "Helped with old ROM building",
    redditUrl: null,
    discordUsername: "Xsavi Xander#7839",
    githubUrl: null,
    email: null,
  },
  {
    name: '"Timo"',
    nickname: "All-round helping hand for Kernel",
    redditUrl: "https://reddit.com/u/iCapa",
    discordUsername: "Timo#2874",
    githubUrl: null,
    email: null,
  },
];

const SpecialThanks = [
  {
    name: "Maxim Korenko (mkorenko)",
    nickname: "TWRP Recovery",
    redditUrl: "https://reddit.com/u/mkorenko",
    discordUsername: null,
    githubUrl: "https://github.com/mkorenko",
    email: null,
  },
  {
    name: "Jericho Lu (jericho.lu)",
    nickname: "Quanta employee for dorado development",
    redditUrl: null,
    discordUsername: null,
    githubUrl: null,
    email: "jericho.lu@quantatw.com",
  },
  {
    name: "All of our Discord Members and Quantify Users",
    nickname: "Helping us pull through and provide this modification",
    redditUrl: null,
    discordUsername: null,
    githubUrl: null,
    email: null,
  },
];

const CreateList = (items, classes, theme) => {
  return (
    <List dense className={classes.list}>
      {items.map((item, i) => {
        return (
          <ListItem key={i}>
            <ListItemText primary={item.name} secondary={item.nickname} />
            <ListItemSecondaryAction>
              {item.redditUrl == null ? (
                ""
              ) : (
                <Tooltip
                  title="Reddit"
                  placement="top"
                  className={classes.listSecondaryActions}
                >
                  <IconButton
                    edge="end"
                    aria-label="Reddit"
                    href={item.redditUrl}
                    target="_blank"
                  >
                    <RedditIcon color={theme.palette.secondary.main} />
                  </IconButton>
                </Tooltip>
              )}
              {item.discordUsername == null ? (
                ""
              ) : (
                <Tooltip
                  title="Discord Username"
                  placement="top"
                  className={classes.listSecondaryActions}
                >
                  <IconButton edge="end" aria-label="Discord Username" href="#">
                    <CopyToClipboard
                      text={item.discordUsername}
                      onCopy={() => {
                        Swal.fire({
                          title: "Copied!",
                          html: "Discord username copied to clipboard",
                          timer: 1000,
                        });
                      }}
                    >
                      <DiscordIcon color={theme.palette.secondary.main} />
                    </CopyToClipboard>
                  </IconButton>
                </Tooltip>
              )}
              {item.githubUrl == null ? (
                ""
              ) : (
                <Tooltip
                  title="GitHub"
                  placement="top"
                  className={classes.listSecondaryActions}
                >
                  <IconButton
                    edge="end"
                    aria-label="GitHub"
                    href={item.githubUrl}
                    target="_blank"
                  >
                    <GithubIcon color={theme.palette.secondary.main} />
                  </IconButton>
                </Tooltip>
              )}
              {item.email == null ? (
                ""
              ) : (
                <Tooltip
                  title="Send Email"
                  placement="top"
                  className={classes.listSecondaryActions}
                >
                  <IconButton
                    edge="end"
                    aria-label="Send Email"
                    href={"mailto:" + item.email}
                    target="_blank"
                  >
                    <EmailIcon color={theme.palette.secondary.main} />
                  </IconButton>
                </Tooltip>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
