import React from "react";
import { Link } from "react-router-dom";

import { Button, Item } from "semantic-ui-react";

const TopicItem = ({
  topic: { name, short_description, score, created_by, created_at }
}) => (
  <Item>
    <Item.Content>
      <Item.Header as="a">{name}</Item.Header>
      <Item.Meta>
        <span>Created By:</span>
        <span>{created_by}</span>
      </Item.Meta>
      <Item.Description>{short_description}</Item.Description>
      <Item.Extra>
        <Link to={`/topics/${name}`}>
          <Button
            floated="right"
            content="More"
            icon="angle right"
            labelPosition="right"
            color="blue"
          />
        </Link>
        <Button
          basic
          color="yellow"
          content="Score"
          icon="star"
          label={{
            basic: true,
            color: "black",
            pointing: "left",
            content: `${score}`
          }}
        />
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default TopicItem;
