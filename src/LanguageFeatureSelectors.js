import React, { Component } from "react";
const server = "http://localhost:3000";

class LanguageFeatureSelectors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_ids: props.feature_ids,
      features: [],
      language_ids: props.language_ids,
      languages: []
    };
  }

  componentDidMount() {
    fetch(server + "/languages")
      .then(resp => resp.json())
      .then(languages => this.setState({ languages: languages }));
    fetch(server + "/features")
      .then(resp => resp.json())
      .then(features => this.setState({ features: features }));
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
    const language_options = this.state.languages.map(lang => {
      return (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      );
    });

    const feature_options = this.state.features.map(feat => {
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
      </div>
    );
  }
}

export default SearchBar;
