import React, { Component } from "react";

/*
* In your create-react-app project from yesterday, add a new component called ContactForm which accepts the following state variables: `firstName`, `lastName`, `email`, and `message`. You can initialize them with any strings you want. Render the ContactForm component to the page and display the state.

* Modify the form so that if the message field is empty when the user submits the form, the following message is displayed along with the Reset button.

* When building a form, user input is tied to the state of the application so think controlled components.

* Place logic in the render method

Don't
Repeat 
Yourself
*/

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  //custom methods go here above render && use arrow functions to help bind the context within the handleFirtNameChange
  //   handleFirstNameChange = (event) => {
  //     //we are passing in an obj
  //     this.setState({
  //       firstName: event.target.value, //grab the value from the input field
  //     });
  //   };
  //   handleLastNameChange = (event) => {
  //     this.setState({
  //       lastName: event.target.value, //grab the value from the input field
  //     });
  //   };
  //   handleEmailChange = (event) => {
  //     this.setState({
  //       email: event.target.value, //grab the value from the input field
  //     });
  //   };
  //   handleMessageChange = (event) => {
  //     this.setState({
  //       message: event.target.value, //grab the value from the input field
  //     });
  //   };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //handleSubmit updates the submit from (false) to true
  handleSubmit = (event) => {
    event.preventDefault();
    // update the submitted state to true
    this.setState({
      submitted: true,
    });
  };

  //calls setState which render() gets triggered, skips the conditional and calls JSX elements
  handleReset = () => {
    this.setState({
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    };
    
    //destructure the variables into this.state
    render() {
        const { submitted, message, firstName, lastName, email } = this.state;
    if (submitted === true) {
      if (message === "") {
        return (
          <section>
            <p>Error! You have reached the error page for the error page...</p>
            <p>You win!!!!!</p>
            <button onClick={this.handleReset}>Take me back</button>
          </section>
        );
      }
      return (
        <section>
          <p>
            Thank you, {firstName}, for submitting the form with the
            following message: {message}
          </p>
          <button onClick={this.handleReset}>Reset Form</button>
        </section>
      );
    }
    //user input tied to the state
    return (
      <div>
        <h1>
          {`${firstName} ${lastName} ${email} ${message}`}{" "}
          Contact Form
        </h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label htmlFor="message">Message: </label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </li>
            <button>Send Contact Form</button>
          </ul>
        </form>
      </div>
    );
  }
}
