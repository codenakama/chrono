import React, { Component } from "react";
import PropTypes from "prop-types";
import FeaturedTimelines from "../components/FeaturedTimelines";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";

class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Container text style={{ marginTop: "7em" }}>
            <Header as="h1">Featured timelines</Header>
            <FeaturedTimelines />
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Index;
