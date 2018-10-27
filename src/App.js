import "./App.css";
import "tachyons";
import Description from "./Description";
import FeatureSelector from "./FeatureSelector";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import React, { Component } from "react";
import Results from "./Results";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      start: true,
      results: []
    };
  }

  onSearch = () => {
    this.setState({ start: false });
    this.setState({ results: ["r", "e", "s"] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.start && <Description />}
        <SearchBar onSearch={this.onSearch} />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;
