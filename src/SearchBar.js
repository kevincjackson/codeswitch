import React, { Component } from "react";
import database from "./database";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_ids: props.feature_ids,
      language_ids: props.language_ids
    };
  }

  onFeatureChange = () => {
    const element = document.getElementsByName("feature_ids")[0];
    const values = Array.from(element.selectedOptions).map(v => v.value);
    this.setState({ feature_ids: values });
  };

  onLanguageChange = () => {
    const element = document.getElementsByName("language_ids")[0];
    const values = Array.from(element.selectedOptions).map(v => v.value);
    this.setState({ language_ids: values });
  };

  onSubmit = () => {
    const { setSearch } = this.props;
    const { feature_ids, language_ids } = this.state;

    // Form not filled out
    if (feature_ids.length === 0 || language_ids.length === 0) {
      return;
    }

    setSearch(feature_ids, language_ids);
  };

  render() {
    const language_options = database.languages.map(lang => {
      return (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      );
    });

    const feature_options = database.features.map(feat => {
      return (
        <option key={feat.id} value={feat.id}>
          {feat.name}
        </option>
      );
    });

    return (
      <div>
        <select
          className="mv1 ph1 pv2 dib v-mid"
          multiple={true}
          name="language_ids"
          onChange={this.onLanguageChange}
          size="3"
          value={this.state.language_ids}
        >
          <option disabled>(language)</option>
          {language_options}
        </select>

        <select
          className="mv1 ph1 pv2 dib v-mid"
          multiple={true}
          name="feature_ids"
          onChange={this.onFeatureChange}
          size="3"
          value={this.state.feature_ids}
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
    );
  }
}

export default SearchBar;
