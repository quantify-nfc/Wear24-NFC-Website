import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import MarkdownLinkRenderer from "./MarkdownLinkRenderer";

const styles = (theme) => ({
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

const options = {
  overrides: {
    h1: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Typography
          className={classes.padding}
          gutterBottom
          variant="h3"
          {...props}
        />
      )),
    },
    h2: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <div className="md-header-container">
          <Typography
            className={classes.padding}
            gutterBottom
            variant="h5"
            {...props}
          />
          <a
            href={window.location.href.split("#")[0] + "#" + props.id}
            title="Link to section"
            className="doc-anchor-link"
          >
            #
          </a>
        </div>
      )),
    },
    h3: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Typography
          className={classes.padding}
          gutterBottom
          variant="subtitle1"
          {...props}
        />
      )),
    },
    h4: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Typography
          className={classes.padding}
          gutterBottom
          variant="caption"
          paragraph
          {...props}
        />
      )),
    },
    p: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <Typography
          className={classes.padding}
          paragraph
          variant="body1"
          {...props}
        />
      )),
    },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem} {...props} />
      )),
    },
    a: {
      component: (props) => <MarkdownLinkRenderer {...props} />,
    },
    hr: {
      component: withStyles(styles)(({ classes }) => (
        <Divider variant="middle" className={classes.dividerMargin} />
      )),
    },
    img: {
      component: (props) => (
        <img
          alt={props.alt ? props.alt : ""}
          style={{ maxWidth: "75%", maxHeight: 450 }}
          {...props}
        />
      ),
    },
  },
};

class Markdown extends Component {
  render() {
    return (
      <ReactMarkdown options={options}>{this.props.content}</ReactMarkdown>
    );
  }
}

Markdown.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Markdown;
