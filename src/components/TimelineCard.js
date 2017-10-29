import React, { Component } from "react";
import { Image, Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

const StyledCardMeta = styled(Card.Meta)`margin-bottom: 1em;`;

class TimelineCard extends Component {
  render() {
    const { title, description, views, category } = this.props;
    return (
      <Card href="http://google.com">
        <Image src="/assets/images/avatar/large/matthew.png" />
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
