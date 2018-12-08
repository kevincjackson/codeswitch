import React, { Component } from "react";
import database from "./database";

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      features: props.features,
      languages: props.languages
    };
  }

  onFeatureChange = (event) => {
    const element = document.getElementsByName("features")[0];
    const values = Array.from(element.selectedOptions).map(v=>v.value);
    this.setState({ features: values });
  }

  onLanguageChange = (event) => {
    const element = document.getElementsByName("languages")[0];
    const values = Array.from(element.selectedOptions).map(v=>v.value);
    this.setState({ languages: values });
  }

  onSubmit = (event) => {
    const { setSearch } = this.props;
    const { features, languages } = this.state;

    // Form not filled out
    if (features.length === 0 || languages.length === 0) {
      return;
    }

    setSearch(features, languages);
  }

  render() {


    const language_options = database.languages.map(lan => {
      return <option key={lan.id} value={lan.id}>{lan.name}</option>
    })

    const feature_options = database.features.map(fea => {
      return <option key={fea.id} value={fea.id}>{fea.name}</option>
    })

    return (
      <div>

        <select
          className="mv1 ph1 pv2 dib v-mid"
          multiple={true}
          name="languages"
          onChange={this.onLanguageChange}
          value={this.state.languages}
        >
          <option disabled>(language)</option>
          {language_options}
        </select>

        <select
          className="mv1 ph1 pv2 dib v-mid"
          multiple={true}
          name="features"
          onChange={this.onFeatureChange}
          value={this.state.features}
        >
          {feature_options}
        </select>

        <button
          onClick={this.onSubmit}
          className="f6 link dim ba br2 ph3 pv2 ma2 dib grow night v-mid"
        >
          go
        </button>

      </div>
    )
  }
}

export default SearchBar;
