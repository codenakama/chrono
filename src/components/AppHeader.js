import React, { Component } from "react";
import { Button, Menu, Dropdown, Container, Image } from "semantic-ui-react";

class AppHeader extends Component {
  render() {
    return (
      <Menu fixed="top" borderless>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            Chrono
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">Login</Menu.Item>
            <Menu.Item as="a">My timelines</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default AppHeader;
