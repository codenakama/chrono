import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "material-ui/Typography";

import { withStyles } from "material-ui/styles";
import withRoot from "../components/withRoot";
import Header from "../components/Header";
import FeaturedTimelinesGrid from "../components/FeaturedTimelinesGrid";

class Index extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Header />
        <FeaturedTimelinesGrid />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles()(Index));
