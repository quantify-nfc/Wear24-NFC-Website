import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import ExternalLink from "./ExternalLink";

class LinkRenderer extends Component {
  render() {
    if (this.props.href.match(/^(https?:)?\/\//i)) {
      return (
        <ExternalLink
          url={this.props.href}
          text={this.props.children}
          title="External Link"
        />
      );
    }

    return (
      <Link key={this.props.children} to={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}

LinkRenderer.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkRenderer);
