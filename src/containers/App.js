import "tachyons";
import CodeSampleForm from "./CodeSampleForm";
import FeatureForm from "./FeatureForm";
import LanguageForm from "./LanguageForm";
import Header from "../components/Header";
import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import Start from "../components/Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
      user: null,
      usernames: []
    };
  }

  componentDidMount() {
    this.fetchLanguages();
    this.fetchFeatures();
    this.fetchUsernames();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.languages.length !== prevState.languages.length) {
      this.fetchLanguages();
    }
    if (this.state.features.length !== prevState.features.length) {
      this.fetchFeatures();
    }
  };


  fetchFeatures() {
    fetch(process.env.REACT_APP_SERVER + "/features")
      .then(resp => resp.json())
      .then(features => this.setState({ features: features }))
      .catch(err => alert("Server couldn't retrieve features."));
  }

  fetchLanguages() {
    fetch(process.env.REACT_APP_SERVER + "/languages")
      .then(resp => resp.json())
      .then(languages => this.setState({ languages: languages }))
      .catch(err => alert("Server couldn't retrieve languages."));
  }

  fetchUsernames() {
    fetch(process.env.REACT_APP_SERVER + "/usernames")
      .then(resp => resp.json())
      .then(usernames => this.setState({ usernames: usernames }))
      .catch(err => alert("Server couldn't usernames."));
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
      return (
        <FeatureForm
          onFeatureSubmit={this.onFeatureSubmit}
          setRoute={this.setRoute}
          user={this.state.user}
        />
      );
    } else if (this.state.route === "languageForm") {
      return (
        <LanguageForm
          onLanguageSubmit={this.onLanguageSubmit}
          setRoute={this.setRoute}
          user={this.state.user}
        />
      );
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
          setRoute={this.setRoute}
          setSearch={this.setSearch}
          user={this.state.user}
          usernames={this.state.usernames}
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

  onLanguageSubmit = (name, user) => {
    // Client Validation
    // Validates non-blanks
    if (!name) {
      return;
    }

    // Validate user
    if (!user) {
      alert("Ooops! Please sign in or sign up first.");
      return;
    }

    // Server submit
    fetch(process.env.REACT_APP_SERVER + "/languages", {
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(res => res.json())
      .then(lang => {
        if (lang.id) {
          this.setState({ languages: [] });
          this.setRoute("start");
        } else {
          alert("Ooops! Server couldn't post new language.");
        }
      })
      .catch(err => alert("Server can't be reached."));
  };

  onFeatureSubmit = (name, description, user) => {
    // Client Validation
    // Validates non-blanks
    if (!name || !description) {
      return;
    }

    // Validate user
    if (!user) {
      alert("Ooops! Please sign in or sign up first.");
      return;
    }

    // Server submit
    fetch(process.env.REACT_APP_SERVER + "/features", {
      body: JSON.stringify({ name, description }),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(res => res.json())
      .then(feat => {
        if (feat.id) {
          this.setState({ features: [] });
          this.setRoute("start");
        } else {
          alert("Ooops! Server couldn't post new feature.");
        }
      })
      .catch(err => alert("Server can't be reached."));
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
