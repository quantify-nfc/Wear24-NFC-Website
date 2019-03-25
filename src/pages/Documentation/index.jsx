import React, { Component } from "react";
import PropTypes from "prop-types";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import {
  withStyles,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from "sweetalert2";

import LinkIcon from "mdi-react/LinkIcon";
import ContentCopyIcon from "mdi-react/ContentCopyIcon";

import * as Permalinks from "../../constants/DocShortLinks";

import "../../docs.css";

const styles = (theme) => ({
  container: {
    width: "82%",
    margin: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(5),
  },
  toolbar: {
    width: "82%",
    margin: "auto",
    marginTop: theme.spacing(10),
    padding: theme.spacing(1),
  },
});

class DocumentationHandler extends Component {
  state = {
    content: "",
    feedbackDialogOpen: false,
  };

  handleClickOpenFeedbackDialog = () => {
    this.setState({ feedbackDialogOpen: true });
  };

  handleCloseFeedbackDialog = () => {
    this.setState({ feedbackDialogOpen: false });
  };

  async componentDidMount() {
    this.refresh();
  }

  async componentDidUpdate() {
    this.refresh();
  }

  async refresh() {
    const { match } = this.props;

    let page =
      match.params[0] === "" ||
      Object.keys(match.params).length < 1 ||
      (match.params[0] === "/" && Object.keys(match.params).length === 2)
        ? "/docs/index.md"
        : "/docs" + match.params[0].toLowerCase().replace(" ", "_") + ".md";

    if (page === "/docs/.md") page = "/docs/index.md";

    console.log(page);

    fetch(page).then((response) => {
      if (!response.ok) {
        if (
          this.state.content !==
          "There was a problem loading the documentation."
        ) {
          this.setState({
            content: "There was a problem loading the documentation.",
          });
        }
      } else {
        response.text().then((data) => {
          if (data.startsWith("<!DOCTYPE html>")) {
            if (
              this.state.content !==
              "# 404: Documentation not found.\n\nNo documentation could be found with the name '" +
                match.params[0].replace("_", " ") +
                "'.\n\n[Go to Introduction](/wiki)"
            ) {
              this.setState({
                content:
                  "# 404: Documentation not found.\n\nNo documentation could be found with the name '" +
                  match.params[0].replace("_", " ") +
                  "'.\n\n[Go to Introduction](/wiki)",
              });
            }
          } else {
            if (this.state.content !== data) {
              this.setState({ content: data });
            }
          }
        });
      }
    });
  }

  render() {
    window.scrollTo(0, 0);

    const { content, feedbackDialogOpen } = this.state;
    const { classes, theme, match } = this.props;

    const mdFileName = match.params[0]
      .toLowerCase()
      .replace(" ", "_")
      .substr(1);

    const permalink = Permalinks.prefix + Permalinks.docs[mdFileName];

    return (
      <>
        <Paper className={classes.toolbar} elevation={4} key={mdFileName}>
          <div className="permalinkContainer">
            <span>
              <LinkIcon className="linkIcon" />
              {permalink}
              <CopyToClipboard
                className="copyButton"
                text={permalink}
                onCopy={() => {
                  let timerInterval;
                  Swal.fire({
                    title: "Copied!",
                    html: "Permalink copied",
                    timer: 750,
                    onClose: () => {
                      clearInterval(timerInterval);
                    },
                  });
                }}
              >
                <ContentCopyIcon />
              </CopyToClipboard>
            </span>
          </div>
          <Button
            style={{ float: "right" }}
            onClick={this.handleClickOpenFeedbackDialog}
          >
            Feedback?
          </Button>
          <div style={{ clear: "both", height: 0, width: 0 }}>&nbsp;</div>
        </Paper>
        <Paper
          className={[classes.container, "docs-" + theme.palette.type].join(
            " "
          )}
          elevation={4}
        >
          <DocumentationPage
            page={content === "" ? "# Loading documentation..." : content}
          />
        </Paper>

        <Dialog
          open={feedbackDialogOpen}
          onClose={this.handleCloseFeedbackDialog}
          aria-labelledby="feedback-dialog-title"
        >
          <DialogTitle id="feedback-dialog-title">Feedback</DialogTitle>
          <DialogContent>
            <DialogContentText paragraph>
              We're sorry to hear you're having issues.
            </DialogContentText>
            <DialogContentText paragraph>
              Please submit this short form to send some feedback. If you
              provide your email, we will reply when we implement a fix or if we
              need more information.
            </DialogContentText>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfWTs2GomNepPcFseg2CKx14NdbceUBD1ElwRx_q6Ay2XoYYA/viewform?embedded=true"
              style={{ width: "100%", height: "60vh" }}
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              seamless="seamless"
              scrolling="yes"
              title="Feedback Form"
            >
              Loading...
            </iframe>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseFeedbackDialog} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

class DocumentationPage extends Component {
  render() {
    const { page } = this.props;

    return <MarkdownRenderer content={page} />;
  }
}

DocumentationPage.propTypes = {
  page: PropTypes.string.isRequired,
};

DocumentationHandler.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  location: PropTypes.any.isRequired,
};

export default withRouter(
  withStyles(styles, { withTheme: true })(DocumentationHandler)
);
