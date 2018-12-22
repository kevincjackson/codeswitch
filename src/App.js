import "tachyons";
import CodeSampleForm from "./CodeSampleForm";
import FeatureForm from "./FeatureForm";
import LanguageForm from "./LanguageForm";
import Header from "./Header";
import React, { Component } from "react";
import SearchResults from "./SearchResults";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const server = "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      features: [],
      feature_ids: [],
      languages: [],
      language_ids: [],
      last_route: "start",
      route: "start",
      user: null
    };
  }

  componentDidMount() {
    fetch(server + "/languages")
      .then(resp => resp.json())
      .then(languages => this.setState({ languages: languages }))
      .catch(err => alert("Network error: couldn't retrieve languages."));
    fetch(server + "/features")
      .then(resp => resp.json())
      .then(features => this.setState({ features: features }))
      .catch(err => alert("Network Error: couldn't retrieve features."));
  }

  getContent = () => {
    if (this.state.route === "codeSampleForm") {
      return (
        <CodeSampleForm
          features={this.state.features}
          languages={this.state.languages}
          setRoute={this.setRoute}
          user={this.state.user}
        />
      );
    } else if (this.state.route === "featureForm") {
      return <FeatureForm setRoute={this.setRoute} user={this.state.user} />;
    } else if (this.state.route === "languageForm") {
      return <LanguageForm setRoute={this.setRoute} user={this.state.user} />;
    } else if (this.state.route === "start") {
      return (
        <Start
          features={this.state.features}
          feature_ids={this.state.feature_ids}
          languages={this.state.languages}
          language_ids={this.state.language_ids}
          setSearch={this.setSearch}
        />
      );
    } else if (this.state.route === "signin") {
      return <SignIn setUser={this.setUser} setRoute={this.setRoute} />;
    } else if (this.state.route === "signup") {
      return <SignUp setUser={this.setUser} />;
    } else if (this.state.route === "search") {
      return (
        <SearchResults
          features={this.state.features}
          feature_ids={this.state.feature_ids}
          languages={this.state.languages}
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
      route: "start"
    });
  };

  setRoute = route => {
    this.setState({
      last_route: this.state.route,
      route: route
    });
  };

  setLastRoute = () => {
    if (this.route !== this.last_route) {
      this.setState({ route: this.state.last_route });
    }
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
