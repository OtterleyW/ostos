import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import ExampleList from "./ExampleList";

class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <Header as="h1" className="App-header">
            Ostos
          </Header>

          <p className="App-intro">Eeppinen ostoslistasovellus.</p>
          <ExampleList />
          <Button
            color="teal"
            content="Hurraa"
            icon="heart"
            label={{
              basic: true,
              color: "blue",
              pointing: "left",
              content: "2,048"
            }}
          />
        </div>
      </Container>
    );
  }
}

export default App;
