import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ostos</h1>
        </header>

        <p className="App-intro">Eeppinen ostoslistasovellus.</p>

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
    );
  }
}

export default App;
