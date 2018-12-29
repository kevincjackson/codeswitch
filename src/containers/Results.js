import LanguageFeatureGroup from "../components/LanguageFeatureGroup";
import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    this.fetchResults(this.props.feature_ids, this.props.language_ids);
  }

  componentDidUpdate(prevProps) {
    const { feature_ids, language_ids } = this.props;
    if (
      feature_ids !== prevProps.feature_ids ||
      language_ids !== prevProps.language_ids
    ) {
      this.fetchResults(feature_ids, language_ids);
    }
  }

  describeResults() {
    const results = this.state.results.length;
    if (results === 0) {
      return "No results";
    } else if (results === 1) {
      return "1 result";
    } else {
      return `${results} results`;
    }
  }

  fetchResults(feature_ids, language_ids) {
    fetch(process.env.REACT_APP_SERVER + "/code_samples/search", {
      body: JSON.stringify({ feature_ids, language_ids }),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(resp => resp.json())
      .then(results => this.setState({ results }))
      .catch(err => alert("Server couldn't retrieve results."));
  }

  // -> [{feature, language, code_samples}]
  languageFeatureGroups = () => {
    const { features, languages } = this.props;
    const feature_ids = this.props.feature_ids.map(id => parseInt(id));
    const language_ids = this.props.language_ids.map(id => parseInt(id));
    const matrix = feature_ids.map(f => language_ids.map(l => [l, f])).flat();
    return matrix.map(ids => {
      return {
        feature: features.find(f => f.id === ids[1]),
        language: languages.find(l => l.id === ids[0]),
        code_samples: this.state.results.filter(
          cs => cs.feature_id === ids[1] && cs.language_id === ids[0]
        )
      };
    });
  };

  render() {
    return (
      <div>
        <div className="f6 white-50">{this.describeResults()}</div>
        {this.languageFeatureGroups().map((group, index) => {
          return (
            <LanguageFeatureGroup
              key={index}
              feature={group.feature}
              language={group.language}
              code_samples={group.code_samples}
              setRoute={this.props.setRoute}
              user={this.props.user}
              usernames={this.props.usernames}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
