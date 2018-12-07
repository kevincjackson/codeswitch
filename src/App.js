import "./App.css";
import "tachyons";
import Header from "./Header";
import React, { Component } from "react";
import Search from "./Search";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      errors: [],
      languages: [],
      features: [],
      query: {},
      route: "start"
    };
  }

  getContent = () => {
    if (this.state.route === "start") {
      return <Start onSearch={this.onSearch} />;
    } else if (this.state.route === "signin") {
      return (
        <SignIn
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange}
        />
      )
    } else if (this.state.route === "signup") {
      return <SignUp />;
    } else if (this.state.route === "search") {
      return <Search query={this.query} onSearch={this.onSearch} />;
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

  onSearch = query => {
    this.setState({
      query: query,
      route: "search"
    });
  };

  loadUser = user => {
    this.setState({
      route: "search",
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          loadUser={this.loadUser}
          onHomeClick={this.onHomeClick}
          onRouteChange={this.onRouteChange}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
