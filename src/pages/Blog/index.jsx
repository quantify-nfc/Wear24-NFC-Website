import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <iframe
        src="https://wear24dev.blogspot.com/"
        style={{
          height: "calc(100vh - 64px)",
          display: "block",
          width: "100%",
        }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="External Blog"
      />
    );
  }
}

export default Blog;
