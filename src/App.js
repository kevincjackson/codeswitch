import "./App.css";
import "tachyons";
import Description from "./Description";
import Header from "./Header";
import React, { Component } from "react";
import Results from "./Results";
import SignIn from "./Signin";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      language: "",
      feature: "",
      results: []
    };
  }

  onHomeClick = () => {
    this.setState({
      start: true,
      results: []
    });
  };

  onSearch = () => {
    this.setState({ start: false });
    this.setState({ results: ["r", "e", "s"] });
  };

  render() {
    return (
      <div className="App">
        <Header onHomeClick={this.onHomeClick} />
        {
          // {this.state.start && <Description />}
          // <SearchBar onSearch={this.onSearch} />
          // <Results results={this.state.results} />
        }
        <SignIn />
      </div>
    );
  }
}

export default App;
