import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { withStyles } from "@material-ui/core";

const styles = (themes) => {};

class DocumentationHandler extends Component {
  state = {
    content: "",
  };

  async componentDidMount() {
    const { match } = this.props;

    let page =
      match.params[0] === "" || Object.keys(match.params).length < 1
        ? "/docs/index.md"
        : "/docs/" + match.params[0] + ".md";

    fetch(page).then((response) => {
      if (response.status !== 200) {
        this.setState({
          content: "There was a problem loading the documentation.",
        });
      } else {
        response.text().then((data) => {
          this.setState({ content: data });
        });
      }
    });
  }

  render() {
    const { content } = this.state;

    console.warn(this.props.match.params);

    return (
      <>
        <section style={{ width: "80%", margin: "72px auto" }}>
          <DocumentationPage page={content} />
        </section>
      </>
    );
  }
}

class DocumentationPage extends Component {
  state = {};
  render() {
    const { page } = this.props;

    return <ReactMarkdown source={page} linkTarget="_blank" />;
  }
}

DocumentationPage.propTypes = {
  page: PropTypes.string.isRequired,
};

DocumentationHandler.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DocumentationHandler);
