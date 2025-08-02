import React, { Component } from "react";

import "./App.css";

/**
 * A child class component to display user details received as props.
 */
class UserDetails extends Component {
  render() {
    const { name, role } = this.props;
    return (
      <div className="user-card">
        <h3 className="user-name">{name}</h3>
        <p className="user-role">{role}</p>
      </div>
    );
  }
}

/**
 * The parent class component that manages state and passes props to the child.
 */
class App extends Component {
  constructor(props) {
    super(props);
    // Initial state with user information
    this.state = {
      user: {
        name: "John Doe",
        role: "Software Engineer",
      },
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">User Information</h1>
        <UserDetails name={this.state.user.name} role={this.state.user.role} />
      </div>
    );
  }
}

export default App;
