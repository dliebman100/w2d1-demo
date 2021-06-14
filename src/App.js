import React, { Component } from "react";
import Welcome from "./components/Welcome/Welcome";
import Person from "./components/Person/Person";
import Counter from "./components/Counter/Counter";

export default class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Counter />
      </div>
    );
  }
}
