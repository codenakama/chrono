import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { FormLabel, FormControlLabel } from "material-ui/Form";
import Radio, { RadioGroup } from "material-ui/Radio";
import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 200
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class FeaturedTimelinesGrid extends React.Component {
  state = {
    spacing: "24"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div>
        <Grid md={12}>
          <Typography type="title">Featured timelines</Typography>
        </Grid>
        <Grid container style={{ flex: 1 }}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item lg={4} md={4} xs={12} sm={4}>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

FeaturedTimelinesGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeaturedTimelinesGrid);
