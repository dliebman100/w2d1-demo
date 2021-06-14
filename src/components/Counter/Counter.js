import React, { Component } from "react";
import "./Counter.css";
/*
Exercise 1: Modify the functionality to change the color of the counter to green if it goes below 5

Exercise 2: Add a button to reset the counter to 0 or whatever the initial count was set to when passed in as a prop

Exercise 3: Only show the reset button if the counter has been modified from its original state.
*/

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "Dan",
    };
  }
  //when defining a method, use the arrow function syntax for proper `this` binding
  handleIncrement = () => {
    //update the count variable
    if (this.state.count < 20) {
      this.setState((currentState) => {
        const { count } = currentState;
        return {
          count: count + 1,
        };
      });
    }
  };

  handleDecrement = () => {
    //update the count variable
    //check what the current count if it's below 0
    if (this.state.count > 0) {
      this.setState((currentState) => {
        return {
          count: currentState.count - 1,
        };
      });
    }
  };

  handleReset = () => {
    //instead of passing a callback function, pass an argument to setState()
    this.setState({ count: 10 });
  };

  render() {
    //if count is < 5 count should be red
    //if count is > 10 count should be green
    let counterClass;
    if (this.state.count > 10) {
      counterClass = "Counter-active";
    } else if (this.state.count <= 5) {
      counterClass = "Counter-active-green";
    }
    const toggleClass =
      this.state.count === 10 ? null : (
        <button onClick={this.handleReset}>reset</button>
      );

    return (
      <div className="Counter-container">
        <h1>{this.state.name}'s Counter App</h1>
        <h2 className={counterClass}>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>increment (+)</button>
        <button onClick={this.handleDecrement}>decrement (-)</button>
        {toggleClass}
      </div>
    );
  }
}
//You can add className={toggleClass} to the reset button instead
