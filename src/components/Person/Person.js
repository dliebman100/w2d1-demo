// import React, { Component } from "react";

// export default class Person extends Component {
//   render() {
//     return (
//       <div>
//         <h3>{this.props.firstName}</h3>
//         <h3>{this.props.lastName}</h3>
//       </div>
//     );
//   }
// }
import React from "react";

export default function Person(props) {
  return (
    <div>
      Hello, {props.firstName} {props.lastName}
    </div>
  );
}
