import "tachyons";
import CodeSampleForm from "./CodeSampleForm";
import Header from "./Header";
import React, { Component } from "react";
import Search from "./Search";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import database from "./database";

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      feature_ids: [],
      language_ids: [],
      last_route: "start",
      route: "start",
      user: database.users[0]
    };
  }

  getContent = () => {
    if (this.state.route === "codeSampleForm") {
      return (
        <CodeSampleForm
          setLastRoute={this.setLastRoute}
          user={this.state.user}
        />
      );
    } else if (this.state.route === "start") {
      return (
        <Start
          feature_ids={this.state.feature_ids}
          language_ids={this.state.language_ids}
          setSearch={this.setSearch}
        />
      );
    } else if (this.state.route === "signin") {
      return <SignIn setUser={this.setUser} setRoute={this.setRoute} />;
    } else if (this.state.route === "signup") {
      return <SignUp setUser={this.setUser}/>;
    } else if (this.state.route === "search") {
      return (
        <Search
          feature_ids={this.state.feature_ids}
          language_ids={this.state.language_ids}
          setSearch={this.setSearch}
        />
      );
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

  setLastRoute = () => {
    this.setState({ route: this.state.last_route });
  };

  setSearch = (feature_ids, language_ids) => {
    this.setState({
      feature_ids: feature_ids,
      language_ids: language_ids,
      route: "search"
    });
  };

  setUser = user => {
    this.setState({
      route: "search",
      user: user
    });
  };

  render() {
    return (
      <div className="tc">
        <Header
          onHomeClick={this.onHomeClick}
          setRoute={this.setRoute}
          setUser={this.setUser}
          user={this.state.user}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
