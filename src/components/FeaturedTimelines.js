import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import TimelineCard from "./TimelineCard";

class FeaturedTimelines extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <TimelineCard
              title="Timeline 1"
              description="description here"
              views={15}
              category="Category 1"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <TimelineCard
              title="Timeline 2"
              description="description here"
              views={10}
              category="Category 2"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FeaturedTimelines;
