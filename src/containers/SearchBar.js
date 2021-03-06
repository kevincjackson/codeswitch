import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feature_ids: props.feature_ids,
      language_ids: props.language_ids
    };
  }

  get_language_options = () => {
    return this.props.languages.map(lang => {
      return (
        <option key={lang.id} value={lang.id}>
          {lang.name}
        </option>
      );
    });
  };

  get_feature_options = () => {
    return this.props.features.map(feat => {
      return (
        <option key={feat.id} value={feat.id}>
          {feat.name}
        </option>
      );
    });
  };


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
          {this.get_language_options()}
        </select>

        <select
          className="mv1 ph1 pv2 dib v-mid"
          multiple={true}
          name="feature_ids"
          onChange={this.onFeatureChange}
          size="3"
          value={this.state.feature_ids}
        >
          {this.get_feature_options()}
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
