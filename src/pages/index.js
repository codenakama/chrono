import React, { Component } from "react";
import PropTypes from "prop-types";
import TimelinesList from "../components/TimelinesList";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";

class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header as="h1">Featured timelines</Header>
          <TimelinesList />
        </Layout>
      </div>
    );
  }
}

export default Index;
