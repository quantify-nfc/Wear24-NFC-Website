import React, { Component } from "react";
import { Typography, Paper, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import BetterLink from "../../components/Link";

import * as ROUTES from "../../constants/routes";

import $ from "jquery";
import { TweenLite } from "gsap";

import "./android.css";

const styles = {};

class Error404 extends Component {
  state = {
    themeType: null,
  };

  componentDidMount() {
    $.fn.parallax = function(resistance, mouse) {
      let $el = $(this);
      TweenLite.to($el, 0.2, {
        x: -((mouse.clientX - window.innerWidth / 2) / resistance),
        y: -((mouse.clientY - window.innerHeight / 2) / resistance),
      });
    };

    $(document).mousemove(function(e) {
      $(".background").parallax(-30, e);
      $(".cloud1").parallax(10, e);
      $(".cloud2").parallax(20, e);
      $(".cloud3").parallax(30, e);
    });

    let cs = document.getElementsByClassName("glitchCanvas");

    for (let c of cs) {
      let img = new Image();
      img.src = c.dataset.imageurl;

      c.width = c.dataset.w;
      c.height = c.dataset.h;

      let $ = c.getContext("2d");

      let ms = false;
      let w = 0,
        h = 0;

      let set = function() {
        let run, _h, _w, dx, a;
        w = img.width;
        h = img.height;
        $.translate(25, 25);
        a = 30;
        dx = 0;
        _w = w + 25;
        _h = h + 25;
        return (run = function() {
          let inc, i, j;
          $.clearRect(-a, -a, _w, _h);
          inc = ms === true ? 0.5 : 0.18;
          for (j = 0; j <= h; i = 0 <= h ? ++j : --j) {
            dx = ~~(inc * (Math.random() - 0.5) * a);
            $.drawImage(img, 0, i, w, 1, dx, i, w, 1);
          }
          window.requestAnimationFrame(run);
        })();
      };
      img.onload = function() {
        return set();
      };
      c.addEventListener(
        "mouseover",
        function() {
          return (ms = true);
        },
        false
      );
      c.addEventListener(
        "touchmove",
        function(e) {
          e.preventDefault();
          return (ms = true);
        },
        false
      );
      c.addEventListener(
        "mouseout",
        function() {
          return (ms = false);
        },
        false
      );
      c.addEventListener(
        "touchend",
        function() {
          return (ms = false);
        },
        false
      );
    }
  }

  componentWillMount() {
    const { theme } = this.props;

    if (this.state.themeType !== theme.palette.type)
      this.setState({ themeType: theme.palette.type });
  }

  render() {
    return (
      <section
        style={{
          position: "relative",
          width: "max-content",
          margin: "auto",
          height: "100vh",
          maxWidth: "95vw",
        }}
        className="clearfix"
      >
        <Paper
          id="errorSection"
          elevation={4}
          style={{
            margin: "96px auto 36px auto",
            paddingBottom: 16,
            width: "max-content",
            maxWidth: "95%",
            minWidth: "50vw",
            top: 0,
            display: "block",
          }}
        >
          <canvas
            id="error404canvas"
            data-w="637"
            data-h="360"
            style={{
              alignSelf: "center",
              maxWidth: "95%",
              margin: "auto",
              display: "block",
            }}
            className="glitchCanvas"
            data-imageurl={`/img/${this.state.themeType}/404.png`}
          />
          <span
            style={{
              clear: "both",
              content: "",
              display: "table",
            }}
          />
          <BetterLink
            to={ROUTES.HOME}
            style={{ float: "left", marginLeft: 32, maxWidth: "40%" }}
          >
            <canvas
              data-w="250"
              data-h="100"
              className="glitchCanvas"
              data-imageurl={`/img/${this.state.themeType}/goHome.png`}
              style={{
                margin: "auto",
                display: "block",
                maxWidth: "100%",
              }}
            />
          </BetterLink>
          <BetterLink
            to={ROUTES.HOME}
            style={{ float: "right", marginRight: 32, maxWidth: "40%" }}
            onClick={() => {
              window.history.back();
              return false;
            }}
          >
            <canvas
              data-w="250"
              data-h="100"
              style={{
                margin: "auto",
                display: "block",
                maxWidth: "100%",
              }}
              className="glitchCanvas"
              data-imageurl={`/img/${this.state.themeType}/goBack.png`}
            />
          </BetterLink>
          <span
            style={{
              clear: "both",
              content: "",
              display: "table",
            }}
          />
        </Paper>
        <section id="androidContainer">
          <div id="android">
            <div id="head">
              <div className="antenna a1" />
              <div className="antenna a2" />
              <div className="eyes a1" />
              <div className="eyes a2" />
            </div>
            <div id="body">
              <div className="shape b1" />
              <div className="shape b2" />
              <div className="shape b3" />
              <div className="shape b4" />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

Error404.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Error404);
