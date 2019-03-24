import React, { Component } from "react";
import { Link } from "react-router-dom";

const getSubdomain = () => {
  const hostWithoutPort = window.location.hostname.split(":")[0];
  return hostWithoutPort
    .split(".")
    .slice(0, -2)
    .join(".");
};

class BetterLink extends Component {
  render() {
    let { to, children } = this.props;

    let external = false;

    console.warn(getSubdomain());

    if (to.startsWith("//") || to.startsWith("http") || this.props.external) {
      external = true;
    } else if (getSubdomain() != "") {
      console.warn("yeet");
      external = true;
      to = "https://wear24rom.com" + to;
    }

    return external ? (
      <a href={to} {...this.props}>
        {children}
      </a>
    ) : (
      <Link to={to} {...this.props}>
        {children}
      </Link>
    );
  }
}

export default BetterLink;
