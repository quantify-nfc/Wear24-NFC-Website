import React, { Component } from "react";
import PropTypes from "prop-types";
import OpenInNewIcon from "mdi-react/OpenInNewIcon";

class ExternalLink extends Component {
  state = {};
  render() {
    const { url, title, text } = this.props;

    return (
      <>
        <span className="linkContainer" style={{ whiteSpace: "nowrap" }}>
          <a
            className="externalLink"
            href={url}
            rel="noopener noreferrer"
            title={title}
            target="_blank"
          >
            {text}
          </a>
          <OpenInNewIcon size={14} />
        </span>
      </>
    );
  }
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default ExternalLink;
