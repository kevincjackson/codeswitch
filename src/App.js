import "./App.css";
import "tachyons";
import Header from "./Header";
import React, { Component } from "react";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { username: "w00tw00t" },
      errors: [],
      feature: "",
      language: "",
      results: [],
      route: "start"
    };
  }

  getContent = () => {
    if (this.state.route === "start") {
      return <Start />;
    } else if (this.state.route === "signin") {
      return <SignIn onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === "signup") {
      return <SignUp />;
    } else if (this.state.route === "search_results") {
      return <div>Search Results</div>;
    } else {
      return <div>Unknown Route</div>;
    }
  };

  onHomeClick = () => {
    this.setState({
      route: "start",
      results: []
    });
  };

  onRouteChange = route => {
    this.setState({ route });
  };

  onSearch = () => {
    this.setState({ results: ["r", "e", "s"] });
  };

  onUserChange = user => {
    this.setState({ user: user });
  };

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          onHomeClick={this.onHomeClick}
          onUserChange={this.onUserChange}
          onRouteChange={this.onRouteChange}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
