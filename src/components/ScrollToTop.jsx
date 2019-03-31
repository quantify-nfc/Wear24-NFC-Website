import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      //console.log("Yoink");
      this.props.scrollbars.current.scrollTop();
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ScrollToTop.propTypes = {
  scrollbars: PropTypes.any.isRequired,
};

export default withRouter(ScrollToTop);
