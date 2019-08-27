// Import React Component
import React, { Component } from "react";

// Inherits from Component
class ClickityClick extends Component {
  // def initialize
  constructor() {
    // Goes up one class and inherits from Component
    super();

    // Sets the initial state for the class
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    this.setState(
      {
        hasBeenClicked: true
      },
      () => console.log(this.state.hasBeenClicked)
    ); // prints true
  };

  render() {
    // Set what is rendered on the page
    return (
      <div>
        {/* Must use ternary */}
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        {/* Click listeners */}
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

// Export
export default ClickityClick;
