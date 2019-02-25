import React, { Component } from "react";
import ReactFrame from "react-iframe";

class Blog extends Component {
  state = {};

  render() {
    return (
      <ReactFrame
        url="https://wear24dev.blogspot.com/"
        styles={{ height: "calc(100vh - 72px)" }}
        width="100%"
      />
    );
  }
}

export default Blog;
