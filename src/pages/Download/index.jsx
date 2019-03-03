import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
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

import * as ROUTES from "../../constants/routes";
import DownloadUrls from "../../constants/downloads";

import DownloadIcon from "mdi-react/DownloadIcon";

const styles = (theme) => ({
  mainSection: {
    width: "75%",
    margin: "96px auto 64px auto",
    padding: theme.spacing(6),
  },
  mainTitle: {
    marginBottom: theme.spacing(1),
  },
  dividerSpace: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
});

class DownloadsPage extends Component {
  state = {};
  render() {
    const { classes, theme } = this.props;

    return (
      <>
        <Paper elevation={4} className={classes.mainSection}>
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
                Our ROM is a modification of the latest WearOS 2.0 ROM for the
                Wear24. We just modify the system services and add a few bug
                fixes and optimisations: everything else stays! Because of this,
                the ROM is more stable, safer, and more likely to pass the
                SafetyNet test.
              </Typography>
              <Typography variant="body1" paragraph>
                The ROM installer defaults to installing our custom Kernel, the
                Verizon apps (e.g. Verizon Messages; MyVerizon; Charging
                Display). You want to make sure you install these if you use
                Verizon's LTE on the watch. Note that they are NOT needed if you
                do not. The 'Charging App' is the screen that appears when you
                put the watch on the charging dock.
              </Typography>
              <Typography variant="body2" paragraph>
                For more information, see the{" "}
                <Link to={ROUTES.WIKI + "/ROM-Information"}>
                  Documentation.
                </Link>
              </Typography>
            </section>
            <br />
            <section id="kernel">
              <Typography variant="h4">Kernel Packages</Typography>
              <Divider variant="fullWidth" className={classes.dividerSpace} />
              <Typography variant="body1" paragraph>
                The Quantify Kernel is custom-built from the dorado branch of
                the Android Open Source Project repository. It is currently
                fully working (so far) and you can download it below.
              </Typography>
              <Typography variant="body1" paragraph>
                Please note that{" "}
                <strong>
                  the kernel is included in the ROM download package
                </strong>{" "}
                so you only need to download it if you need to reflash it, wish
                to install it separately, or choose not to install it when
                prompted.
              </Typography>
              <Typography variant="body2" paragraph>
                For more information, see the{" "}
                <Link to={ROUTES.WIKI + "/ROM-Information"}>
                  Documentation.
                </Link>
              </Typography>
              <br />
              <Typography variant="h6" gutterBottom={true}>
                Downloads
              </Typography>
              <Chip
                color="primary"
                deleteIcon={<DownloadIcon />}
                onDelete={() => {}}
                clickable
                avatar={<Avatar>v2</Avatar>}
                label="v2.0.0 - Public Release"
                component="a"
                href={DownloadUrls.KERNEL["2.0.0"]}
                className={classes.chip}
                download
              />
              <Chip
                color="secondary"
                variant="outlined"
                deleteIcon={<DownloadIcon />}
                onDelete={() => {}}
                clickable
                avatar={<Avatar>v1</Avatar>}
                label="v1.0-alpha - Initial Release [Unstable]"
                component="a"
                href={DownloadUrls.KERNEL["1.0.0"]}
                className={classes.chip}
                download
              />
            </section>
            <br />
            <section id="source">
              <Typography variant="h4">Source Code</Typography>
            </section>
          </section>
        </Paper>
      </>
    );
  }
}

DownloadsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DownloadsPage);
