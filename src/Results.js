import CodeSample from "./CodeSample";
import React, { Component } from "react";
const server = "http://localhost:3000";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.fetchResults(this.props.feature_ids, this.props.language_ids);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.feature_ids !== prevProps.feature_ids ||
      this.props.language_ids !== prevProps.language_ids
    ) {
      this.fetchResults(this.props.feature_ids, this.props.language_ids);
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
    fetch(server + "/code_samples/search", {
      body: JSON.stringify({ feature_ids, language_ids }),
      headers: { "Content-Type": "application/json" },
      method: "post"
    })
      .then(resp => resp.json())
      .then(results => this.setState({ results }))
      .catch(err => alert("Network error. Couldn't retrieve results."));
  }

  render() {
    return (
      <div>
        <div className="f6 white-50">{this.describeResults()}</div>
        {this.state.results.map(cs => {
          return (
            <CodeSample
              key={cs.id}
              codeSample={cs}
              feature={this.props.features.find(f=>f.id === cs.feature_id).name}
              language={this.props.languages.find(l=>l.id === cs.language_id).name}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;

// {feature_ids.map((feat, index) => {
//   return (
//     <div
//       key={index}
//       className="flex flex-wrap ma3 items-start justify-center"
//     >
//       {language_ids.map((lang, index) => {
//         return (
//           <CodeSample
//             key={index}
//             feature_id={feat}
//             language_id={lang}
//           />
//         );
//       })}
//     </div>
//   );
// })}
