import React from "react";
import { Icon, List } from "semantic-ui-react";

const ExampleList = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Icon circular inverted color="teal" name="checkmark" />
      </List.Content>
      <List.Content>Maito</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Icon circular inverted color="teal" name="checkmark" />
      </List.Content>
      <List.Content>Juusto</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Icon circular inverted color="teal" name="checkmark" />
      </List.Content>
      <List.Content>Olut</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Icon circular inverted color="teal" name="checkmark" />
      </List.Content>
      <List.Content>Suklaa</List.Content>
    </List.Item>
  </List>
);

export default ExampleList;
