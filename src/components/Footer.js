import React from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">1</List.Item>
              <List.Item as="a">2</List.Item>
              <List.Item as="a">3</List.Item>
              <List.Item as="a">4</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">1</List.Item>
              <List.Item as="a">2</List.Item>
              <List.Item as="a">3</List.Item>
              <List.Item as="a">4</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
