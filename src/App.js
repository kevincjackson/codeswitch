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
      errors: [],
      features: [],
      languages: [],
      route: "start",
      user: null
    };
  }

  getContent = () => {
    if (this.state.route === "start") {
      return (
        <Start
          features={this.state.features}
          languages={this.state.languages}
          setSearch={this.setSearch}
        />
      )
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
      return (
        <Search
          features={this.state.features}
          languages={this.state.languages}
          setSearch={this.setSearch}
        />
      )
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

  setSearch = (features, languages) => {
    this.setState({
      features: features,
      languages: languages,
      route: "search"
    });
  }

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
