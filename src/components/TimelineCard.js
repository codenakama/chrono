import React, { Component } from "react";
import { Image, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledCardMeta = styled(Card.Meta)`margin-bottom: 1em;`;

class TimelineCard extends Component {
  render() {
    const { title, description, views, category } = this.props;
    return (
      <Card href="http://google.com">
        <Image src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?dpr=2&auto=format&fit=crop&w=568&h=568&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <Card.Content>
          {category && (
            <StyledCardMeta>
              <Icon name="tag" />
              <span className="date">{category}</span>
            </StyledCardMeta>
          )}
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        {views && (
          <Card.Content extra>
            <a>
              <Icon name="eye" />
              {views} views
            </a>
          </Card.Content>
        )}
      </Card>
    );
  }
}

export default TimelineCard;
