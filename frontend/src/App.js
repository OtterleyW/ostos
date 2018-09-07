import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import ExampleList from "./ExampleList";
import configureStore from "./state/configureStore";

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
            content={`Hurraa ${this.props.moos}`}
            icon="heart"
            label={{
              basic: true,
              color: "blue",
              pointing: "left",
              content: "2,048"
            }}
            onClick={() => this.props.doMoo()}
          />
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    moos: state.moos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doMoo: () => dispatch({ type: "MOO" })
  };
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function AppWrapper() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

export default AppWrapper;
