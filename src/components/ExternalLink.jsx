import React, { Component } from "react";
import PropTypes from "prop-types";
import OpenInNewIcon from "mdi-react/OpenInNewIcon";

class ExternalLink extends Component {
  render() {
    const { url, title, children, text } = this.props;

    let content = text;
    let wrap = "nowrap";

    if (children) {
      content = children;
    }

    if (content.length > 25) wrap = "initial";

    return (
      <>
        <span className="linkContainer" style={{ whiteSpace: wrap }}>
          <a
            className="externalLink"
            href={url}
            rel="noopener noreferrer"
            title={title}
            target="_blank"
          >
            {content}
          </a>
          <OpenInNewIcon size={14} />
        </span>
      </>
    );
  }
}

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.any.isRequired,
  title: PropTypes.string,
};

export default ExternalLink;
