import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.firstName}</h3>
        <h3>{this.props.lastName}</h3>
      </div>
    );
  }
}

export default Person;
