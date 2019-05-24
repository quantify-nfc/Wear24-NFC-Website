import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Link from "../../components/Link";
import {
  Paper,
  Typography,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Avatar,
} from "@material-ui/core";
import ExternalLink from "../../components/ExternalLink";
import MediaQuery from "react-responsive";

import * as ROUTES from "../../constants/routes";
import DownloadInfo from "../../constants/downloads";
import * as EXTERNAL_URLS from "../../constants/externalUrls";

import DownloadIcon from "mdi-react/DownloadOutlineIcon";

const styles = (theme) => ({
  mainSection: {
    margin: "96px auto 64px auto",
  },
  mainTitle: {
    marginBottom: theme.spacing(1),
  },
  dividerSpace: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
  },
});

class DownloadsPage extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <>
        <MediaQuery query="(min-width: 1000px)">
          <Paper
            elevation={4}
            className={classes.mainSection}
            style={{
              width: "75%",
              padding: theme.spacing(6),
            }}
          >
            {DownloadContent(classes, theme)}
          </Paper>
        </MediaQuery>
        <MediaQuery query="(min-width: 775px) and (max-width: 999px)">
          <Paper
            elevation={4}
            className={classes.mainSection}
            style={{
              width: "85%",
              padding: theme.spacing(5),
            }}
          >
            {DownloadContent(classes, theme)}
          </Paper>
        </MediaQuery>
        <MediaQuery query="(min-width: 600px) and (max-width: 774px)">
          <Paper
            elevation={4}
            className={classes.mainSection}
            style={{
              width: "95%",
              padding: theme.spacing(5),
            }}
          >
            {DownloadContent(classes, theme)}
          </Paper>
        </MediaQuery>
        <MediaQuery query="(max-width: 599px)">
          <Paper
            elevation={4}
            className={classes.mainSection}
            style={{
              width: "100%",
              padding: theme.spacing(4.5),
            }}
          >
            {DownloadContent(classes, theme)}
          </Paper>
        </MediaQuery>
      </>
    );
  }
}

const DownloadContent = (classes, theme) => {
  return (
    <section>
      <Typography variant="h3" className={classes.mainTitle}>
        <DownloadIcon
          size={42}
          style={{ margin: "4px 8px 0 0", float: "left" }}
          color={theme.palette.secondary.main}
        />
        Downloads &amp; Source Code
      </Typography>
      <br />
      <section id="contents">
        <Typography variant="h4" gutterBottom={true}>
          Contents
        </Typography>
        <List>
          <ListItem button component="a" href="#rom">
            <ListItemText primary="ROM Packages" />
          </ListItem>
          <ListItem button component="a" href="#kernel">
            <ListItemText primary="Kernel Packages" />
          </ListItem>
          <ListItem button component="a" href="#source">
            <ListItemText primary="Source Code" />
          </ListItem>
        </List>
      </section>
      <br />
      <section id="rom">
        <Typography variant="h4">ROM Packages</Typography>
        <Divider variant="fullWidth" className={classes.dividerSpace} />
        <Typography variant="body1" paragraph>
          Our ROM is a modification of the latest WearOS 2.0 ROM for the Wear24.
          We just modify the system services and add a few bug fixes and
          optimisations: everything else stays! Because of this, the ROM is more
          stable, safer, and more likely to pass the SafetyNet test.
        </Typography>
        <Typography variant="body1" paragraph>
          The ROM installer defaults to installing our custom Kernel, removing
          the Verizon apps (e.g. Verizon Messages; MyVerizon; Charging Display),
          and using the Wear OS boot animation.
        </Typography>
        <Typography variant="body1" paragraph>
          You want to make sure you keep Verizon's apps if you use Verizon's LTE
          on the watch. Note that they are NOT needed if you do not. The
          'Charging App' is the screen that appears when you put the watch on
          the charging dock, and if you like that specific app, there's one on
          the Play Store that works much better.
        </Typography>
        <Typography variant="body2" paragraph>
          For more information, see the{" "}
          <Link to={ROUTES.WIKI}>Documentation.</Link>
        </Typography>
        <br />
        <Typography variant="h6" gutterBottom={true}>
          Downloads
        </Typography>
        <ROMDownloads />
      </section>
      <br />
      <section id="kernel">
        <Typography variant="h4">Kernel Packages</Typography>
        <Divider variant="fullWidth" className={classes.dividerSpace} />
        <Typography variant="body1" paragraph>
          The Quantify Kernel is custom-built from the dorado branch of the
          Android Open Source Project repository. It is currently fully working
          (so far) and you can download it below.
        </Typography>
        <Typography variant="body1" paragraph>
          Please note that{" "}
          <strong>the kernel is included in the ROM download package</strong> so
          you only need to download it if you need to reflash it, wish to
          install it separately, or choose not to install it when prompted.
        </Typography>
        <Typography variant="body2" paragraph>
          For more information, see the{" "}
          <Link to={ROUTES.WIKI}>Documentation.</Link>
        </Typography>
        <br />
        <Typography variant="h6" gutterBottom={true}>
          Downloads
        </Typography>
        <KernelDownloads />
      </section>
      <br />
      <section id="source">
        <Typography variant="h4">Source Code</Typography>
        <Divider variant="fullWidth" className={classes.dividerSpace} />
        <Typography variant="body1" paragraph>
          We want to allow any and all contributions towards our project and,
          for this reason, we have made it Open Source. Note that some files may
          not be published due to copyright restrictions.
        </Typography>
        <Typography variant="body1" paragraph>
          If you ever encounter an issue then either: let us know on Discord;
          use the contact form link at the bottom of every page; or open a
          GitHub issue on the respective repository. The last option is best as
          it allows us to easily document the problem for the future and contact
          you more easily.
        </Typography>
        {/*<br />*/}
        <Typography variant="h6" gutterBottom={true}>
          Repositories
        </Typography>
        <ExternalLink
          url={EXTERNAL_URLS.GITHUB_KERNEL_REPO}
          text="Kernel Repository"
          title="GitHub Repository for the Quantify Kernel"
        />
        <br />
        <ExternalLink
          url={EXTERNAL_URLS.GITHUB_ROM_REPO}
          text="ROM Repository"
          title="GitHub Repository for the Quantify ROM"
        />
      </section>
    </section>
  );
};

class ROMDownloads extends Component {
  render() {
    return (
      <>
        {DownloadInfo.ROM.reverse().map((data) => (
          <Chip
            color="primary"
            deleteIcon={<DownloadIcon />}
            onDelete={() => {}}
            clickable
            avatar={
              <Avatar
                style={{
                  color: "#fff",
                  backgroundColor: "rgb(14, 70, 134)",
                  width: 32,
                  height: 32,
                  fontSize: "1rem",
                }}
              >
                {data.shortcode}
              </Avatar>
            }
            label={data.label}
            component="a"
            href={data.downloadUrl}
            style={{ margin: 8 }}
            download
          />
        ))}
      </>
    );
  }
}

class KernelDownloads extends Component {
  render() {
    return (
      <>
        {DownloadInfo.KERNEL.reverse().map((data) => (
          <Chip
            color="primary"
            deleteIcon={<DownloadIcon />}
            onDelete={() => {}}
            clickable
            avatar={
              <Avatar
                style={{
                  color: "#fff",
                  backgroundColor: "rgb(14, 70, 134)",
                  width: 32,
                  height: 32,
                  fontSize: "1rem",
                }}
              >
                {data.shortcode}
              </Avatar>
            }
            label={data.label}
            component="a"
            href={data.downloadUrl}
            style={{ margin: 8 }}
            download
          />
        ))}
      </>
    );
  }
}

DownloadsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DownloadsPage);
