import "tachyons";
import CodeSampleForm from "./CodeSampleForm";
import Header from "./Header";
import React, { Component } from "react";
import Search from "./Search";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import database from "./database"

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      features: [],
      languages: [],
      route: "start",
      last_route: "start",
      user: database.users[0]
    };
  }

  getContent = () => {
    if (this.state.route === "codeSampleForm") {
      return (
        <CodeSampleForm user={this.state.user} />
      )
    } else if (this.state.route === "start") {
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
          setRoute={this.setRoute}
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

  setRoute = route => {
    this.setState({ last_route: this.state.route, route });
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
      <div className="tc">
        <Header
          user={this.state.user}
          loadUser={this.loadUser}
          onHomeClick={this.onHomeClick}
          setRoute={this.setRoute}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
