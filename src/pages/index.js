/* eslint-disable flowtype/require-valid-file-annotation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "material-ui/Dialog";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import { withStyles } from "material-ui/styles";
import withRoot from "../components/withRoot";

class Index extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Chrono
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles()(Index));
