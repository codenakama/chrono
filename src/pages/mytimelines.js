import React, { Component } from "react";
import PropTypes from "prop-types";
import TimelinesList from "../components/TimelinesList";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Grid, Button } from "semantic-ui-react";
import Link from "next/link";

export default () => (
  <Layout>
    <Grid>
      <Grid.Column width={6} floated="right">
        <span style={{ marginRight: "1em" }}>Create a new timeline</span>
        <Link href="create">
          <Button circular icon="plus" color="blue" />
        </Link>
      </Grid.Column>
    </Grid>
    <Header as="h1">My timelines</Header>
    <TimelinesList />
  </Layout>
);
